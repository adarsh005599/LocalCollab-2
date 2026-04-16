'use client';
import Link from 'next/link';
import { CheckCircle, X, ArrowRight, Zap, Star, Shield } from 'lucide-react';

const C = {
  bg: '#FFF7ED', surface: '#FFFFFF', primary: '#397754',
  primaryLight: '#4B9B6E', secondary: '#EB6B40',
  text: '#1E293B', textMuted: '#64748B', border: '#E2E8F0',
};

const plans = [
  {
    name: 'Creator',
    tag: 'Free Forever',
    price: '₹0',
    period: '',
    desc: 'For micro-influencers looking to monetize their audience with local brands.',
    color: C.primary,
    features: [
      { text: 'Verified creator profile', ok: true },
      { text: 'AI-based brand matching', ok: true },
      { text: 'Direct messaging with businesses', ok: true },
      { text: 'Set your own rates', ok: true },
      { text: '0% commission on earnings', ok: true },
      { text: 'Engagement score display', ok: true },
      { text: 'Post-collab ratings', ok: true },
      { text: 'Priority listing in search', ok: false },
      { text: 'Featured profile badge', ok: false },
    ],
    cta: 'Join as Creator',
    href: '/signup?role=influencer',
    highlight: false,
  },
  {
    name: 'Business',
    tag: 'Most Popular',
    price: '₹4,999',
    period: '/ year',
    desc: 'For local businesses ready to launch hyperlocal campaigns with verified creators.',
    color: C.primary,
    features: [
      { text: 'Unlimited creator browsing', ok: true },
      { text: 'Advanced filters (city, niche, budget)', ok: true },
      { text: 'AI-powered matchmaking', ok: true },
      { text: 'Direct messaging & negotiation', ok: true },
      { text: 'Campaign management dashboard', ok: true },
      { text: 'Post-collab analytics', ok: true },
      { text: 'Priority support', ok: true },
      { text: 'Featured brand badge', ok: true },
      { text: 'Dedicated account manager', ok: false },
    ],
    cta: 'Start Free Trial',
    href: '/signup?role=shop',
    highlight: true,
  },
  {
    name: 'Enterprise',
    tag: 'Custom',
    price: 'Custom',
    period: '',
    desc: 'For agencies, chains, and franchises running large-scale influencer campaigns across multiple cities.',
    color: C.secondary,
    features: [
      { text: 'Everything in Business', ok: true },
      { text: 'Multi-location campaign management', ok: true },
      { text: 'Dedicated account manager', ok: true },
      { text: 'Custom AI matchmaking rules', ok: true },
      { text: 'API access for integrations', ok: true },
      { text: 'White-label reporting', ok: true },
      { text: 'SLA & uptime guarantee', ok: true },
      { text: 'Custom contract & billing', ok: true },
      { text: 'Onboarding & training sessions', ok: true },
    ],
    cta: 'Contact Sales',
    href: '/contact',
    highlight: false,
  },
];

const faqs = [
  { q: 'Is there a free trial for the Business plan?', a: 'Yes! We offer a 14-day free trial so you can explore all Business features before committing to a yearly subscription.' },
  { q: 'Do influencers pay anything?', a: 'No. Creator accounts are completely free, and we take 0% commission on any collaboration earnings. Your pricing is 100% yours.' },
  { q: 'Can I upgrade or downgrade my plan?', a: 'Yes. You can upgrade from Business to Enterprise at any time. Downgrades take effect at the end of your current billing period.' },
  { q: 'What payment methods do you accept?', a: 'We accept UPI, net banking, debit/credit cards, and bank transfers for Business plan subscriptions.' },
  { q: 'Is there a refund policy?', a: 'We offer a 30-day money-back guarantee on Business plan subscriptions. See our Refund Policy for details.' },
];

const valueProps = [
  { icon: <Zap size={22} color={C.primary} />, title: 'No Hidden Fees', desc: 'What you see is what you pay. No setup fees, no transaction fees, no surprises.' },
  { icon: <Shield size={22} color={C.primary} />, title: 'Zero Commission', desc: 'Creators keep 100% of what they earn. Businesses pay only the subscription.' },
  { icon: <Star size={22} color={C.primary} />, title: '30-Day Guarantee', desc: 'Not satisfied? Get a full refund within 30 days, no questions asked.' },
];

