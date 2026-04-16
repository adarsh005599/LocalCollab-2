'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Shield, Star, CheckCircle, AlertTriangle, Mail, MessageSquare, Clock, ArrowRight, ChevronDown } from 'lucide-react';

const C = {
  bg: '#FFF7ED', surface: '#FFFFFF', primary: '#397754',
  primaryLight: '#4B9B6E', secondary: '#EB6B40',
  text: '#1E293B', textMuted: '#64748B', border: '#E2E8F0',
};

const trustFeatures = [
  { icon: <CheckCircle size={22} color={C.primary} />, title: 'Verified Creator Profiles', desc: 'Every creator on LocalCollab goes through a verification process. We check social media authenticity, engagement rates, and profile completeness before approval.' },
  { icon: <Star size={22} color={C.primary} />, title: 'Post-Collab Ratings', desc: 'After each collaboration, both businesses and creators leave ratings and reviews. This builds a trustworthy reputation system visible to all platform users.' },
  { icon: <Shield size={22} color={C.primary} />, title: 'Secure Authentication', desc: 'JWT-based login, encrypted data transmission, and industry-standard security practices protect your account and personal information.' },
  { icon: <AlertTriangle size={22} color={C.secondary} />, title: 'Dispute Resolution', desc: 'If a collaboration goes wrong, our support team steps in. We help mediate disputes and take action against bad actors including account suspension.' },
];

const faqs = [
  { q: 'How do I report a suspicious business or creator?', a: 'Use the "Report" button on any profile or message thread. Our trust and safety team reviews all reports within 24–48 hours. For urgent issues, email localcollab@gmail.com.' },
  { q: 'What happens if a creator doesn\'t deliver agreed content?', a: 'Contact us at localcollab@gmail.com with evidence of the agreement (screenshots of messages). We will review the situation and may apply a warning or suspension to the creator\'s account.' },
  { q: 'How does creator verification work?', a: 'Creators submit their social handles for review. We verify account authenticity, check that follower counts and engagement rates match their claims, and ensure the profile is complete. Verified profiles receive a checkmark badge.' },
  { q: 'Is my payment information secure?', a: 'Yes. Payment processing is handled by our payment provider and your card details are never stored on LocalCollab servers. All transactions are encrypted.' },
  { q: 'How do I recover my account if I\'m locked out?', a: 'Use the "Forgot Password" link on the login page to reset via your registered email. If you no longer have access to that email, contact localcollab@gmail.com for manual account recovery.' },
  { q: 'Can I block a user?', a: 'Yes. You can block any user from their profile or from a message thread. Blocked users cannot view your profile or contact you. Blocking does not automatically report a user.' },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: C.bg, color: C.text, overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#1B2A22', paddingTop: 120, paddingBottom: 64, textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, marginBottom: 16 }}>✦ Safety & Support ✦</p>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, margin: '0 0 20px' }}>
            Support & Trust<br /><span style={{ color: C.primaryLight }}>at LocalCollab</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)' }}>We're committed to making LocalCollab a safe, reliable, and trustworthy platform for every business and creator.</p>
        </div>
      </section>

      {/* Trust Features */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.primary, marginBottom: 12 }}>✦ How We Protect You ✦</p>
          <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: C.text, margin: 0 }}>Built on trust, designed for safety</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
          {trustFeatures.map((f, i) => (
            <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 18, padding: 32 }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: i === 3 ? 'rgba(235,107,64,0.1)' : 'rgba(57,119,84,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: C.text, marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section style={{ background: C.surface, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.secondary, marginBottom: 12 }}>✦ Get Help ✦</p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: C.text, margin: 0 }}>Reach our support team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: <Mail size={22} color={C.primary} />, title: 'Email Support', desc: 'For account issues, disputes, billing, and general questions.', action: 'localcollab@gmail.com', href: 'mailto:localcollab@gmail.com', time: 'Replies within 24 hours' },
              { icon: <MessageSquare size={22} color={C.primary} />, title: 'WhatsApp', desc: 'Quick questions and urgent support during business hours.', action: 'Chat on WhatsApp', href: 'https://wa.me/919999999999', time: 'Mon–Sat, 10am–6pm IST' },
              { icon: <Clock size={22} color={C.primary} />, title: 'Response Times', desc: 'General queries: 24 hours. Disputes & safety: 4–8 hours. Billing: 24–48 hours.', action: null, time: null },
            ].map((item, i) => (
              <div key={i} style={{ background: C.bg, borderRadius: 16, padding: 28, border: `1px solid ${C.border}` }}>
                <div style={{ width: 48, height: 48, borderRadius: 11, background: 'rgba(57,119,84,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>{item.icon}</div>
                <h4 style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: '0 0 14px' }}>{item.desc}</p>
                {item.href && <a href={item.href} style={{ fontSize: 14, color: C.primary, fontWeight: 600, textDecoration: 'none' }}>{item.action} →</a>}
                {item.time && <p style={{ fontSize: 12, color: C.textMuted, margin: '8px 0 0' }}>{item.time}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.primary, marginBottom: 12 }}>✦ FAQ ✦</p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: C.text, margin: 0 }}>Support FAQs</h2>
          </div>
          <div style={{ background: C.surface, borderRadius: 18, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{faq.q}</span>
                  <ChevronDown size={18} color={C.primary} style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 28px 20px' }}>
                    <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1B2A22', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 500, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>Still need help?</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 28 }}>Our support team is here for you. We aim to make every experience on LocalCollab positive and productive.</p>
          <a href="mailto:localcollab@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', background: C.primary, color: '#fff', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Email Support <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}