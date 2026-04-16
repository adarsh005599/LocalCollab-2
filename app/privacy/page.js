'use client';
import Link from 'next/link';

const C = {
  bg: '#FFF7ED', surface: '#FFFFFF', primary: '#397754',
  primaryLight: '#4B9B6E', secondary: '#EB6B40',
  text: '#1E293B', textMuted: '#64748B', border: '#E2E8F0',
};

const sections = [
  { id: 'information', title: '1. Information We Collect', content: `We collect information you provide when you create an account on LocalCollab, including your name, email address, profile photo, city, and content niche. For businesses, we also collect your business name, location, and subscription billing details. For creators, we collect your social media handles, follower count, engagement metrics, and pricing preferences.

We automatically collect certain technical data when you use our platform, including your IP address, browser type, device information, pages viewed, and actions taken on the platform. This data helps us improve the platform experience and power our AI matchmaking engine.` },

  { id: 'usage', title: '2. How We Use Your Information', content: `We use your information to operate and improve the LocalCollab platform, including powering our AI-based matchmaking engine that connects businesses with creators. We use engagement data, location, niche, and budget information to generate relevant recommendations.

We use your email address to send account-related communications, collaboration notifications, and (if you opt in) our newsletter. We do not sell your personal information to third parties. We do not allow advertisers to target you based on your personal data within our platform.` },

  { id: 'sharing', title: '3. How We Share Your Information', content: `Your profile information — including name, city, niche, follower count, engagement rate, and pricing — is visible to registered businesses on the platform when you have a creator profile. Similarly, business profiles are visible to registered creators.

We share data with trusted service providers who help us operate the platform (such as cloud hosting, payment processing, and analytics). These providers are contractually bound to use your data only for the services they provide to us. We will disclose information if required by law or to protect the rights and safety of LocalCollab, our users, or the public.` },

  { id: 'security', title: '4. Data Security', content: `We implement industry-standard security measures including JWT-based authentication, encrypted data transmission (HTTPS), and secure cloud storage. Your payment information is processed by our payment provider and is never stored on LocalCollab servers.

Despite our best efforts, no system is perfectly secure. We encourage you to use a strong, unique password for your LocalCollab account and to contact us immediately if you suspect unauthorized access.` },

  { id: 'rights', title: '5. Your Rights', content: `You have the right to access, correct, or delete your personal information at any time. You can update your profile information directly from your account settings. To request deletion of your account and associated data, email us at localcollab@gmail.com.

You may opt out of marketing emails by clicking the unsubscribe link in any email we send. You cannot opt out of transactional emails related to your account or active collaborations.` },

  { id: 'cookies', title: '6. Cookies', content: `We use cookies and similar tracking technologies to maintain your login session, remember your preferences, and analyze platform usage. You can control cookie settings through your browser, but disabling cookies may affect your ability to use certain features of the platform.` },

  { id: 'children', title: '7. Children\'s Privacy', content: `LocalCollab is not intended for users under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have collected data from a user under 18, we will delete that information promptly.` },

  { id: 'changes', title: '8. Changes to This Policy', content: `We may update this Privacy Policy from time to time. We will notify you of material changes by email or by posting a notice on the platform. Your continued use of LocalCollab after changes are posted constitutes your acceptance of the updated policy.` },

  { id: 'contact', title: '9. Contact Us', content: `For any questions about this Privacy Policy or your data, please contact us at localcollab@gmail.com. We aim to respond to all privacy inquiries within 48 hours.` },
];

export default function PrivacyPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: C.bg, color: C.text }}>

      <section style={{ background: '#1B2A22', paddingTop: 120, paddingBottom: 56, textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, marginBottom: 16 }}>✦ Legal ✦</p>
          <h1 style={{ fontSize: 'clamp(30px,4vw,48px)', fontWeight: 900, color: '#fff', margin: '0 0 16px' }}>Privacy Policy</h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>Last updated: December 2025</p>
        </div>
      </section>

      <section style={{ maxWidth: 860, margin: '0 auto', padding: '72px 24px' }}>

        {/* TOC */}
        <div style={{ background: C.surface, borderRadius: 16, padding: 28, border: `1px solid ${C.border}`, marginBottom: 48 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 16 }}>Contents</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{ fontSize: 14, color: C.primary, textDecoration: 'none', fontWeight: 500 }}>{s.title}</a>
            ))}
          </div>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(57,119,84,0.06)', borderRadius: 14, padding: 24, border: `1px solid rgba(57,119,84,0.15)`, marginBottom: 40 }}>
          <p style={{ fontSize: 15, color: C.text, lineHeight: 1.75, margin: 0 }}>
            LocalCollab ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect your information when you use the LocalCollab platform — a hyperlocal influencer marketing marketplace connecting local businesses with verified micro-influencers across India.
          </p>
        </div>

        {/* Sections */}
        {sections.map(s => (
          <div key={s.id} id={s.id} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: C.text, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${C.border}` }}>{s.title}</h2>
            {s.content.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.8, marginBottom: 14 }}>{para}</p>
            ))}
          </div>
        ))}

        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 32, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link href="/terms" style={{ color: C.primary, fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>Terms of Service →</Link>
          <Link href="/refund" style={{ color: C.primary, fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>Refund Policy →</Link>
          <Link href="/contact" style={{ color: C.primary, fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>Contact Us →</Link>
        </div>
      </section>
    </div>
  );
}