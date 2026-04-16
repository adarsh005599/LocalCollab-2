'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Filter, Star, ArrowRight, Instagram, Users, TrendingUp, CheckCircle } from 'lucide-react';

const C = {
  bg: '#FFF7ED', surface: '#FFFFFF', primary: '#397754',
  primaryLight: '#4B9B6E', secondary: '#EB6B40',
  text: '#1E293B', textMuted: '#64748B', border: '#E2E8F0',
};

const niches = ['All', 'Food & Beverage', 'Fashion', 'Fitness', 'Skincare', 'Travel', 'Tech', 'Home Decor', 'Education'];
const cities = ['All Cities', 'Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Hyderabad', 'Jaipur', 'Chennai', 'Kolkata'];

const creators = [
  { name: 'Priya Sharma', city: 'Mumbai', niche: 'Food & Beverage', followers: '18.4K', engagement: '6.2%', rating: 4.9, price: '₹2,500/reel', verified: true, avatar: '🧑‍🍳', tags: ['Reels', 'Stories', 'Reviews'] },
  { name: 'Arjun Mehta', city: 'Bangalore', niche: 'Tech', followers: '22.1K', engagement: '5.8%', rating: 4.7, price: '₹3,200/reel', verified: true, avatar: '👨‍💻', tags: ['Unboxing', 'Reviews', 'Shorts'] },
  { name: 'Sneha Patel', city: 'Jaipur', niche: 'Fashion', followers: '14.8K', engagement: '7.4%', rating: 4.8, price: '₹1,800/reel', verified: true, avatar: '👗', tags: ['OOTD', 'Hauls', 'Reels'] },
  { name: 'Rohan Das', city: 'Pune', niche: 'Fitness', followers: '31.2K', engagement: '5.1%', rating: 4.6, price: '₹4,000/reel', verified: true, avatar: '🏋️', tags: ['Workouts', 'Diet', 'Motivation'] },
  { name: 'Meera Iyer', city: 'Chennai', niche: 'Skincare', followers: '9.7K', engagement: '8.9%', rating: 4.9, price: '₹1,500/reel', verified: false, avatar: '✨', tags: ['Reviews', 'Routines', 'Tips'] },
  { name: 'Kabir Singh', city: 'Delhi', niche: 'Travel', followers: '27.3K', engagement: '6.7%', rating: 4.5, price: '₹3,500/reel', verified: true, avatar: '✈️', tags: ['Vlogs', 'Reels', 'Guides'] },
  { name: 'Ananya Roy', city: 'Kolkata', niche: 'Home Decor', followers: '12.6K', engagement: '7.1%', rating: 4.8, price: '₹2,000/reel', verified: true, avatar: '🏡', tags: ['DIY', 'Interiors', 'Reels'] },
  { name: 'Vikram Nair', city: 'Hyderabad', niche: 'Food & Beverage', followers: '19.5K', engagement: '6.5%', rating: 4.7, price: '₹2,800/reel', verified: true, avatar: '🍛', tags: ['Vlogs', 'Reviews', 'Stories'] },
  { name: 'Divya Gupta', city: 'Mumbai', niche: 'Education', followers: '8.3K', engagement: '9.2%', rating: 4.9, price: '₹1,200/reel', verified: false, avatar: '📚', tags: ['Tips', 'Explainers', 'Reels'] },
];

const stats = [
  { label: 'Verified Creators', value: '1,000+', icon: <CheckCircle size={20} color={C.primary} /> },
  { label: 'Active Cities', value: '10+', icon: <MapPin size={20} color={C.primary} /> },
  { label: 'Avg Engagement', value: '6.8%', icon: <TrendingUp size={20} color={C.primary} /> },
  { label: 'Successful Collabs', value: '300+', icon: <Star size={20} color={C.primary} /> },
];

