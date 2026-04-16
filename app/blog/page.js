'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';

const C = {
  bg: '#FFF7ED', surface: '#FFFFFF', primary: '#397754',
  primaryLight: '#4B9B6E', secondary: '#EB6B40',
  text: '#1E293B', textMuted: '#64748B', border: '#E2E8F0',
};

const categories = ['All', 'Creator Tips', 'Business Growth', 'AI & Tech', 'Case Studies', 'Industry Trends'];

const posts = [
  { title: 'How Micro-Influencers Are Outperforming Mega Stars in Local Markets', category: 'Industry Trends', readTime: '5 min read', author: 'Sneha Verma', date: 'Dec 18, 2025', excerpt: 'A deep dive into why engagement rates for micro-influencers (1K–50K followers) are 3–7x higher than celebrity accounts — and what that means for local brands in India.', emoji: '📊', featured: true },
  { title: '7 Things Local Businesses Must Do Before Their First Influencer Collab', category: 'Business Growth', readTime: '4 min read', author: 'Aditya Sharma', date: 'Dec 10, 2025', excerpt: 'From setting clear goals to defining your content brief — here\'s a checklist that will save you time, money, and disappointment on your first collaboration.', emoji: '✅', featured: false },
  { title: 'How to Price Your Reels as a Micro-Influencer in 2025', category: 'Creator Tips', readTime: '6 min read', author: 'Priya Nair', date: 'Dec 5, 2025', excerpt: 'Confused about what to charge? We break down pricing benchmarks by follower count, niche, and engagement rate based on real LocalCollab collaboration data.', emoji: '💰', featured: false },
  { title: 'Inside LocalCollab\'s AI Matchmaking Engine', category: 'AI & Tech', readTime: '8 min read', author: 'Rohan Kapoor', date: 'Nov 28, 2025', excerpt: 'A technical deep dive into how we use location proximity, engagement scoring, niche alignment, and budget matching to achieve 94% match satisfaction rates.', emoji: '🤖', featured: false },
  { title: 'From 200 to 4,000 Instagram Followers in 30 Days: Ethnic Studio\'s Story', category: 'Case Studies', readTime: '3 min read', author: 'Ananya Das', date: 'Nov 20, 2025', excerpt: 'A Jaipur boutique\'s festive campaign with creator Sneha Patel generated ₹2.1L in sales and 4,200 new followers — on a ₹9,000 budget.', emoji: '🎉', featured: false },
  { title: 'The Creator Economy in Tier-2 India: Untapped Goldmine', category: 'Industry Trends', readTime: '7 min read', author: 'Kabir Mehta', date: 'Nov 14, 2025', excerpt: 'Cities like Jaipur, Indore, Coimbatore, and Bhopal are home to thousands of micro-influencers with highly engaged local audiences — and businesses are just waking up to this.', emoji: '🌏', featured: false },
  { title: '5 Content Formats That Convert for Local Businesses', category: 'Creator Tips', readTime: '4 min read', author: 'Sneha Verma', date: 'Nov 5, 2025', excerpt: 'Reels, stories, carousels, live sessions — not all content formats are equal. Here\'s what actually drives foot traffic and enquiries for local brands.', emoji: '📱', featured: false },
  { title: 'Why Zero Commission is the Future of Influencer Platforms', category: 'Industry Trends', readTime: '5 min read', author: 'Aditya Sharma', date: 'Oct 28, 2025', excerpt: 'Traditional influencer agencies take 20–40% cuts. We explain why the zero-commission model isn\'t just fairer — it creates better outcomes for everyone.', emoji: '🔓', featured: false },
];

export default function BlogPage() {
  const [selected, setSelected] = useState('All');
  const filtered = selected === 'All' ? posts : posts.filter(p => p.category === selected);
  const featured = filtered.find(p => p.featured) || filtered[0];
  const rest = filtered.filter(p => p !== featured);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: C.bg, color: C.text, overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#1B2A22', paddingTop: 120, paddingBottom: 64, textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, marginBottom: 16 }}>✦ Blog & Insights ✦</p>
          <h1 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, margin: '0 0 20px' }}>
            Insights for creators<br /><span style={{ color: C.primaryLight }}>and local businesses</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)' }}>Tips, case studies, and data-backed guides to help you grow through community marketing.</p>
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: '16px 24px', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelected(cat)} style={{ padding: '8px 18px', borderRadius: 100, border: `1px solid ${selected === cat ? C.primary : C.border}`, background: selected === cat ? C.primary : '#fff', color: selected === cat ? '#fff' : C.textMuted, fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>{cat}</button>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 24px' }}>

        {/* Featured Post */}
        {featured && (
          <div style={{ background: '#1B2A22', borderRadius: 24, padding: 48, marginBottom: 48, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 40, alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.primaryLight, textTransform: 'uppercase', letterSpacing: '0.1em' }}>✦ Featured · {featured.category}</span>
              <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, color: '#fff', lineHeight: 1.25, margin: '12px 0 16px' }}>{featured.title}</h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 24 }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
                <span><User size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />{featured.author}</span>
                <span><Clock size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />{featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: 100, lineHeight: 1 }}>{featured.emoji}</div>
            </div>
          </div>
        )}

        {/* Post Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
          {rest.map((post, i) => (
            <article key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'rgba(57,119,84,0.06)', padding: '32px 28px', textAlign: 'center', fontSize: 52, lineHeight: 1 }}>{post.emoji}</div>
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{post.category}</span>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: C.text, lineHeight: 1.35, margin: 0 }}>{post.title}</h3>
                <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.65, margin: 0, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', color: C.textMuted, fontSize: 12, paddingTop: 12, borderTop: `1px solid ${C.border}`, marginTop: 'auto' }}>
                  <span><User size={11} style={{ verticalAlign: 'middle', marginRight: 3 }} />{post.author}</span>
                  <span><Clock size={11} style={{ verticalAlign: 'middle', marginRight: 3 }} />{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 24px' }}>
            <p style={{ fontSize: 18, color: C.textMuted }}>No posts found in this category.</p>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section style={{ background: '#1B2A22', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 900, color: '#fff', marginBottom: 12 }}>Get insights in your inbox</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 28 }}>Weekly tips, case studies, and creator economy news — curated for Indian local businesses and creators.</p>
          <div style={{ display: 'flex', gap: 10, maxWidth: 420, margin: '0 auto', flexWrap: 'wrap' }}>
            <input placeholder="your@email.com" style={{ flex: 1, minWidth: 200, padding: '12px 18px', borderRadius: 10, border: 'none', fontSize: 14, outline: 'none' }} />
            <button style={{ padding: '12px 20px', background: C.primary, color: '#fff', borderRadius: 10, fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}