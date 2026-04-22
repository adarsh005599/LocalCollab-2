'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { TrendingUp, Search, MessageCircle, User, Send, Handshake, Bell, X } from 'lucide-react';
import { storage } from '@/lib/storage';
import { supabase } from '@/lib/supabase';
import { formatTime, getInitials } from '@/lib/utils';
import Sidebar from '@/components/Sidebar';

const C = {
    bg: '#F5F5DC',
    surface: '#FFFFFF',
    primary: '#397754',
    primaryLight: '#4B9B6E',
    primaryHover: '#2B5A3F',
    secondary: '#EB6B40',
    secondaryHover: '#C1522D',
    secondaryDim: 'rgba(235, 107, 64, 0.1)',
    text: '#1E293B',
    textMuted: '#64748B',
    border: '#E2E8F0',
};

// ── Toast Component ──
function Toast({ toasts, onDismiss }) {
    return (
        <div style={{ position: 'fixed', top: 24, right: 24, zIndex: 9999, display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 360 }}>
            {toasts.map(t => (
                <div key={t.id} style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderLeft: `4px solid ${C.primary}`,
                    borderRadius: 12,
                    padding: '14px 16px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    animation: 'slideIn 0.3s ease',
                }}>
                    <Bell size={18} color={C.primary} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: C.text, margin: '0 0 2px' }}>{t.title}</p>
                        <p style={{ fontSize: 13, color: C.textMuted, margin: 0 }}>{t.message}</p>
                    </div>
                    <button onClick={() => onDismiss(t.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.textMuted, padding: 0, flexShrink: 0 }}>
                        <X size={14} />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default function ShopMessagesPage() {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState(null);
    const [shop, setShop] = useState(null);
    const [conversations, setConversations] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [toasts, setToasts] = useState([]);
    // unreadMap: { [userId]: count }
    const [unreadMap, setUnreadMap] = useState({});
    // track last seen message count per conversation to detect new ones
    const lastSeenCountRef = useRef({});
    const messagesEndRef = useRef(null);
    const selectedConvoRef = useRef(null);
    const currentUserRef = useRef(null);

    const shopNav = [
        { href: '/shop/dashboard', icon: <TrendingUp size={18} />, label: 'Dashboard' },
        { href: '/shop/search', icon: <Search size={18} />, label: 'Find Influencers' },
        { href: '/shop/offers', icon: <Handshake size={18} />, label: 'Offers' },
        { href: '/shop/messages', icon: <MessageCircle size={18} />, label: 'Messages' },
        { href: '/shop/profile', icon: <User size={18} />, label: 'Profile' },
    ];

    const addToast = useCallback((title, message) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, title, message }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 5000);
    }, []);

    const dismissToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    useEffect(() => {
        const init = async () => {
            const user = await storage.getCurrentUser();
            if (!user || user.role !== 'shop') { router.push('/login'); return; }
            setCurrentUser(user);
            currentUserRef.current = user;
            const shopProfile = await storage.getShopByUserId(user.id);
            if (!shopProfile) { router.push('/shop/profile?setup=true'); return; }
            setShop(shopProfile);

            const urlParams = new URLSearchParams(window.location.search);
            const startChatWithUserId = urlParams.get('userId');

            await loadConversations(user.id, startChatWithUserId);

            if (startChatWithUserId) {
                router.replace('/shop/messages', { scroll: false });
            }

            setLoading(false);
        };
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);

    useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

    // Keep ref in sync
    useEffect(() => { selectedConvoRef.current = selectedConversation; }, [selectedConversation]);

    const loadConversations = async (userId, startChatWithUserId = null) => {
        const [allMessages, allInfluencers] = await Promise.all([storage.getMessages(), storage.getInfluencers()]);
        const conversationMap = new Map();

        allMessages.forEach(msg => {
            if (msg.senderId === userId || msg.receiverId === userId) {
                const partnerId = msg.senderId === userId ? msg.receiverId : msg.senderId;
                if (!conversationMap.has(partnerId) || new Date(msg.timestamp) > new Date(conversationMap.get(partnerId).lastMessageTime)) {
                    conversationMap.set(partnerId, { userId: partnerId, lastMessage: msg.text, lastMessageTime: msg.timestamp });
                }
            }
        });

        if (startChatWithUserId && !conversationMap.has(startChatWithUserId)) {
            conversationMap.set(startChatWithUserId, {
                userId: startChatWithUserId,
                lastMessage: 'New conversation...',
                lastMessageTime: new Date().toISOString()
            });
        }

        const convos = Array.from(conversationMap.values()).map(convo => {
            const inf = allInfluencers.find(i => i.userId === convo.userId);
            return { ...convo, partnerName: inf?.name || 'Unknown', influencer: inf };
        }).sort((a, b) => new Date(b.lastMessageTime) - new Date(a.lastMessageTime));

        setConversations(convos);

        if (startChatWithUserId) {
            const newConvo = convos.find(c => c.userId === startChatWithUserId);
            if (newConvo) await selectConversation(newConvo, userId);
        } else if (convos.length > 0 && !selectedConvoRef.current) {
            await selectConversation(convos[0], userId);
        }
    };

    const selectConversation = async (convo, userId) => {
        setSelectedConversation(convo);
        selectedConvoRef.current = convo;
        const msgs = await storage.getConversation(userId || currentUserRef.current?.id, convo.userId);
        setMessages(msgs);
        // Mark as read — clear unread count
        setUnreadMap(prev => ({ ...prev, [convo.userId]: 0 }));
        lastSeenCountRef.current[convo.userId] = msgs.length;
    };

    // Realtime subscription
    useEffect(() => {
        if (!selectedConversation || !currentUser) return;

        const channel = supabase
            .channel('realtime_messages')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
                const newMsg = payload.new;
                const senderId = newMsg.sender_id;
                const receiverId = newMsg.receiver_id;
                const uid = currentUserRef.current?.id;

                if (senderId === selectedConvoRef.current?.userId && receiverId === uid) {
                    // Incoming message in the currently open chat
                    const incomingMsg = {
                        id: newMsg.id,
                        senderId: newMsg.sender_id,
                        receiverId: newMsg.receiver_id,
                        text: newMsg.text,
                        timestamp: newMsg.created_at,
                    };
                    setMessages(prev => [...prev, incomingMsg]);

                    // Toast for new message
                    addToast(
                        `New message from ${selectedConvoRef.current?.partnerName || 'someone'}`,
                        newMsg.text.length > 60 ? newMsg.text.slice(0, 60) + '…' : newMsg.text
                    );

                    setConversations(prev => prev.map(c =>
                        c.userId === senderId
                            ? { ...c, lastMessage: incomingMsg.text, lastMessageTime: incomingMsg.timestamp }
                            : c
                    ).sort((a, b) => new Date(b.lastMessageTime) - new Date(a.lastMessageTime)));

                } else if (receiverId === uid) {
                    // Message to us in a background conversation → increment unread badge
                    setUnreadMap(prev => ({
                        ...prev,
                        [senderId]: (prev[senderId] || 0) + 1,
                    }));

                    // Update sidebar preview
                    setConversations(prev => {
                        const exists = prev.some(c => c.userId === senderId);
                        const updated = exists
                            ? prev.map(c => c.userId === senderId ? { ...c, lastMessage: newMsg.text, lastMessageTime: newMsg.created_at } : c)
                            : [...prev, { userId: senderId, lastMessage: newMsg.text, lastMessageTime: newMsg.created_at, partnerName: senderId }];
                        return updated.sort((a, b) => new Date(b.lastMessageTime) - new Date(a.lastMessageTime));
                    });

                    // Toast for background message
                    addToast('New message!', newMsg.text.length > 60 ? newMsg.text.slice(0, 60) + '…' : newMsg.text);
                }
            })
            .subscribe();

        return () => { supabase.removeChannel(channel); };
    }, [selectedConversation, currentUser, addToast]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !selectedConversation) return;

        const targetUserId = selectedConversation.userId;
        const message = {
            senderId: currentUser.id,
            receiverId: targetUserId,
            text: newMessage.trim()
        };

        try {
            await storage.addMessage(message);
            setMessages(prev => [...prev, { ...message, timestamp: new Date().toISOString() }]);
            setNewMessage('');

            setConversations(prev => prev.map(c =>
                c.userId === targetUserId
                    ? { ...c, lastMessage: message.text, lastMessageTime: message.timestamp }
                    : c
            ).sort((a, b) => new Date(b.lastMessageTime) - new Date(a.lastMessageTime)));
        } catch (error) {
            console.error("Failed to send message:", error);
            alert("Could not send message. Please try again.");
        }
    };

    const handleLogout = async () => { await storage.logout(); router.push('/'); };

    const sidebarUser = {
        name: shop?.businessName || '…',
        subtitle: shop?.city || '',
        initials: getInitials(shop?.businessName || ''),
        profileHref: '/shop/profile'
    };

    // Total unread across all convos (for possible future nav badge)
    const totalUnread = Object.values(unreadMap).reduce((a, b) => a + b, 0);

    return (
        <div style={{ minHeight: '100vh', background: C.bg, fontFamily: 'Inter, sans-serif' }}>
            <Toast toasts={toasts} onDismiss={dismissToast} />
            <Sidebar navItems={shopNav} user={sidebarUser} onLogout={handleLogout} />

            <main style={{ marginLeft: 280, height: '100vh', display: 'flex', flexDirection: 'column', background: C.bg, padding: '24px 24px 24px 0' }}>
                {loading ? (
                    <div style={{ flex: 1, padding: 24 }}>
                        <div style={{ height: 32, width: 240, background: C.border, borderRadius: 8, marginBottom: 24, animation: 'pulse 2s infinite' }} />
                        <div style={{ height: 'calc(100vh - 104px)', background: C.surface, borderRadius: 16, border: `1px solid ${C.border}`, animation: 'pulse 2s infinite' }} />
                    </div>
                ) : (
                    <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        {/* Header */}
                        <div style={{ padding: '24px', borderBottom: `1px solid ${C.border}`, background: C.surface, display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ flex: 1 }}>
                                <h1 style={{ fontSize: 24, fontWeight: 900, color: C.text, margin: '0 0 4px' }}>Messages</h1>
                                <p style={{ fontSize: 14, color: C.textMuted, margin: 0 }}>{conversations.length} conversation{conversations.length !== 1 ? 's' : ''}</p>
                            </div>
                            {/* Global unread badge in header */}
                            {totalUnread > 0 && (
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: 6,
                                    background: 'rgba(235,107,64,0.1)', border: '1px solid rgba(235,107,64,0.3)',
                                    borderRadius: 20, padding: '6px 14px',
                                }}>
                                    <Bell size={14} color={C.secondary} />
                                    <span style={{ fontSize: 13, fontWeight: 800, color: C.secondary }}>
                                        {totalUnread} new
                                    </span>
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                            {/* Conversations list */}
                            <div style={{ width: 320, borderRight: `1px solid ${C.border}`, background: '#FAFAFA', overflowY: 'auto', flexShrink: 0 }}>
                                {conversations.length === 0 ? (
                                    <div style={{ padding: 32, textAlign: 'center' }}>
                                        <MessageCircle size={32} color={C.textMuted} style={{ marginBottom: 16, opacity: 0.5 }} />
                                        <p style={{ fontSize: 15, fontWeight: 700, color: C.text, margin: '0 0 8px' }}>No conversations yet</p>
                                        <p style={{ fontSize: 14, color: C.textMuted, margin: 0 }}>Message an influencer from search</p>
                                    </div>
                                ) : conversations.map(convo => {
                                    const isSelected = selectedConversation?.userId === convo.userId;
                                    const unreadCount = unreadMap[convo.userId] || 0;
                                    return (
                                        <button
                                            key={convo.userId}
                                            onClick={() => selectConversation(convo)}
                                            style={{
                                                width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                                                padding: '16px 20px', textAlign: 'left', border: 'none',
                                                borderBottom: `1px solid ${C.border}`, cursor: 'pointer',
                                                background: isSelected ? 'rgba(57,119,84,0.08)' : unreadCount > 0 ? 'rgba(235,107,64,0.04)' : 'transparent',
                                                transition: 'background 0.15s',
                                                position: 'relative',
                                            }}
                                        >
                                            {/* Avatar with unread dot */}
                                            <div style={{ position: 'relative', flexShrink: 0 }}>
                                                <div style={{
                                                    width: 44, height: 44, borderRadius: '50%',
                                                    background: isSelected ? C.primary : C.surface,
                                                    border: `1px solid ${isSelected ? 'transparent' : unreadCount > 0 ? C.secondary : C.border}`,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                }}>
                                                    <span style={{ fontSize: 15, fontWeight: 800, color: isSelected ? '#fff' : C.textMuted }}>
                                                        {getInitials(convo.partnerName)}
                                                    </span>
                                                </div>
                                                {/* Unread dot on avatar */}
                                                {unreadCount > 0 && (
                                                    <div style={{
                                                        position: 'absolute', top: -2, right: -2,
                                                        minWidth: 18, height: 18,
                                                        background: C.secondary, borderRadius: 9,
                                                        border: '2px solid #FAFAFA',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        padding: '0 4px',
                                                    }}>
                                                        <span style={{ fontSize: 10, fontWeight: 800, color: '#fff' }}>
                                                            {unreadCount > 9 ? '9+' : unreadCount}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <p style={{
                                                    fontSize: 15,
                                                    fontWeight: unreadCount > 0 ? 800 : 700,
                                                    color: isSelected ? C.primary : unreadCount > 0 ? C.text : C.text,
                                                    margin: '0 0 4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                                                }}>
                                                    {convo.partnerName}
                                                </p>
                                                <p style={{
                                                    fontSize: 13,
                                                    fontWeight: unreadCount > 0 ? 700 : 400,
                                                    color: unreadCount > 0 ? C.text : isSelected ? C.text : C.textMuted,
                                                    margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                                                }}>
                                                    {convo.lastMessage}
                                                </p>
                                            </div>

                                            {/* Unread pill on the right */}
                                            {unreadCount > 0 && (
                                                <div style={{
                                                    minWidth: 20, height: 20, borderRadius: 10,
                                                    background: C.secondary,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    padding: '0 6px', flexShrink: 0,
                                                }}>
                                                    <span style={{ fontSize: 11, fontWeight: 800, color: '#fff' }}>
                                                        {unreadCount > 9 ? '9+' : unreadCount}
                                                    </span>
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Chat window */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, background: C.surface }}>
                                {selectedConversation ? (
                                    <>
                                        {/* Chat header */}
                                        <div style={{ padding: '16px 24px', borderBottom: `1px solid ${C.border}`, background: C.surface, display: 'flex', alignItems: 'center', gap: 12 }}>
                                            <div style={{
                                                width: 44, height: 44, borderRadius: '50%',
                                                background: 'rgba(57,119,84,0.1)', border: '1px solid rgba(57,119,84,0.2)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                <span style={{ fontSize: 15, fontWeight: 800, color: C.primary }}>
                                                    {getInitials(selectedConversation.partnerName)}
                                                </span>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <p style={{ fontSize: 16, fontWeight: 800, color: C.text, margin: '0 0 2px' }}>{selectedConversation.partnerName}</p>
                                                <p style={{ fontSize: 13, color: '#10B981', margin: 0, fontWeight: 600 }}>● Online</p>
                                            </div>
                                        </div>

                                        {/* Messages */}
                                        <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 16, background: '#FAFAFA' }}>
                                            {messages.map((msg, idx) => {
                                                const isMe = msg.senderId === currentUser.id;
                                                return (
                                                    <div key={idx} style={{ display: 'flex', justifyContent: isMe ? 'flex-end' : 'flex-start' }}>
                                                        <div style={{
                                                            maxWidth: '65%', padding: '12px 18px',
                                                            borderRadius: isMe ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                                                            background: isMe ? C.primary : C.surface,
                                                            border: isMe ? 'none' : `1px solid ${C.border}`,
                                                            boxShadow: isMe ? '0 4px 12px rgba(57,119,84,0.2)' : '0 2px 4px rgba(0,0,0,0.02)',
                                                        }}>
                                                            <p style={{ fontSize: 15, color: isMe ? '#fff' : C.text, margin: '0 0 6px', lineHeight: 1.5 }}>{msg.text}</p>
                                                            <p style={{ fontSize: 11, fontWeight: 600, color: isMe ? 'rgba(255,255,255,0.7)' : C.textMuted, margin: 0, textAlign: isMe ? 'right' : 'left' }}>
                                                                {formatTime(msg.timestamp)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                            <div ref={messagesEndRef} />
                                        </div>

                                        {/* Input bar with notification hint when there are unread */}
                                        <div style={{ borderTop: `1px solid ${C.border}`, background: C.surface }}>
                                            {/* New message banner above input when unread exist in OTHER convos */}
                                            {Object.entries(unreadMap).some(([uid, count]) => count > 0 && uid !== selectedConversation.userId) && (
                                                <div style={{
                                                    padding: '8px 24px',
                                                    background: 'rgba(235,107,64,0.08)',
                                                    borderBottom: '1px solid rgba(235,107,64,0.15)',
                                                    display: 'flex', alignItems: 'center', gap: 8,
                                                }}>
                                                    <Bell size={13} color={C.secondary} />
                                                    <span style={{ fontSize: 12, fontWeight: 700, color: C.secondary }}>
                                                        You have unread messages in other conversations
                                                    </span>
                                                </div>
                                            )}
                                            <form onSubmit={handleSendMessage} style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
                                                <input
                                                    value={newMessage}
                                                    onChange={e => setNewMessage(e.target.value)}
                                                    placeholder="Write a message..."
                                                    style={{ flex: 1, padding: '14px 20px', background: '#FAFAFA', border: `1px solid ${C.border}`, borderRadius: 24, color: C.text, fontSize: 15, outline: 'none', transition: 'border-color 0.2s' }}
                                                    onFocus={e => e.target.style.borderColor = C.primary}
                                                    onBlur={e => e.target.style.borderColor = C.border}
                                                />
                                                <button
                                                    type="submit"
                                                    disabled={!newMessage.trim()}
                                                    style={{
                                                        width: 48, height: 48, borderRadius: '50%',
                                                        background: newMessage.trim() ? C.primary : '#FAFAFA',
                                                        border: `1px solid ${newMessage.trim() ? 'transparent' : C.border}`,
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        cursor: newMessage.trim() ? 'pointer' : 'not-allowed', flexShrink: 0,
                                                        boxShadow: newMessage.trim() ? '0 4px 12px rgba(57,119,84,0.25)' : 'none',
                                                        transition: 'all 0.2s',
                                                    }}
                                                >
                                                    <Send size={18} color={newMessage.trim() ? '#fff' : C.textMuted} style={{ transform: 'translateX(-1px)' }} />
                                                </button>
                                            </form>
                                        </div>
                                    </>
                                ) : (
                                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 64, background: '#FAFAFA' }}>
                                        <div>
                                            <div style={{ width: 80, height: 80, borderRadius: '50%', background: C.surface, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                                                <MessageCircle size={32} color={C.textMuted} />
                                            </div>
                                            <p style={{ color: C.text, fontSize: 20, fontWeight: 800, margin: '0 0 8px' }}>Select a conversation</p>
                                            <p style={{ color: C.textMuted, fontSize: 15, margin: 0 }}>Choose from the left to start chatting</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <style>{`
                input::placeholder { color: #94A3B8; }
                @keyframes slideIn { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
            `}</style>
        </div>
    );
}