export default function CreatorsPage() {
  const [selectedNiche, setSelectedNiche] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [query, setQuery] = useState('');

  const filtered = creators.filter(c => {
    const nicheOk = selectedNiche === 'All' || c.niche === selectedNiche;
    const cityOk = selectedCity === 'All Cities' || c.city === selectedCity;
    const queryOk = !query || c.name.toLowerCase().includes(query.toLowerCase()) || c.niche.toLowerCase().includes(query.toLowerCase());
    return nicheOk && cityOk && queryOk;
  });

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: C.bg, color: C.text, overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#1B2A22', paddingTop: 120, paddingBottom: 64, textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.primaryLight, marginBottom: 16 }}>✦ Creator Directory ✦</p>
          <h1 style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, margin: '0 0 20px' }}>
            Find the perfect creator<br /><span style={{ color: C.primaryLight }}>for your local brand</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 40 }}>Browse 1,000+ verified micro-influencers across India. Filter by city, niche, and budget.</p>

          {/* Search */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '8px 8px 8px 20px', display: 'flex', alignItems: 'center', gap: 12, maxWidth: 560, margin: '0 auto' }}>
            <Search size={18} color={C.textMuted} />
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by name or niche..." style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, color: C.text, background: 'transparent' }} />
            <button style={{ background: C.primary, color: '#fff', border: 'none', borderRadius: 10, padding: '10px 20px', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Search</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'rgba(57,119,84,0.06)', borderBottom: `1px solid ${C.border}`, padding: '28px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24, textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              {s.icon}
              <div>
                <span style={{ fontSize: 20, fontWeight: 900, color: C.primary }}>{s.value}</span>
                <span style={{ fontSize: 13, color: C.textMuted, marginLeft: 6 }}>{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filters + Grid */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32, alignItems: 'center' }}>
          <Filter size={16} color={C.textMuted} />
          {/* Niche filter */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {niches.map(n => (
              <button key={n} onClick={() => setSelectedNiche(n)} style={{ padding: '6px 14px', borderRadius: 100, border: `1px solid ${selectedNiche === n ? C.primary : C.border}`, background: selectedNiche === n ? C.primary : '#fff', color: selectedNiche === n ? '#fff' : C.textMuted, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>{n}</button>
            ))}
          </div>
          {/* City filter */}
          <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)} style={{ padding: '8px 14px', borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 14, color: C.text, background: '#fff', cursor: 'pointer', outline: 'none' }}>
            {cities.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <p style={{ fontSize: 14, color: C.textMuted, marginBottom: 24 }}>{filtered.length} creator{filtered.length !== 1 ? 's' : ''} found</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {filtered.map((cr, i) => (
            <div key={i} style={{ background: C.surface, borderRadius: 18, border: `1px solid ${C.border}`, padding: 28, display: 'flex', flexDirection: 'column', gap: 16, transition: 'box-shadow 0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(57,119,84,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{cr.avatar}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: C.text, margin: 0 }}>{cr.name}</h3>
                    {cr.verified && <CheckCircle size={14} color={C.primary} />}
                  </div>
                  <p style={{ fontSize: 13, color: C.textMuted, margin: 0 }}><MapPin size={11} style={{ verticalAlign: 'middle', marginRight: 2 }} />{cr.city} · {cr.niche}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end' }}>
                    <Star size={12} color="#F59E0B" fill="#F59E0B" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{cr.rating}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ background: C.bg, borderRadius: 10, padding: '10px 14px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'center' }}>
                    <Users size={13} color={C.primary} />
                    <span style={{ fontSize: 16, fontWeight: 800, color: C.primary }}>{cr.followers}</span>
                  </div>
                  <span style={{ fontSize: 11, color: C.textMuted }}>Followers</span>
                </div>
                <div style={{ background: C.bg, borderRadius: 10, padding: '10px 14px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'center' }}>
                    <TrendingUp size={13} color={C.secondary} />
                    <span style={{ fontSize: 16, fontWeight: 800, color: C.secondary }}>{cr.engagement}</span>
                  </div>
                  <span style={{ fontSize: 11, color: C.textMuted }}>Engagement</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {cr.tags.map(t => (
                  <span key={t} style={{ padding: '3px 10px', borderRadius: 100, background: 'rgba(57,119,84,0.08)', color: C.primary, fontSize: 11, fontWeight: 600 }}>{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${C.border}`, paddingTop: 14, marginTop: 'auto' }}>
                <span style={{ fontSize: 15, fontWeight: 800, color: C.text }}>{cr.price}</span>
                <Link href="/signup?role=shop" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: C.primary, color: '#fff', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                  Connect <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 24px' }}>
            <p style={{ fontSize: 20, fontWeight: 700, color: C.textMuted }}>No creators found</p>
            <p style={{ color: C.textMuted, marginTop: 8 }}>Try adjusting your filters or search term.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section style={{ background: '#1B2A22', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>Are you a creator? Join for free.</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 32 }}>Showcase your profile, get AI-matched with local brands, and monetize your audience — zero commission.</p>
          <Link href="/signup?role=influencer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: C.secondary, color: '#fff', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
            Join as Creator <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}