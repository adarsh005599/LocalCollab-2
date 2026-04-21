/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Handshake, Menu, X, ChevronDown, LayoutDashboard, LogOut, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const navItems = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Find Creators', path: '/creators' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Case Studies', path: '/case-studies' },
];

export default function Navbar() {
    const router = useRouter();
    const [menu, setMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auth state
    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(async ({ data: { session } }) => {
            setUser(session?.user ?? null);
            if (session?.user) {
                const { data } = await supabase
                    .from('user_profiles')
                    .select('role, name')
                    .eq('id', session.user.id)
                    .single();
                setProfile(data);
            }
        });

        // Listen for login/logout changes across tabs too
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
            setUser(session?.user ?? null);
            if (session?.user) {
                const { data } = await supabase
                    .from('user_profiles')
                    .select('role, name')
                    .eq('id', session.user.id)
                    .single();
                setProfile(data);
            } else {
                setProfile(null);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setProfile(null);
        setDropdownOpen(false);
        router.push('/');
    };

    const dashboardPath = profile?.role === 'shop' ? '/shop/dashboard' : '/influencer/dashboard';
    const initials = profile?.name ? profile.name.charAt(0).toUpperCase() : '?';

    return (
        <header className="fixed font-display top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-500 bg-transparent">
            <nav className={`flex items-center justify-between transition-all duration-500 px-6 h-14 w-full
                ${scrolled
                    ? 'max-w-4xl bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20 mx-4 mt-3'
                    : 'max-w-7xl bg-transparent'
                }`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <Handshake size={18} color="#fff" />
                    </div>
                    <span className="text-lg font-bold tracking-tight">
                        <span className="text-emerald-600">Local</span>
                        <span className="text-slate-800">Collab</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map(item => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Actions — auth-aware */}
                <div className="hidden md:flex items-center gap-3">
                    {user ? (
                        // ── Logged in: show avatar + dropdown ──
                        <div ref={dropdownRef} style={{ position: 'relative' }}>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: 8,
                                    background: 'none', border: '1.5px solid #d1fae5',
                                    borderRadius: 999, padding: '5px 12px 5px 6px',
                                    cursor: 'pointer', transition: 'all 0.2s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = '#397754'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = '#d1fae5'}
                            >
                                {/* Avatar circle */}
                                <div style={{
                                    width: 28, height: 28, borderRadius: '50%',
                                    background: '#397754', color: '#fff',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 13, fontWeight: 700, flexShrink: 0,
                                }}>
                                    {initials}
                                </div>
                                <span style={{ fontSize: 13, fontWeight: 600, color: '#1e293b', maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {profile?.name || 'Account'}
                                </span>
                                <ChevronDown size={14} color="#64748b" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                            </button>

                            {/* Dropdown */}
                            {dropdownOpen && (
                                <div style={{
                                    position: 'absolute', top: 'calc(100% + 10px)', right: 0,
                                    background: '#fff', border: '1px solid #e2e8f0',
                                    borderRadius: 14, boxShadow: '0 10px 30px -5px rgba(0,0,0,0.12)',
                                    minWidth: 180, overflow: 'hidden', zIndex: 200,
                                }}>
                                    <Link
                                        href={dashboardPath}
                                        onClick={() => setDropdownOpen(false)}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: 10,
                                            padding: '12px 16px', fontSize: 14, fontWeight: 600,
                                            color: '#1e293b', textDecoration: 'none',
                                            borderBottom: '1px solid #f1f5f9', transition: 'background 0.15s',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <LayoutDashboard size={16} color="#397754" /> Dashboard
                                    </Link>
                                    <Link
                                        href={profile?.role === 'shop' ? '/shop/profile' : '/influencer/profile'}
                                        onClick={() => setDropdownOpen(false)}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: 10,
                                            padding: '12px 16px', fontSize: 14, fontWeight: 600,
                                            color: '#1e293b', textDecoration: 'none',
                                            borderBottom: '1px solid #f1f5f9', transition: 'background 0.15s',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <User size={16} color="#397754" /> Profile
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: 10,
                                            padding: '12px 16px', fontSize: 14, fontWeight: 600,
                                            color: '#dc2626', background: 'none', border: 'none',
                                            width: '100%', cursor: 'pointer', transition: 'background 0.15s',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = '#fef2f2'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <LogOut size={16} /> Log out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        // ── Not logged in: show Login + Join ──
                        <>
                            <Link
                                href="/login"
                                className="text-sm font-semibold text-slate-600 hover:text-emerald-600 px-3"
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-emerald-200 transition-all active:scale-95"
                            >
                                Join
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenu(!menu)}
                    className="md:hidden p-2 text-slate-700"
                    aria-label="Toggle Menu"
                >
                    {menu ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {menu && (
                    <div className="absolute top-16 left-0 right-0 mx-4 p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col gap-4 md:hidden animate-in fade-in zoom-in duration-200">
                        {navItems.map(item => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className="text-lg font-semibold text-slate-700 border-b border-slate-50 pb-2"
                                onClick={() => setMenu(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {user ? (
                            <>
                                <Link
                                    href={dashboardPath}
                                    className="text-lg font-semibold text-emerald-700 border-b border-slate-50 pb-2"
                                    onClick={() => setMenu(false)}
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={() => { handleLogout(); setMenu(false); }}
                                    className="text-left text-lg font-semibold text-red-500"
                                >
                                    Log out
                                </button>
                            </>
                        ) : (
                            <Link
                                href="/signup"
                                className="bg-emerald-600 text-white text-center py-3 rounded-2xl font-bold"
                                onClick={() => setMenu(false)}
                            >
                                Get Started
                            </Link>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
}