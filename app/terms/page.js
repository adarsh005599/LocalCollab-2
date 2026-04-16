'use client';
import Link from 'next/link';

const C = {
  bg: '#FFF7ED', surface: '#FFFFFF', primary: '#397754',
  primaryLight: '#4B9B6E', secondary: '#EB6B40',
  text: '#1E293B', textMuted: '#64748B', border: '#E2E8F0',
};

const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms', content: `By accessing or using the LocalCollab platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our platform.

These terms apply to all users of LocalCollab, including businesses ("Business Users") and content creators ("Creator Users").` },

  { id: 'eligibility', title: '2. Eligibility', content: `You must be at least 18 years old to use LocalCollab. By creating an account, you confirm that you are 18 or older and that the information you provide is accurate and truthful.

For Business Users: you must be authorized to act on behalf of the business entity you register.` },

  { id: 'accounts', title: '3. User Accounts', content: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately at localcollab@gmail.com if you suspect any unauthorized use of your account.

You may not create more than one account without our express written permission. We reserve the right to suspend or terminate accounts that violate these terms.` },

  { id: 'businesses', title: '4. Business User Terms', content: `Business Users subscribe to LocalCollab on an annual basis to access the creator directory and initiate collaboration requests. The subscription fee is non-refundable except as outlined in our Refund Policy.

Business Users may not use LocalCollab to contact creators for purposes other than legitimate marketing collaborations. Spam, harassment, or fraudulent collaboration requests will result in immediate account termination.` },

  { id: 'creators', title: '5. Creator User Terms', content: `Creator accounts are free. LocalCollab does not take any commission on collaboration earnings. Creators set their own pricing and negotiate terms directly with businesses.

Creators must maintain accurate profile information including follower counts, engagement rates, and pricing. Misleading information is grounds for account suspension.

Creators are responsible for fulfilling collaboration agreements they accept. Failure to deliver agreed content without reasonable notice may result in negative ratings and account suspension.` },

  { id: 'prohibited', title: '6. Prohibited Conduct', content: `You may not use LocalCollab to engage in any of the following:
• Fraudulent or misleading profile information
• Harassment, abuse, or threatening behavior toward other users
• Spam or unsolicited commercial communications
• Intellectual property infringement
• Any illegal activity or facilitation of illegal activity
• Circumventing platform systems to avoid subscription fees
• Creating fake reviews or ratings
• Sharing other users' private information without consent

Violations may result in immediate account termination and, where appropriate, reporting to relevant authorities.` },

  { id: 'content', title: '7. User Content', content: `You retain ownership of content you create, upload, or share on LocalCollab. By posting content on our platform, you grant LocalCollab a non-exclusive, worldwide, royalty-free license to display, reproduce, and distribute your content in connection with operating the platform.

You are solely responsible for ensuring your content does not infringe on any third-party rights and complies with applicable laws.` },

  { id: 'limitation', title: '8. Limitation of Liability', content: `LocalCollab is a marketplace platform and is not a party to the agreements between businesses and creators. We do not guarantee the quality, accuracy, or completion of any collaboration.

To the maximum extent permitted by law, LocalCollab shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.` },

  { id: 'changes', title: '9. Changes to Terms', content: `We may update these Terms of Service at any time. We will notify users of material changes by email or by posting notice on the platform. Continued use of the platform after changes are posted constitutes acceptance of the new terms.` },

  { id: 'governing', title: '10. Governing Law', content: `These Terms of Service are governed by the laws of India. Any disputes arising from these terms or your use of LocalCollab shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.` },
];

export default function TermsPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: C.bg, color: C.text }}>

      <section style={{ background: '#1B2A22', paddingTop: 120, paddingBottom: 56, textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, marginBottom: 16 }}>✦ Legal ✦</p>
          <h1 style={{ fontSize: 'clamp(30px,4vw,48px)', fontWeight: 900, color: '#fff', margin: '0 0 16px' }}>Terms of Service</h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>Last updated: December 2025</p>
        </div>
      </section>

      <section style={{ maxWidth: 860, margin: '0 auto', padding: '72px 24px' }}>

        <div style={{ background: C.surface, borderRadius: 16, padding: 28, border: `1px solid ${C.border}`, marginBottom: 48 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 16 }}>Contents</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{ fontSize: 14, color: C.primary, textDecoration: 'none', fontWeight: 500 }}>{s.title}</a>
            ))}
          </div>
        </div>

        <div style={{ background: 'rgba(235,107,64,0.06)', borderRadius: 14, padding: 24, border: `1px solid rgba(235,107,64,0.2)`, marginBottom: 40 }}>
          <p style={{ fontSize: 15, color: C.text, lineHeight: 1.75, margin: 0 }}>
            <strong>Please read these Terms of Service carefully</strong> before using the LocalCollab platform. These terms constitute a legally binding agreement between you and LocalCollab ("we," "our," or "us"). These terms were last updated in December 2025.
          </p>
        </div>

        {sections.map(s => (
          <div key={s.id} id={s.id} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: C.text, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${C.border}` }}>{s.title}</h2>
            {s.content.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.8, marginBottom: 14, whiteSpace: 'pre-line' }}>{para}</p>
            ))}
          </div>
        ))}

        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 32, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link href="/privacy" style={{ color: C.primary, fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>Privacy Policy →</Link>
          <Link href="/refund" style={{ color: C.primary, fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>Refund Policy →</Link>
          <Link href="/contact" style={{ color: C.primary, fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>Contact Us →</Link>
        </div>
      </section>
    </div>
  );
}