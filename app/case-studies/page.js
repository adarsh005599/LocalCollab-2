'use client';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, MapPin, CheckCircle } from 'lucide-react';

const C = {
  bg: '#FFF7ED', surface: '#FFFFFF', primary: '#397754',
  primaryLight: '#4B9B6E', secondary: '#EB6B40',
  text: '#1E293B', textMuted: '#64748B', border: '#E2E8F0',
};

const caseStudies = [
  {
    brand: 'Artisan Bakery, Pune',
    creator: 'Priya Sharma',
    creatorNiche: 'Food & Beverage · Mumbai',
    avatar: '🧁',
    problem: 'A family-run bakery with no social media presence wanted to reach young professionals in Pune but had a tight ₹5,000/month marketing budget.',
    solution: 'Matched with Priya Sharma, a local food vlogger with 18K highly engaged followers. Priya created 3 reels showcasing signature pastries and a behind-the-scenes story.',
    results: [
      { label: 'New Followers', value: '+2,300', icon: <Users size={16} color={C.primary} /> },
      { label: 'Footfall Increase', value: '+68%', icon: <TrendingUp size={16} color={C.primary} /> },
      { label: 'Campaign ROI', value: '4.1x', icon: <Star size={16} color={C.primary} /> },
    ],
    quote: 'We spent ₹7,500 and got results we couldn\'t have imagined with a ₹50,000 newspaper ad. LocalCollab changed how we think about marketing.',
    quoteBy: 'Rohan Joshi, Owner',
    tags: ['Food', 'Pune', 'Micro-influencer'],
    color: C.primary,
  },
  {
    brand: 'FitZone Gym, Hyderabad',
    creator: 'Rohan Das',
    creatorNiche: 'Fitness · Pune',
    avatar: '🏋️',
    problem: 'A new gym in Hyderabad\'s HITEC City struggled to attract members beyond walk-ins. They needed targeted reach among tech professionals aged 25–35.',
    solution: 'Partnered with Rohan Das (31K followers, fitness niche) for a 30-day transformation challenge series — 8 reels + daily stories showing real member journeys.',
    results: [
      { label: 'New Memberships', value: '+142', icon: <Users size={16} color={C.secondary} /> },
      { label: 'Profile Reach', value: '4.8L', icon: <TrendingUp size={16} color={C.secondary} /> },
      { label: 'Campaign ROI', value: '5.2x', icon: <Star size={16} color={C.secondary} /> },
    ],
    quote: 'The AI match was incredibly accurate. Rohan\'s audience was exactly our target demographic. We filled our morning slots within 3 weeks of the campaign.',
    quoteBy: 'Anita Reddy, Marketing Head',
    tags: ['Fitness', 'Hyderabad', 'Campaign Series'],
    color: C.secondary,
  },
  {
    brand: 'Ethnic Studio, Jaipur',
    creator: 'Sneha Patel',
    creatorNiche: 'Fashion · Jaipur',
    avatar: '👗',
    problem: 'A boutique ethnic wear store in Jaipur had beautiful products but zero online discoverability. Their Instagram had fewer than 200 followers.',
    solution: 'LocalCollab matched them with Sneha Patel, a Jaipur-based fashion creator with 14.8K followers. A 5-reel festive collection series was launched during Navratri.',
    results: [
      { label: 'Online Enquiries', value: '+380%', icon: <Users size={16} color={C.primary} /> },
      { label: 'Festive Sales', value: '+₹2.1L', icon: <TrendingUp size={16} color={C.primary} /> },
      { label: 'New Followers', value: '+4,200', icon: <Star size={16} color={C.primary} /> },
    ],
    quote: 'We had tried Facebook ads before — total waste. LocalCollab\'s matching found us a creator who genuinely loves ethnic fashion. The authenticity showed.',
    quoteBy: 'Kavita Singhvi, Founder',
    tags: ['Fashion', 'Jaipur', 'Festive Campaign'],
    color: C.primary,
  },
  {
    brand: 'Organic Skincare, Mumbai',
    creator: 'Meera Iyer',
    creatorNiche: 'Skincare · Chennai',
    avatar: '🌿',
    problem: 'A Mumbai-based organic skincare startup needed to build trust and social proof for new product launches without a huge marketing budget.',
    solution: 'Paired with Meera Iyer whose 9.7K followers had a remarkable 8.9% engagement rate. Meera did honest 30-day skin journey reviews across 4 products.',
    results: [
      { label: 'Product Reviews', value: '92% ⭐', icon: <Star size={16} color={C.secondary} /> },
      { label: 'Website Traffic', value: '+290%', icon: <TrendingUp size={16} color={C.secondary} /> },
      { label: 'Product Sales', value: '+3.8x', icon: <Users size={16} color={C.secondary} /> },
    ],
    quote: 'Small follower count, massive impact. Meera\'s audience trusts her deeply. We got 3x more conversions than our previous influencer campaign with a creator 5x larger.',
    quoteBy: 'Siddharth Rao, Co-founder',
    tags: ['Skincare', 'Mumbai', 'Product Launch'],
    color: C.secondary,
  },
];

