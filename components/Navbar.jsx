/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Handshake, Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Find Creators', path: '/creators' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Case Studies', path: '/case-studies' },
];

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
<header className="fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-500 bg-transparent">

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

                {/* Actions */}
                <div className="hidden md:flex items-center gap-3">
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
                        <Link
                            href="/signup"
                            className="bg-emerald-600 text-white text-center py-3 rounded-2xl font-bold"
                            onClick={() => setMenu(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}