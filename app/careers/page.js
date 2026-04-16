'use client';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';

const C = {
  bg: '#FFF7ED', surface: '#FFFFFF', primary: '#397754',
  primaryLight: '#4B9B6E', secondary: '#EB6B40',
  text: '#1E293B', textMuted: '#64748B', border: '#E2E8F0',
};

const roles = [
  { title: 'Senior Full-Stack Engineer', dept: 'Engineering', location: 'Remote · India', type: 'Full-time', desc: 'Build and scale the React/Node.js platform powering 1,000+ creators and businesses. You\'ll own features end-to-end from DB schema to UI.' },
  { title: 'ML Engineer – Recommendations', dept: 'AI & Data', location: 'Remote · India', type: 'Full-time', desc: 'Improve and expand our AI matchmaking engine. Work on location-based scoring, engagement prediction, and niche classification models.' },
  { title: 'Creator Success Manager', dept: 'Community', location: 'Hybrid · Mumbai or Bangalore', type: 'Full-time', desc: 'Onboard new creators, help them optimize their profiles, and ensure they land successful collaborations. You\'re the face of LocalCollab for creators.' },
  { title: 'City Growth Lead – Bangalore', dept: 'Growth', location: 'On-site · Bangalore', type: 'Full-time', desc: 'Own creator and business acquisition in Bangalore. Build local partnerships, run events, and grow the LocalCollab community from the ground up.' },
  { title: 'Product Designer', dept: 'Design', location: 'Remote · India', type: 'Full-time', desc: 'Shape the end-to-end user experience for businesses and creators. Own design from discovery to shipped feature. Proficiency in Figma required.' },
  { title: 'Marketing Intern – Social & Content', dept: 'Marketing', location: 'Remote · India', type: 'Internship · 3–6 months', desc: 'Create content, run social campaigns, and help grow our community. Ideal for someone who understands creator culture and wants hands-on startup experience.' },
];

const perks = [
  { emoji: '🏠', title: 'Remote-First', desc: 'Work from anywhere in India. We value output over office hours.' },
  { emoji: '📚', title: 'Learning Budget', desc: '₹20,000/year for courses, books, and conferences of your choice.' },
  { emoji: '🏥', title: 'Health Insurance', desc: 'Comprehensive health coverage for you and your immediate family.' },
  { emoji: '🎯', title: 'ESOP Pool', desc: 'Early-stage equity. Grow with us and share in the upside.' },
  { emoji: '🍽️', title: 'Meal Allowance', desc: 'Monthly stipend for team lunches and food delivery on long sprint days.' },
  { emoji: '🌴', title: 'Flexible PTO', desc: 'Take the time you need. We don\'t count vacation days.' },
];

export default function CareersPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: C.bg, color: C.text, overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#1B2A22', paddingTop: 120, paddingBottom: 80 }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, marginBottom: 16 }}>✦ Join the Team ✦</p>
          <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, margin: '0 0 24px' }}>
            Help us build India's<br /><span style={{ color: C.primaryLight }}>hyperlocal creator economy</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.75 }}>
            We're a small, mission-driven team on a big mission. If you care about India's local economy, creator empowerment, and building things people love — you'll fit right in.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>
            <span>🏙️ 10+ team members</span>
            <span>🌍 Remote-first</span>
            <span>🚀 Early stage · Series A target 2026</span>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section style={{ background: C.surface, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.primary, marginBottom: 12 }}>✦ Why LocalCollab ✦</p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: C.text, margin: 0 }}>Perks & benefits</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
            {perks.map((p, i) => (
              <div key={i} style={{ background: C.bg, borderRadius: 16, padding: 28, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{p.emoji}</div>
                <h4 style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 8 }}>{p.title}</h4>
                <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.secondary, marginBottom: 12 }}>✦ Open Positions ✦</p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: C.text, margin: 0 }}>We're hiring</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {roles.map((role, i) => (
              <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 18, padding: '28px 32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 14 }}>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{role.dept}</span>
                    <h3 style={{ fontSize: 19, fontWeight: 800, color: C.text, margin: '6px 0 8px' }}>{role.title}</h3>
                    <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', fontSize: 13, color: C.textMuted }}>
                      <span><MapPin size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />{role.location}</span>
                      <span><Briefcase size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />{role.type}</span>
                    </div>
                  </div>
                  <a href={`mailto:localcollab@gmail.com?subject=Application: ${role.title}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '11px 22px', background: C.primary, color: '#fff', borderRadius: 100, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                    Apply <ArrowRight size={13} />
                  </a>
                </div>
                <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Application */}
      <section style={{ background: '#1B2A22', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>Don't see your role?</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 28 }}>We always want to meet talented people who care about our mission. Send us an open application and tell us how you'd contribute.</p>
          <a href="mailto:localcollab@gmail.com?subject=Open Application – LocalCollab" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', background: C.primary, color: '#fff', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Send Open Application <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}