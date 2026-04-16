'use client';
import { useState } from 'react';
import { Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const C = {
  bg: '#FFF7ED', surface: '#FFFFFF', primary: '#397754',
  primaryLight: '#4B9B6E', secondary: '#EB6B40',
  text: '#1E293B', textMuted: '#64748B', border: '#E2E8F0',
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', role: 'business', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire this to your backend/email service
    setSent(true);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: C.bg, color: C.text, overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#1B2A22', paddingTop: 120, paddingBottom: 64, textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, marginBottom: 16 }}>✦ Get in Touch ✦</p>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, margin: '0 0 20px' }}>
            We'd love to<br /><span style={{ color: C.primaryLight }}>hear from you</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)' }}>Whether you're a business, creator, or just curious — our team is here to help.</p>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, marginBottom: 8 }}>Contact Information</h2>
              <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.7 }}>Reach out directly or fill the form. We reply within 24 hours on business days.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: <Mail size={18} color={C.primary} />, label: 'Email', value: 'localcollab@gmail.com', href: 'mailto:localcollab@gmail.com' },
                { icon: <MessageSquare size={18} color={C.primary} />, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/919999999999' },
                { icon: <MapPin size={18} color={C.primary} />, label: 'Based in', value: 'India (Remote-First)' },
                { icon: <Clock size={18} color={C.primary} />, label: 'Response time', value: 'Within 24 hours' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(57,119,84,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 2px' }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: 15, color: C.primary, textDecoration: 'none', fontWeight: 600 }}>{item.value}</a>
                      : <p style={{ fontSize: 15, color: C.text, margin: 0 }}>{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Follow Us</p>
              <div style={{ display: 'flex', gap: 12 }}>
                {[
                  { Icon: FaInstagram, color: '#E1306C', href: '#' },
                  { Icon: FaLinkedin, color: '#0077B5', href: '#' },
                  { Icon: FaWhatsapp, color: '#25D366', href: '#' },
                ].map(({ Icon, color, href }, i) => (
                  <a key={i} href={href} style={{ width: 44, height: 44, borderRadius: 10, background: C.bg, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, fontSize: 18, textDecoration: 'none' }}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ background: 'rgba(57,119,84,0.06)', borderRadius: 16, padding: 24, border: `1px solid ${C.border}` }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 14 }}>Quick Options</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { label: '🏪 Join as Business', href: '/signup?role=shop' },
                  { label: '📸 Join as Creator', href: '/signup?role=influencer' },
                  { label: '💰 View Pricing', href: '/pricing' },
                  { label: '📋 Apply to a Job', href: '/careers' },
                ].map((l, i) => (
                  <a key={i} href={l.href} style={{ fontSize: 14, color: C.primary, textDecoration: 'none', fontWeight: 600 }}>{l.label}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: C.surface, borderRadius: 20, padding: 40, border: `1px solid ${C.border}` }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 10 }}>Message sent!</h3>
                <p style={{ fontSize: 15, color: C.textMuted }}>Thanks for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: C.text, margin: 0 }}>Send us a message</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: C.text, display: 'block', marginBottom: 6 }}>Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 14, outline: 'none', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: C.text, display: 'block', marginBottom: 6 }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 14, outline: 'none', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif' }} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: C.text, display: 'block', marginBottom: 6 }}>I am a...</label>
                  <div style={{ display: 'flex', gap: 10 }}>
                    {['business', 'creator', 'other'].map(r => (
                      <button key={r} type="button" onClick={() => setForm({ ...form, role: r })} style={{ flex: 1, padding: '10px', borderRadius: 10, border: `1px solid ${form.role === r ? C.primary : C.border}`, background: form.role === r ? 'rgba(57,119,84,0.1)' : '#fff', color: form.role === r ? C.primary : C.textMuted, fontSize: 13, fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize' }}>{r}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: C.text, display: 'block', marginBottom: 6 }}>Subject *</label>
                  <input required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="What's this about?" style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 14, outline: 'none', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif' }} />
                </div>

                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: C.text, display: 'block', marginBottom: 6 }}>Message *</label>
                  <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us more..." rows={5} style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 14, outline: 'none', boxSizing: 'border-box', resize: 'vertical', fontFamily: 'Inter, sans-serif' }} />
                </div>

                <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px', background: C.primary, color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}