'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Handshake, LogOut, ChevronRight, ChevronLeft, Menu as MenuIcon } from 'lucide-react';

const C = {
    bg: '#F5F5DC',
    surface: '#FFFFFF',
    primary: '#397754',
    primaryLight: '#4B9B6E',
    secondary: '#EB6B40',
    text: '#1E293B',
    textMuted: '#64748B',
    border: '#E2E8F0',
};

export default function Sidebar({ navItems, user, onLogout }) {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const sidebarWidth = isCollapsed ? 80 : 280;

    return (
        <aside style={{
            position: 'fixed', top: 0, left: 0, zIndex: 100, // Increased zIndex
            height: '100vh', width: sidebarWidth,
            background: C.surface,
            borderRight: `1px solid ${C.border}`,
            display: 'flex', flexDirection: 'column',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '4px 0 24px rgba(0,0,0,0.02)',
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'visible' // Changed from hidden to show toggle button better
        }}>
            {/* Toggle Button */}
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsCollapsed(!isCollapsed);
                }}
                style={{
                    position: 'absolute', 
                    right: -12, // Positioned slightly off-edge to be easily clickable
                    top: 32,
                    background: 'white', 
                    border: `1px solid ${C.border}`,
                    borderRadius: '50%', 
                    cursor: 'pointer', 
                    padding: '6px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    zIndex: 110, 
                    color: C.primary,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    pointerEvents: 'auto' // Ensures it catches clicks
                }}
            >
                {isCollapsed ? <MenuIcon size={16} /> : <ChevronLeft size={16} />}
            </button>

            {/* Logo Section */}
            <div style={{ 
                padding: isCollapsed ? '32px 0' : '32px 24px', 
                borderBottom: `1px solid ${C.border}`,
                display: 'flex', 
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                overflow: 'hidden'
            }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                    <div style={{ 
                        width: 40, height: 40, borderRadius: 12, background: C.primary, 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
                    }}>
                        <Handshake size={20} color="#fff" />
                    </div>
                    {!isCollapsed && (
                        <span style={{ fontSize: 24, fontWeight: 900, color: C.text, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
                            Local<span style={{ color: C.primary }}>Collab</span>
                        </span>
                    )}
                </Link>
            </div>

            {/* Navigation */}
            <nav style={{ flex: 1, padding: '24px 12px', overflowY: 'auto', overflowX: 'hidden', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {!isCollapsed && (
                    <p style={{ fontSize: 11, fontWeight: 600, color: C.textMuted, margin: '0 0 8px 12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Menu
                    </p>
                )}
                {navItems.map((item) => {
                    const active = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href} 
                            title={isCollapsed ? item.label : ''}
                            style={{
                                display: 'flex', alignItems: 'center', 
                                justifyContent: isCollapsed ? 'center' : 'space-between',
                                padding: '12px', borderRadius: 12,
                                textDecoration: 'none', fontSize: 15, fontWeight: active ? 700 : 600,
                                transition: 'all 0.2s',
                                background: active ? 'rgba(57,119,84,0.1)' : 'transparent',
                                color: active ? C.primary : C.textMuted,
                            }}
                            onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(0,0,0,0.02)'; e.currentTarget.style.color = C.text; } }}
                            onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.textMuted; } }}>
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: isCollapsed ? 0 : 12 }}>
                                <span style={{ color: active ? C.primary : C.textMuted, display: 'flex' }}>{item.icon}</span>
                                {!isCollapsed && <span style={{ whiteSpace: 'nowrap' }}>{item.label}</span>}
                            </div>

                            {!isCollapsed && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                    {item.badge > 0 && (
                                        <span style={{
                                            minWidth: 20, height: 20, borderRadius: 10,
                                            background: C.secondary, color: '#fff',
                                            fontSize: 11, fontWeight: 800,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            padding: '0 6px',
                                        }}>{item.badge}</span>
                                    )}
                                    {active && <ChevronRight size={16} color={C.primary} />}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Section */}
            <div style={{ padding: '20px 12px', borderTop: `1px solid ${C.border}`, background: '#FAFAFA' }}>
                <Link href={user?.profileHref || '#'} style={{
                    display: 'flex', alignItems: 'center', justifyContent: isCollapsed ? 'center' : 'flex-start',
                    gap: 12, padding: '8px', borderRadius: 12, textDecoration: 'none',
                    transition: 'all 0.2s', marginBottom: 12,
                    background: C.surface, border: isCollapsed ? 'none' : `1px solid ${C.border}`,
                    boxShadow: isCollapsed ? 'none' : '0 2px 4px rgba(0,0,0,0.02)',
                    overflow: 'hidden'
                }}>
                    <div style={{ 
                        width: 40, height: 40, borderRadius: '50%', background: 'rgba(57,119,84,0.1)', 
                        border: `1px solid rgba(57,119,84,0.2)`, display: 'flex', alignItems: 'center', 
                        justifyContent: 'center', flexShrink: 0, overflow: 'hidden' 
                    }}>
                        {user?.profileImage
                            ? <Image src={user.profileImage} alt={user.name || 'avatar'} width={40} height={40} style={{ objectFit: 'cover' }} />
                            : <span style={{ fontSize: 14, fontWeight: 800, color: C.primary }}>{user?.initials}</span>
                        }
                    </div>
                    {!isCollapsed && (
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontSize: 14, fontWeight: 800, color: C.text, margin: '0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.name}</p>
                            <p style={{ fontSize: 12, color: C.textMuted, margin: 0 }}>View profile</p>
                        </div>
                    )}
                </Link>
                
                <button onClick={onLogout} style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: isCollapsed ? 'center' : 'center', gap: 8,
                    padding: '12px', borderRadius: 12, border: 'none',
                    background: 'transparent', cursor: 'pointer', fontSize: 14,
                    fontWeight: 700, color: '#EF4444', transition: 'all 0.2s',
                }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <LogOut size={16} /> 
                    {!isCollapsed && "Log out"}
                </button>
            </div>
        </aside>
    );
}