'use client';
import Link from 'next/link';
import { ArrowRight, Target, Heart, Zap, Globe } from 'lucide-react';

const C = {
  bg: '#FFF7ED', surface: '#FFFFFF', primary: '#397754',
  primaryLight: '#4B9B6E', secondary: '#EB6B40',
  text: '#1E293B', textMuted: '#64748B', border: '#E2E8F0',
};

const values = [
  { icon: <Heart size={24} color={C.primary} />, title: 'Authenticity First', desc: 'We believe local businesses deserve marketing that feels real — not scripted, not over-produced, just genuine community connections.' },
  { icon: <Target size={24} color={C.primary} />, title: 'Hyperlocal Impact', desc: 'Every collaboration we power stays rooted in the community. We match brands with creators who actually live in, shop in, and love their city.' },
  { icon: <Zap size={24} color={C.primary} />, title: 'Creator Empowerment', desc: 'Micro-influencers are the backbone of community marketing. We give them the tools to monetize their passion — zero commissions, full control.' },
  { icon: <Globe size={24} color={C.primary} />, title: 'India-First Growth', desc: 'Built specifically for the Indian market — from tier-1 metros to tier-2 cities. We understand the nuances of local commerce in India.' },
];

const milestones = [
  { year: '2024', event: 'LocalCollab founded with a mission to democratize influencer marketing for Indian small businesses.' },
  { year: 'Jan 2025', event: 'Launched beta platform with 50 verified creators across Mumbai, Pune, and Bangalore.' },
  { year: 'Mar 2025', event: 'Crossed 100 successful collaborations. Expanded to Hyderabad, Jaipur, and Delhi.' },
  { year: 'Jun 2025', event: 'AI matchmaking engine deployed. Average match accuracy reaches 94%.' },
  { year: 'Dec 2025', event: '1,000+ verified creators. 10+ cities. 300+ successful collaborations. 3.2x average ROI.' },
];

const stats = [
  { value: '1K+', label: 'Verified Creators' },
  { value: '300+', label: 'Successful Collabs' },
  { value: '3.2x', label: 'Avg. ROI Growth' },
  { value: '10+', label: 'Active Cities' },
];

export default function AboutPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: C.bg, color: C.text, overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#1B2A22', paddingTop: 120, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, marginBottom: 16 }}>✦ Our Story ✦</p>
            <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: '0 0 24px' }}>
              Built to empower India's<br /><span style={{ color: C.primaryLight }}>local economy</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: '0 0 16px' }}>
              LocalCollab was born from a simple observation: thousands of talented micro-influencers across India and millions of local businesses are looking for each other — but can't find one another.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>
              We built a platform that uses AI to bridge that gap — connecting authentic creators with local businesses in the same city, instantly, affordably, and without taking a cut of anyone's earnings.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: '28px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: C.primaryLight, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: C.surface, padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.secondary, marginBottom: 16 }}>✦ Our Mission ✦</p>
          <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, color: C.text, margin: '0 0 24px', lineHeight: 1.25 }}>Democratizing influencer marketing for every local business in India</h2>
          <p style={{ fontSize: 17, color: C.textMuted, lineHeight: 1.8 }}>
            We believe marketing shouldn't be a privilege of big brands with big budgets. A chai stall in Pune, a boutique in Jaipur, a gym in Hyderabad — every local business deserves affordable, authentic, and measurable marketing. That's why we built LocalCollab: a platform where small businesses and beginner influencers grow together.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.primary, marginBottom: 12 }}>✦ What We Stand For ✦</p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: C.text, margin: 0 }}>Our core values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 18, padding: 32 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(57,119,84,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>{v.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: C.surface, padding: '80px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.secondary, marginBottom: 12 }}>✦ Our Journey ✦</p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: C.text, margin: 0 }}>From idea to impact</h2>
          </div>
          <div style={{ position: 'relative', paddingLeft: 32 }}>
            <div style={{ position: 'absolute', left: 8, top: 0, bottom: 0, width: 2, background: `${C.primary}22` }} />
            {milestones.map((m, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: 40 }}>
                <div style={{ position: 'absolute', left: -28, top: 4, width: 12, height: 12, borderRadius: '50%', background: C.primary, border: '3px solid #fff', boxShadow: `0 0 0 2px ${C.primary}` }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: C.primary, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{m.year}</span>
                <p style={{ fontSize: 15, color: C.text, lineHeight: 1.65, margin: '6px 0 0' }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem from PPT */}
      <section style={{ background: C.bg, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.primary, marginBottom: 12 }}>✦ The Problem We're Solving ✦</p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: C.text, margin: 0 }}>A hyperlocal gap in the creator economy</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { emoji: '📱', title: 'Micro-Influencers', prob: 'Beginner and micro-influencers struggle to find legitimate brand partnerships. Most platforms cater to macro-influencers with 100K+ followers.' },
              { emoji: '🤖', title: 'The Missing Bridge', prob: 'No platform specifically connects local businesses with hyperlocal creators based on city, niche, budget, and engagement — until now.' },
            ].map((item, i) => (
              <div key={i} style={{ background: C.surface, borderRadius: 18, padding: 32, border: `1px solid ${C.border}`, textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{item.emoji}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>{item.prob}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1B2A22', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>Want to be part of our story?</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 32 }}>Join the growing community of local businesses and creators building India's hyperlocal economy together.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/signup" style={{ padding: '14px 28px', background: C.primary, color: '#fff', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Get Started</Link>
            <Link href="/team" style={{ padding: '14px 28px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.3)', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Meet the Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}