export default function PricingPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: C.bg, color: C.text, overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#1B2A22', paddingTop: 120, paddingBottom: 64, textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, marginBottom: 16 }}>✦ Pricing & Plans ✦</p>
          <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, margin: '0 0 20px' }}>
            Simple, transparent<br /><span style={{ color: C.primaryLight }}>pricing for everyone</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)' }}>Creators join free. Businesses subscribe annually. Zero commission, zero middlemen.</p>
        </div>
      </section>

      {/* Value Props */}
      <section style={{ background: C.surface, padding: '40px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
          {valueProps.map((v, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(57,119,84,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{v.icon}</div>
              <div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 4 }}>{v.title}</h4>
                <p style={{ fontSize: 13, color: C.textMuted, margin: 0, lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: plan.highlight ? '#1B2A22' : C.surface,
              border: `2px solid ${plan.highlight ? C.primary : C.border}`,
              borderRadius: 20, padding: 36, display: 'flex', flexDirection: 'column', gap: 20,
              position: 'relative', transform: plan.highlight ? 'scale(1.03)' : 'none',
              boxShadow: plan.highlight ? '0 20px 60px rgba(57,119,84,0.25)' : 'none',
            }}>
              {plan.highlight && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: C.primary, color: '#fff', padding: '4px 18px', borderRadius: 100, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>⭐ Most Popular</div>
              )}
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: plan.highlight ? C.primaryLight : C.textMuted }}>{plan.tag}</span>
                <h2 style={{ fontSize: 24, fontWeight: 900, color: plan.highlight ? '#fff' : C.text, margin: '8px 0 4px' }}>{plan.name}</h2>
                <p style={{ fontSize: 13, color: plan.highlight ? 'rgba(255,255,255,0.55)' : C.textMuted, margin: 0, lineHeight: 1.6 }}>{plan.desc}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span style={{ fontSize: 44, fontWeight: 900, color: plan.highlight ? '#fff' : C.text }}>{plan.price}</span>
                {plan.period && <span style={{ fontSize: 15, color: plan.highlight ? 'rgba(255,255,255,0.5)' : C.textMuted }}>{plan.period}</span>}
              </div>
              <div style={{ borderTop: `1px solid ${plan.highlight ? 'rgba(255,255,255,0.1)' : C.border}`, paddingTop: 20 }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    {f.ok ? <CheckCircle size={15} color={plan.highlight ? C.primaryLight : C.primary} style={{ flexShrink: 0 }} /> : <X size={15} color={plan.highlight ? 'rgba(255,255,255,0.25)' : '#CBD5E1'} style={{ flexShrink: 0 }} />}
                    <span style={{ fontSize: 14, color: f.ok ? (plan.highlight ? 'rgba(255,255,255,0.85)' : C.text) : (plan.highlight ? 'rgba(255,255,255,0.3)' : '#CBD5E1'), textDecoration: f.ok ? 'none' : 'line-through' }}>{f.text}</span>
                  </div>
                ))}
              </div>
              <Link href={plan.href} style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, padding: '14px', background: plan.highlight ? C.primary : 'transparent', color: plan.highlight ? '#fff' : C.primary, border: `2px solid ${C.primary}`, borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
                {plan.cta} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: C.surface, padding: '72px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 900, color: C.text, textAlign: 'center', marginBottom: 48 }}>Pricing FAQs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: C.bg, borderRadius: 14, padding: 24, border: `1px solid ${C.border}` }}>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 8 }}>{f.q}</h4>
                <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1B2A22', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>Start growing locally today</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 32 }}>No credit card required for creators. 14-day free trial for businesses.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/signup?role=shop" style={{ padding: '14px 28px', background: C.primary, color: '#fff', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Start Business Trial</Link>
            <Link href="/signup?role=influencer" style={{ padding: '14px 28px', background: 'transparent', color: '#fff', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15, border: '2px solid rgba(255,255,255,0.3)' }}>Join as Creator Free</Link>
          </div>
        </div>
      </section>
    </div>
  );
}