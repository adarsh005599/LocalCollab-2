/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';
import { Handshake, ArrowRight } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const C = {
    primary: '#397754',
    primaryLight: '#4B9B6E',
    primaryHover: '#2B5A3F',
};
const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Service', path: '/terms' },
  { name: 'Refund Policy', path: '/refund' },
  { name: 'Support & Trust', path: '/support' },
];
const companyLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Meet the Team', path: '/team' },
  { name: 'Blog & Insights', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];
const platformLinks = [
  { name: 'Find Influencers', path: '/creators' },
  { name: 'Post an Opportunity', path: '/signup?role=shop' },
  { name: 'AI Matching Tool', path: '/solutions' },
  { name: 'Pricing & Plans', path: '/pricing' },
  { name: 'Success Stories', path: '/case-studies' },
]

export default function Footer() {
    return (
        <footer style={{ background: "#1B2A22", color: '#fff', fontFamily: 'Inter, sans-serif', overflow: 'hidden', position: 'relative' }}>

            {/* Big brand statement strip */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '28px 24px' }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, margin: '0 0 6px' }}>
                            ✦ Connecting India's Local Economy ✦
                        </p>
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 40px)', fontWeight: 900, letterSpacing: '-0.02em', margin: 0, color: '#fff', fontStyle: 'italic', textTransform: 'uppercase', lineHeight: 1.1 }}>
                            Grow <span style={{ color: C.primary }}>Local.</span>{' '}
                            Go <span style={{ WebkitTextStroke: '1.5px ' + C.primary, color: 'transparent' }}>Viral.</span>
                        </h2>
                    </div>

                    <Link href="/signup" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '13px 28px', background: C.primary, color: '#fff',
                        borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: 'none',
                        whiteSpace: 'nowrap', transition: 'all 0.2s', flexShrink: 0
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = C.primaryHover}
                        onMouseLeave={e => e.currentTarget.style.background = C.primary}
                    >
                        Get Started Free <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Main footer grid */}
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 48px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }} className="footer-grid">
                {/* Brand col */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Handshake size={22} color="#fff" />
                        </div>
                        <span style={{ fontSize: 22, fontWeight: 900, color: '#fff' }}>Local<span style={{ color: C.primaryLight }}>Collab</span></span>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 280, marginBottom: 32 }}>
                        The smartest way to connect Indian local businesses with authentic, vetted micro-influencers.
                    </p>
                    <div style={{ display: 'flex', gap: 12 }}>
                        {[
                            { Icon: FaInstagram, color: '#E1306C', href: '#' },
                            { Icon: FaLinkedin, color: '#0077B5', href: '#' },
                            { Icon: FaWhatsapp, color: '#25D366', href: '#' },
                        ].map(({ Icon, color, href }, i) => (
                            <a key={i} href={href} style={{
                                width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.07)',
                                border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', color, fontSize: 18, textDecoration: 'none', transition: 'all 0.2s'
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'scale(1)'; }}
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Platform */}
                <div>
                    <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Platform</h4>
                   {platformLinks.map(link => (
  <Link
    key={link.name}
    href={link.path}
    style={{
      display: 'block',
      fontSize: 15,
      color: 'rgba(255,255,255,0.6)',
      textDecoration: 'none',
      marginBottom: 14,
    }}
  >
    {link.name}
  </Link>
))}
                </div>

                {/* Company */}
                <div>
                    <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Company</h4>
                   {companyLinks.map(link => (
  <Link key={link.name} href={link.path} 
  style={{
      display: 'block',
      fontSize: 15,
      color: 'rgba(255,255,255,0.6)',
      textDecoration: 'none',
      marginBottom: 14,
    }}
    >
    {link.name}
  </Link>
))}
                </div>

                {/* Legal + Contact */}
                <div>
                    <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Legal</h4>
                   {legalLinks.map(link => (
  <Link key={link.name} href={link.path}
  style={{
      display: 'block',
      fontSize: 15,
      color: 'rgba(255,255,255,0.6)',
      textDecoration: 'none',
      marginBottom: 14,
    }}>
    {link.name}
  </Link>
))}
                    <div style={{ marginTop: 28, padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: 12, border: 'rgba(255,255,255,0.08)' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>Contact Team</p>
                        <a href="mailto:localcollab@gmail.com" style={{ display: 'block', fontSize: 13, color: C.primaryLight, textDecoration: 'none', marginBottom: 4 }}>localcollab@gmail.com</a>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0 }}>Replies within 24 hours</p>
                    </div>
                </div>
            </div>

            {/* Role Badges */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px', maxWidth: 1280, margin: '0 auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                        {[
                            { label: 'Join as Business', href: '/signup?role=shop' },
                            { label: 'Join as Influencer', href: '/signup?role=influencer' },
                            { label: 'AI Matching', href: '/signup' },
                            { label: 'View Pricing', href: '/pricing' },
                        ].map(({ label, href }) => (
                            <Link key={label} href={href} style={{
                                padding: '7px 16px', background: 'rgba(57,119,84,0.15)', color: C.primaryLight,
                                border: `1px solid rgba(57,119,84,0.3)`, borderRadius: 8,
                                fontSize: 12, fontWeight: 700, textDecoration: 'none',
                                textTransform: 'uppercase', letterSpacing: '0.08em'
                            }}>{label}</Link>
                        ))}
                    </div>
                    <p style={{ fontSize: 13, fontStyle: 'italic', fontWeight: 700, color: 'rgba(255,255,255,0.4)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Accelerating India's Local Creators.
                    </p>
                </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>© 2025 LocalCollab. All rights reserved.</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', margin: 0, fontStyle: 'italic' }}>Where local brands rise, no matter where you start</p>
            </div>

            <style>{`
                @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
                @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
            `}</style>
        </footer>
    );
}