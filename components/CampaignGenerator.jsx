"use client";
import { useState, useEffect } from "react";
import { 
  Sparkles, MapPin, Building2, Target, Wallet, Loader2, 
  Video, MessageSquare, Hash, User, TrendingUp, X 
} from "lucide-react";

// Parses the AI output text into structured sections
function parseResult(text) {
  const sections = [
    { key: "reel", label: "Reel Idea", regex: /🎥\s*\*?\*?Reel Idea:\*?\*?\s*([\s\S]*?)(?=✍️|🔥|👤|$)/i },
    { key: "caption", label: "Caption", regex: /✍️\s*\*?\*?Caption:\*?\*?\s*([\s\S]*?)(?=🎥|🔥|👤|$)/i },
    { key: "hashtags", label: "Hashtags", regex: /🔥\s*\*?\*?Hashtags:\*?\*?\s*([\s\S]*?)(?=🎥|✍️|👤|$)/i },
    { key: "influencer", label: "Influencer Type", regex: /👤\s*\*?\*?Influencer Type:\*?\*?\s*([\s\S]*?)(?=🎥|✍️|🔥|\*\*Budget|$)/i },
    { key: "budget", label: "Budget Breakdown", regex: /\*?\*?Budget Breakdown:\*?\*?\s*([\s\S]*?)$/i },
  ];

  const parsed = {};
  sections.forEach(({ key, regex }) => {
    const match = text.match(regex);
    parsed[key] = match ? match[1].replace(/\*\*/g, "").trim() : null;
  });
  return parsed;
}

const sectionConfig = [
  { key: "reel", label: "Reel Idea", icon: Video, accent: "#4ade80" },
  { key: "caption", label: "Caption", icon: MessageSquare, accent: "#34d399" },
  { key: "hashtags", label: "Hashtags", icon: Hash, accent: "#6ee7b7" },
  { key: "influencer", label: "Influencer Type", icon: User, accent: "#a7f3d0" },
  { key: "budget", label: "Budget Breakdown", icon: TrendingUp, accent: "#d1fae5" },
];

