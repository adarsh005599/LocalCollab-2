'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const C = {
  bg: '#FFF7ED', surface: '#FFFFFF', primary: '#397754',
  primaryLight: '#4B9B6E', secondary: '#EB6B40',
  text: '#1E293B', textMuted: '#64748B', border: '#E2E8F0',
};

const team = [
  { name: 'Aditya Sharma', role: 'Co-founder & CEO', emoji: '👨‍💼', bio: 'Passionate about India\'s creator economy. Former product manager at a fintech startup. Believes every local business deserves world-class marketing tools.', skills: ['Product Strategy', 'Business Development', 'Fundraising'] },
  { name: 'Priya Nair', role: 'Co-founder & CTO', emoji: '👩‍💻', bio: 'Full-stack engineer with 4 years of experience building scalable platforms. Architected the AI matchmaking engine from scratch.', skills: ['React / Next.js', 'Node.js', 'AI / ML Systems'] },
  { name: 'Rohan Kapoor', role: 'Head of AI & Data', emoji: '🤖', bio: 'Data scientist specializing in recommendation systems. Built the engagement scoring algorithm that powers LocalCollab\'s matching accuracy.', skills: ['Machine Learning', 'Python', 'PostgreSQL'] },
  { name: 'Sneha Verma', role: 'Head of Growth', emoji: '📈', bio: 'Growth hacker with expertise in community building and influencer marketing. Onboarded the first 500 verified creators to the platform.', skills: ['Creator Acquisition', 'Partnerships', 'Content Strategy'] },
  { name: 'Kabir Mehta', role: 'Head of Design', emoji: '🎨', bio: 'UI/UX designer who obsesses over clean, intuitive interfaces. Designed every pixel of the LocalCollab experience from onboarding to campaign dashboard.', skills: ['Figma', 'User Research', 'Design Systems'] },
  { name: 'Ananya Das', role: 'Business Partnerships', emoji: '🤝', bio: 'Manages relationships with local business partners across 10+ cities. Former brand manager at a regional FMCG company.', skills: ['Brand Relations', 'Sales', 'City Expansion'] },
];

const openRoles = [
  { title: 'Senior Backend Engineer', type: 'Full-time · Remote', dept: 'Engineering' },
  { title: 'Creator Success Manager', type: 'Full-time · Hybrid, Mumbai', dept: 'Community' },
  { title: 'Product Designer', type: 'Full-time · Remote', dept: 'Design' },
  { title: 'City Growth Lead – Bangalore', type: 'Full-time · On-site', dept: 'Growth' },
];

export default function TeamPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: C.bg, color: C.text, overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#1B2A22', paddingTop: 120, paddingBottom: 64, textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, marginBottom: 16 }}>✦ The People ✦</p>
          <h1 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, margin: '0 0 20px' }}>
            Meet the team behind<br /><span style={{ color: C.primaryLight }}>LocalCollab</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)' }}>A passionate team of builders, creators, and community lovers on a mission to democratize influencer marketing for India's local economy.</p>
        </div>
      </section>

      {/* Team Grid */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
          {team.map((member, i) => (
            <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(57,119,84,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, flexShrink: 0 }}>{member.emoji}</div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: C.text, margin: '0 0 4px' }}>{member.name}</h3>
                  <p style={{ fontSize: 13, color: C.primary, fontWeight: 600, margin: 0 }}>{member.role}</p>
                </div>
              </div>
              <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>{member.bio}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {member.skills.map(s => (
                  <span key={s} style={{ padding: '4px 12px', borderRadius: 100, background: 'rgba(57,119,84,0.08)', color: C.primary, fontSize: 12, fontWeight: 600 }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section style={{ background: C.surface, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.secondary, marginBottom: 12 }}>✦ Our Culture ✦</p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: C.text, margin: 0 }}>How we work</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { emoji: '🌍', title: 'Remote-First', desc: 'Our team works from across India — from Mumbai to Jaipur. We believe talent has no zip code.' },
              { emoji: '🚀', title: 'Move Fast', desc: 'We ship, learn, and iterate quickly. Done is better than perfect — but we always care about quality.' },
              { emoji: '🤝', title: 'Community-Driven', desc: 'Every decision we make is filtered through one question: does this help our creators and businesses?' },
              { emoji: '📚', title: 'Keep Learning', desc: 'We invest in our people. Every team member gets a learning budget and 2 hours/week for growth.' },
            ].map((c, i) => (
              <div key={i} style={{ background: C.bg, borderRadius: 16, padding: 28, textAlign: 'center' }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{c.emoji}</div>
                <h4 style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 8 }}>{c.title}</h4>
                <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.primary, marginBottom: 12 }}>✦ Join Us ✦</p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, color: C.text, margin: 0 }}>Open positions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {openRoles.map((role, i) => (
              <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{role.dept}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: C.text, margin: '6px 0 4px' }}>{role.title}</h3>
                  <p style={{ fontSize: 13, color: C.textMuted, margin: 0 }}>{role.type}</p>
                </div>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 20px', background: C.primary, color: '#fff', borderRadius: 100, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                  Apply <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: C.textMuted, marginTop: 32, fontSize: 14 }}>
            Don't see your role? Email us at <a href="mailto:localcollab@gmail.com" style={{ color: C.primary, fontWeight: 600 }}>localcollab@gmail.com</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1B2A22', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>Build with us</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 28 }}>We're a small team making a big impact. Come help us connect India's local creators and businesses.</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', background: C.primary, color: '#fff', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}