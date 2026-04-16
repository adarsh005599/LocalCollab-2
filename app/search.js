"use client";
import { useEffect, useState } from "react";
import { 
  Search, MapPin, Loader2, Sparkles, User, 
  BarChart3, Globe, X, ExternalLink 
} from "lucide-react";

const placeholders = ["Yoga trainers...", "Food bloggers...", "Tech reviewers...", "Local artists..."];

export default function CreatorSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [creators, setCreators] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setPlaceholderIndex(p => (p + 1) % placeholders.length), 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery || !searchCity) return alert("Please fill in both fields!");
    
    setLoading(true);
    try {
      const res = await fetch("/api/find-creators", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchQuery, location: searchCity }),
      });
      const data = await res.json();
      
      if (data.success && data.creators.length > 0) {
        setCreators(data.creators);
        setShowModal(true);
      } else {
        alert("Could not fetch creators right now. Please try again.");
      }
    } catch (err) {
      console.error("Search Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper -mb-96">
      {/* Search Header */}
      <div className="search-section">
        <form className="search-bar" onSubmit={handleSearch}>
          <div className="input-group">
            <Search size={18} color="#94a3b8" />
            <input 
              type="text" 
              placeholder={placeholders[placeholderIndex]} 
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)} 
            />
          </div>
          <div className="divider" />
          <div className="input-group">
            <MapPin size={18} color="#94a3b8" />
            <input 
              type="text" 
              placeholder="City (e.g. Bangalore)" 
              value={searchCity} 
              onChange={e => setSearchCity(e.target.value)} 
            />
          </div>
          <button type="submit" className="search-btn" disabled={loading}>
            {loading ? <Loader2 size={18} className="spin" /> : "Search Creators"}
          </button>
        </form>
      </div>

      {/* Results Popup Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div className="title-area">
                <div className="icon-badge"><Sparkles size={16} /></div>
                <div>
                  <h3>Real-Time Discovery</h3>
                  <p>{searchQuery} creators in {searchCity}</p>
                </div>
              </div>
              <X className="close-icon" onClick={() => setShowModal(false)} />
            </div>

            <div className="modal-scroll">
              {creators.map((c, i) => {
                // Logic to build clickable link
                const cleanHandle = c.handle.replace('@', '');
                const profileUrl = c.platform?.toLowerCase().includes('youtube') 
                  ? `https://youtube.com/@${cleanHandle}` 
                  : `https://instagram.com/${cleanHandle}`;

                return (
                  <div key={i} className="creator-item">
                    <div className="item-header">
                      <div className="avatar-box"><User size={20} /></div>
                      <div className="name-box">
                        <h4>{c.name}</h4>
                        <span>{c.handle} • {c.platform}</span>
                      </div>
                      <a 
                        href={profileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="link-wrapper"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    
                    <div className="stats-row">
                      <div className="stat"><Globe size={12} /> {c.followers}</div>
                      <div className="stat"><BarChart3 size={12} /> {c.engagement} Eng.</div>
                    </div>

                    <p className="bio-text">{c.bio}</p>
                  </div>
                );
              })}
            </div>

            <div className="modal-footer">
              <button onClick={() => setShowModal(false)}>Back to Search</button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .page-wrapper { min-height: 100vh; padding: 60px 20px; background: transparent; font-family: sans-serif; }
        
        .search-bar { 
          background: white; border-radius: 100px; padding: 10px 10px 10px 24px;
          display: flex; align-items: center; gap: 15px; box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          max-width: 850px; margin: 0 auto; border: 1px solid #f1f5f9;
        }
        .input-group { display: flex; align-items: center; gap: 12px; flex: 1; }
        .input-group input { border: none; outline: none; width: 100%; font-size: 15px; color: #1e293b; background: transparent; }
        .divider { width: 1px; height: 30px; background: #f1f5f9; }
        .search-btn { background: #16a34a; color: white; border: none; padding: 14px 34px; border-radius: 100px; font-weight: 700; cursor: pointer; transition: 0.2s; }
        .search-btn:hover { background: #15803d; transform: scale(1.02); }

        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 20px; }
        .modal-content { background: #081a10; width: 100%; max-width: 500px; border-radius: 28px; border: 1px solid rgba(74,222,128,0.2); color: white; display: flex; flex-direction: column; max-height: 85vh; overflow: hidden; box-shadow: 0 40px 100px rgba(0,0,0,0.6); }
        
        .modal-header { padding: 24px; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center; }
        .icon-badge { background: #4ade80; color: #052e16; padding: 8px; border-radius: 10px; }
        .modal-header h3 { margin: 0; font-size: 18px; }
        .modal-header p { margin: 4px 0 0; font-size: 12px; color: #4ade80; font-weight: 600; text-transform: uppercase; }
        .close-icon { cursor: pointer; color: #64748b; }

        .modal-scroll { padding: 20px; overflow-y: auto; flex: 1; display: flex; flex-direction: column; gap: 16px; }
        .creator-item { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 20px; border-radius: 20px; transition: 0.2s; }
        .creator-item:hover { border-color: #4ade8088; background: rgba(255,255,255,0.05); }

        .item-header { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
        .avatar-box { background: rgba(74,222,128,0.1); padding: 10px; border-radius: 50%; color: #4ade80; border: 1px solid rgba(74,222,128,0.2); }
        .name-box h4 { margin: 0; color: #f0fdf4; }
        .name-box span { font-size: 12px; color: #94a3b8; }
        
        .link-wrapper { 
          margin-left: auto; 
          color: #4ade80; 
          padding: 8px; 
          background: rgba(74,222,128,0.1); 
          border-radius: 8px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          transition: 0.2s;
        }
        .link-wrapper:hover { background: rgba(74,222,128,0.2); transform: translateY(-2px); }

        .stats-row { display: flex; gap: 10px; margin-bottom: 12px; }
        .stat { background: #000; padding: 5px 12px; border-radius: 6px; font-size: 11px; font-weight: 700; color: #4ade80; border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; gap: 5px; }
        .bio-text { font-size: 13px; line-height: 1.5; color: #94a3b8; margin: 0; }

        .modal-footer { padding: 20px; border-top: 1px solid rgba(255,255,255,0.08); text-align: center; }
        .modal-footer button { background: transparent; color: #4ade80; border: 1px solid rgba(74,222,128,0.3); padding: 10px 24px; border-radius: 12px; font-weight: 600; cursor: pointer; }

        .spin { animation: rotate 1s linear infinite; }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        @media (max-width: 600px) {
          .search-bar { flex-direction: column; border-radius: 24px; padding: 16px; gap: 12px; }
          .divider { display: none; }
          .search-btn { width: 100%; }
        }
      ` }} />
    </div>
  );
}