const overallStats = [
  { label: 'Average ROI', value: '3.2x' },
  { label: 'Avg. Engagement Rate', value: '6.8%' },
  { label: 'Successful Collabs', value: '300+' },
  { label: 'Cities Covered', value: '10+' },
];

export default function CaseStudiesPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: C.bg, color: C.text, overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#1B2A22', paddingTop: 120, paddingBottom: 64, textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, marginBottom: 16 }}>✦ Success Stories ✦</p>
          <h1 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, margin: '0 0 20px' }}>
            Real brands, real results,<br /><span style={{ color: C.primaryLight }}>real communities</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)' }}>See how local businesses across India are growing with verified micro-influencers through LocalCollab.</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'rgba(57,119,84,0.06)', padding: '32px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, textAlign: 'center' }}>
          {overallStats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 32, fontWeight: 900, color: C.primary }}>{s.value}</div>
              <div style={{ fontSize: 13, color: C.textMuted, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {caseStudies.map((cs, i) => (
            <div key={i} style={{ background: C.surface, borderRadius: 24, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
              <div style={{ background: i % 2 === 0 ? 'rgba(57,119,84,0.05)' : 'rgba(235,107,64,0.05)', padding: '32px 40px', borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                <div style={{ fontSize: 48 }}>{cs.avatar}</div>
                <div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                    {cs.tags.map(t => <span key={t} style={{ padding: '3px 10px', borderRadius: 100, background: `${cs.color}15`, color: cs.color, fontSize: 11, fontWeight: 700 }}>{t}</span>)}
                  </div>
                  <h2 style={{ fontSize: 22, fontWeight: 900, color: C.text, margin: '0 0 4px' }}>{cs.brand}</h2>
                  <p style={{ fontSize: 14, color: C.textMuted, margin: 0 }}>
                    Collaborated with <strong style={{ color: cs.color }}>{cs.creator}</strong> · {cs.creatorNiche}
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
                <div style={{ padding: '32px 40px', borderRight: `1px solid ${C.border}` }}>
                  <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.textMuted, marginBottom: 12 }}>The Challenge</h4>
                  <p style={{ fontSize: 15, color: C.text, lineHeight: 1.7, margin: '0 0 24px' }}>{cs.problem}</p>
                  <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.textMuted, marginBottom: 12 }}>The Solution</h4>
                  <p style={{ fontSize: 15, color: C.text, lineHeight: 1.7, margin: 0 }}>{cs.solution}</p>
                </div>

                <div style={{ padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.textMuted, margin: 0 }}>Results</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {cs.results.map((r, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', background: C.bg, borderRadius: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 8, background: `${cs.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{r.icon}</div>
                        <div>
                          <div style={{ fontSize: 22, fontWeight: 900, color: cs.color, lineHeight: 1 }}>{r.value}</div>
                          <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>{r.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <blockquote style={{ margin: 0, padding: '20px 24px', background: `${cs.color}08`, borderLeft: `3px solid ${cs.color}`, borderRadius: '0 12px 12px 0' }}>
                    <p style={{ fontSize: 14, color: C.text, lineHeight: 1.7, margin: '0 0 8px', fontStyle: 'italic' }}>"{cs.quote}"</p>
                    <span style={{ fontSize: 12, fontWeight: 700, color: cs.color }}>— {cs.quoteBy}</span>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1B2A22', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>Your success story starts here</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 32 }}>Join 300+ successful collaborations. Let AI match you with the perfect creator for your brand.</p>
          <Link href="/signup?role=shop" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: C.primary, color: '#fff', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
            Start Your Campaign <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}