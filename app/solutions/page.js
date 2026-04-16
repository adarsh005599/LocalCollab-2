'use client';
import Link from 'next/link';
import { ArrowRight, Store, Instagram, Target, CheckCircle, Zap, Shield, BarChart2, Users, Search, Star } from 'lucide-react';

const C = {
  bg: '#FFF7ED', surface: '#FFFFFF', primary: '#397754',
  primaryLight: '#4B9B6E', primaryHover: '#2B5A3F',
  secondary: '#EB6B40', secondaryHover: '#C1522D',
  text: '#1E293B', textMuted: '#64748B', border: '#E2E8F0',
};

const features = [
  {
    icon: <Store size={28} color={C.primary} />,
    bg: 'rgba(57,119,84,0.1)',
    title: 'For Businesses',
    tagColor: C.primary,
    tag: 'Brand Growth',
    desc: 'Launch hyperlocal campaigns without agency fees. Find verified creators, negotiate directly, and measure real ROI — all in one dashboard.',
    points: ['Create a free brand profile in minutes', 'Smart filters: niche, city, budget', 'Direct messaging & negotiation', 'Zero commission model'],
    cta: 'Start as Business',
    href: '/signup?role=shop',
  },
  {
    icon: <Instagram size={28} color={C.secondary} />,
    bg: 'rgba(235,107,64,0.1)',
    title: 'For Content Creators',
    tagColor: C.secondary,
    tag: 'Creator Economy',
    desc: 'Monetize your audience with verified local brands. Set your own rates, own your schedule, and build a sustainable income stream.',
    points: ['Set your own rates & schedule', 'Only verified business partners', 'Automatic engagement scoring', 'Zero platform commission cuts'],
    cta: 'Join as Creator',
    href: '/signup?role=influencer',
  },
  {
    icon: <Target size={28} color="#fff" />,
    bg: 'rgba(255,255,255,0.2)',
    title: 'AI Matchmaking Engine',
    tagColor: '#fff',
    tag: 'Smart Tech',
    dark: true,
    desc: 'Our AI analyzes location proximity, budget range, content niche, and engagement relevance to deliver 99% match accuracy instantly.',
    points: ['Location-based recommendations', 'Budget & niche filtering', 'Engagement rate analysis', 'Real-time suggestions'],
    cta: 'See How It Works',
    href: '/signup',
  },
];

const howItWorks = [
  { step: '01', title: 'Create Your Profile', desc: 'Sign up as a business or creator. Fill your niche, city, budget, and preferences in under 5 minutes.' },
  { step: '02', title: 'AI Finds Your Match', desc: 'Our matchmaking engine scans 1,000+ profiles and surfaces the best fits based on your criteria instantly.' },
  { step: '03', title: 'Connect & Negotiate', desc: 'Message directly, agree on terms, and kick off your collaboration — no middlemen involved.' },
  { step: '04', title: 'Track & Grow', desc: 'Post-collab ratings, engagement data, and feedback help you refine and scale your marketing strategy.' },
];

const techStack = [
  { icon: <Zap size={20} color={C.primary} />, title: 'React + Tailwind Frontend', desc: 'Responsive dashboards built for speed and usability on any device.' },
  { icon: <Shield size={20} color={C.primary} />, title: 'JWT Auth & Data Privacy', desc: 'Secure authentication with basic data-privacy compliance baked in.' },
  { icon: <BarChart2 size={20} color={C.primary} />, title: 'PostgreSQL Database', desc: 'Reliable storage for profiles, pricing, subscriptions, and collab history.' },
  { icon: <Users size={20} color={C.primary} />, title: 'Node.js REST APIs', desc: 'Fast backend handling auth, profiles, AI recommendations, and subscriptions.' },
  { icon: <Search size={20} color={C.primary} />, title: 'AI Recommendation System', desc: 'Location, budget, and niche-based intelligent matchmaking at scale.' },
  { icon: <Star size={20} color={C.primary} />, title: 'Ratings & Trust System', desc: 'Post-collab reviews build credibility for both businesses and creators.' },
];

export default function SolutionsPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: C.bg, color: C.text, overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#1B2A22', paddingTop: 120, paddingBottom: 80, textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, marginBottom: 16 }}>✦ Platform Solutions ✦</p>
          <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, margin: '0 0 24px' }}>
            Everything you need to grow<br /><span style={{ color: C.primaryLight }}>locally & authentically</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 40 }}>
            LocalCollab connects Indian local businesses with verified micro-influencers through AI-powered matchmaking, direct messaging, and a zero-commission model.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/signup?role=shop" style={{ padding: '14px 28px', background: C.primary, color: '#fff', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>For Businesses</Link>
            <Link href="/signup?role=influencer" style={{ padding: '14px 28px', background: C.primaryLight, color: '#fff', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>For Creators</Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ padding: '80px 24px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: f.dark ? C.primary : C.surface, borderRadius: 20, padding: 40, border: `1px solid ${f.dark ? C.primary : C.border}`, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ width: 60, height: 60, borderRadius: 14, background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</div>
              <div style={{ display: 'inline-flex', width: 'fit-content', padding: '4px 12px', borderRadius: 100, background: f.dark ? 'rgba(255,255,255,0.15)' : `${f.tagColor}18`, color: f.tagColor, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{f.tag}</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: f.dark ? '#fff' : C.text, margin: 0 }}>{f.title}</h3>
              <p style={{ fontSize: 15, color: f.dark ? 'rgba(255,255,255,0.75)' : C.textMuted, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {f.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: f.dark ? 'rgba(255,255,255,0.8)' : C.textMuted }}>
                    <CheckCircle size={16} color={f.dark ? '#fff' : C.primary} style={{ flexShrink: 0 }} />{pt}
                  </li>
                ))}
              </ul>
              <Link href={f.href} style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 700, color: f.dark ? '#fff' : f.tagColor, textDecoration: 'none', fontSize: 14 }}>
                {f.cta} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: C.surface, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.secondary, marginBottom: 12 }}>✦ How It Works ✦</p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: C.text, margin: 0 }}>From sign-up to collaboration<br />in four simple steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {howItWorks.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: 32, borderRadius: 16, background: C.bg }}>
                <div style={{ fontSize: 48, fontWeight: 900, color: `${C.primary}22`, lineHeight: 1, marginBottom: 16 }}>{s.step}</div>
                <h4 style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 10 }}>{s.title}</h4>
                <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.primary, marginBottom: 12 }}>✦ Technical Approach ✦</p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: C.text, margin: 0 }}>Built for scale, security,<br />and speed</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {techStack.map((t, i) => (
              <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: 28, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(57,119,84,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{t.icon}</div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 6 }}>{t.title}</h4>
                  <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1B2A22', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: '#fff', marginBottom: 20 }}>Ready to grow your local presence?</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 36 }}>Join 1,000+ verified creators and local businesses already collaborating on LocalCollab.</p>
          <Link href="/signup" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', background: C.primary, color: '#fff', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>
            Get Started Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}