export default function CampaignGenerator() {
  const [form, setForm] = useState({ businessType: "", location: "", goal: "", budget: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  const handleGenerate = async () => {
    if (!form.businessType || !form.location) return alert("Please fill in basic details!");
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/generate-campaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult(data.data || "Something went wrong. Please try again.");
      setShowModal(true); // Open popup when result arrives
    } catch {
      setResult("Failed to connect to the server.");
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const parsed = result ? parseResult(result) : null;

  return (
    <div style={{ fontFamily: "'display', 'DM Sans', sans-serif" }} className="max-w-2xl   mx-auto mt-12 mb-16 px-4">
      
      {/* Main Input Card */}
      <div style={{
        background: "linear-gradient(145deg, #0d2818 0%, #0a1f14 60%, #081a10 100%)",
        border: "1px solid rgba(74,222,128,0.15)",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(74,222,128,0.1)"
      }}>
        <div style={{ height: "3px", background: "linear-gradient(90deg, #4ade80, #16a34a, transparent)" }} />
        
        <div style={{ padding: "40px 36px" }}>
          <div style={{ marginBottom: "32px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)",
              borderRadius: "100px", padding: "6px 14px", marginBottom: "16px"
            }}>
              <Sparkles style={{ width: 14, height: 14, color: "#4ade80" }} />
              <span style={{ color: "#4ade80", fontSize: "12px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                AI-Powered
              </span>
            </div>
            <h2 style={{ color: "#f0fdf4", fontSize: "28px", fontWeight: 800, margin: 0, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Campaign Planner
            </h2>
            <p style={{ color: "#6b7280", fontSize: "14px", marginTop: "8px" }}>
              Hyperlocal influencer strategies tailored for your business.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ position: "relative" }}>
              <Building2 style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, color: "#4ade80", opacity: 0.7 }} />
              <input
                placeholder="Business Type (e.g. Organic Cafe, Gym)"
                className="custom-input"
                onChange={(e) => setForm({ ...form, businessType: e.target.value })}
              />
            </div>

            <div style={{ position: "relative" }}>
              <MapPin style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, color: "#4ade80", opacity: 0.7 }} />
              <input
                placeholder="Location (e.g. Indiranagar, Bangalore)"
                className="custom-input"
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={{ position: "relative" }}>
                <Target style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, color: "#4ade80", opacity: 0.7, pointerEvents: "none" }} />
                <select className="custom-select" onChange={(e) => setForm({ ...form, goal: e.target.value })}>
                  <option value="">Select Goal</option>
                  <option value="footfall">Increase Footfall</option>
                  <option value="awareness">Brand Awareness</option>
                  <option value="sales">Direct Sales Boost</option>
                </select>
              </div>

              <div style={{ position: "relative" }}>
                <Wallet style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, color: "#4ade80", opacity: 0.7, pointerEvents: "none" }} />
                <select className="custom-select" onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                  <option value="">Monthly Budget</option>
                  <option value="1k">₹1,000 – ₹5,000</option>
                  <option value="5k">₹5,000 – ₹15,000</option>
                  <option value="15k">₹15,000+</option>
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            style={{
              marginTop: "24px", width: "100%", display: "flex", alignItems: "center",
              justifyContent: "center", gap: "10px",
              background: loading ? "rgba(255,255,255,0.06)" : "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",
              border: "none", borderRadius: "12px", padding: "16px",
              color: loading ? "#6b7280" : "#052e16", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.2s", boxShadow: loading ? "none" : "0 4px 24px rgba(74,222,128,0.25)"
            }}
          >
            {loading ? (
              <><Loader2 className="animate-spin" style={{ width: 18, height: 18 }} /><span>Generating...</span></>
            ) : (
              <><Sparkles style={{ width: 18, height: 18 }} /><span>Generate Strategy</span></>
            )}
          </button>
        </div>
      </div>

      {/* MODAL / POPUP SECTION */}
      {showModal && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center",
          padding: "20px", backdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.6)"
        }}>
          {/* Modal Content */}
          <div style={{
            background: "#081a10",
            width: "100%", maxWidth: "600px",
            maxHeight: "85vh",
            borderRadius: "24px",
            border: "1px solid rgba(74,222,128,0.2)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 0 50px rgba(0,0,0,0.8)",
            font:'bodoni',
          }}>
            
            {/* Modal Header */}
            <div style={{
              padding: "20px 24px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              display: "flex", alignItems: "center", justifyContent: "space-between"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ background: "#4ade80", padding: "6px", borderRadius: "8px" }}>
                  <TrendingUp style={{ width: 18, height: 18, color: "#052e16" }} />
                </div>
                <h3 style={{ color: "#f0fdf4", margin: 0, fontSize: "18px", fontWeight: 700 }}>Your Custom Strategy</h3>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                style={{ 
                  background: "rgba(255,255,255,0.05)", border: "none", borderRadius: "50%",
                  padding: "8px", cursor: "pointer", color: "#6b7280", display: "flex"
                }}
              >
                <X style={{ width: 20, height: 20 }} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div style={{ 
              padding: "24px", overflowY: "auto", flex: 1,
              scrollbarWidth: "thin", scrollbarColor: "#16a34a #081a10"
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {parsed && sectionConfig.map(({ key, label, icon: Icon, accent }) => {
                  const content = parsed[key];
                  if (!content) return null;
                  return (
                    <div key={key} style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderLeft: `3px solid ${accent}`,
                      borderRadius: "12px",
                      padding: "16px 18px",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <Icon style={{ width: 14, height: 14, color: accent }} />
                        <span style={{ color: accent, fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                          {label}
                        </span>
                      </div>
                      <p style={{ color: "#d1fae5", fontSize: "14px", lineHeight: "1.7", margin: 0, whiteSpace: "pre-wrap" }}>
                        {content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
              <button 
                onClick={() => setShowModal(false)}
                style={{
                  background: "transparent", color: "#4ade80", border: "1px solid rgba(74,222,128,0.3)",
                  padding: "10px 24px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, cursor: "pointer"
                }}
              >
                Close Strategy
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalAppear {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
        
        .custom-input {
          width: 100%; box-sizing: border-box;
          padding-left: 44px; padding-right: 16px; padding-top: 14px; padding-bottom: 14px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; color: #f0fdf4; fontSize: 14px; outline: none;
          transition: border-color 0.2s;
        }
        .custom-input:focus { border-color: rgba(74,222,128,0.4); }
        .custom-input::placeholder { color: #4b5563; }

        .custom-select {
          width: 100%; padding-left: 44px; padding-right: 16px; padding-top: 14px; padding-bottom: 14px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; color: #f0fdf4; font-size: 14px; outline: none; 
          appearance: none; cursor: pointer;
        }
        select option { background: #0d2818; color: #f0fdf4; }
      `}</style>
    </div>
  );
}