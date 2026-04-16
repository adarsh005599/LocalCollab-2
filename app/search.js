"use client";
import { useEffect, useState } from "react";
import { Search, MapPin } from "lucide-react";

const placeholders = [
  "Food influencers...",
  "Fitness creators...",
  "Fashion bloggers...",
  "Local vloggers..."
];

export default function SearchBar({ C, searchQuery, setSearchQuery, searchCity, setSearchCity }) {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="search-wrapper">
        {/* LEFT INPUT */}
        <div className="search-input-group">
          <Search size={18} color={C.textMuted} style={{ flexShrink: 0 }} />
          <input
            type="text"
            placeholder={placeholders[placeholderIndex]}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* DIVIDER - desktop only */}
        <div className="search-divider" />

        {/* LOCATION INPUT */}
        <div className="search-input-group">
          <MapPin size={18} color={C.textMuted} style={{ flexShrink: 0 }} />
          <input
            type="text"
            placeholder="City or area"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="search-input"
          />
        </div>

        {/* BUTTON */}
        <button className="search-btn">
          Search Creators
        </button>
      </div>

      <style>{`
        .search-wrapper {
          background: #ffffff;
          border-radius: 100px;
          padding: 10px 10px 10px 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.12);
          max-width: 860px;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .search-wrapper:hover {
          transform: translateY(-2px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.15);
        }

        .search-wrapper:focus-within {
          box-shadow: 0 0 0 3px rgba(22,163,74,0.2),
                      0 25px 50px -12px rgba(0,0,0,0.12);
        }

        .search-input-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
          min-width: 0;
        }

        .search-input {
          border: none;
          background: transparent;
          outline: none;
          width: 100%;
          font-size: 15px;
          color: #1E293B;
          min-width: 0;
        }

        .search-divider {
          width: 1px;
          height: 28px;
          background: #E2E8F0;
          flex-shrink: 0;
        }

        .search-btn {
          border-radius: 100px;
          padding: 13px 26px;
          font-size: 15px;
          font-weight: 600;
          background: #397754;
          color: #fff;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .search-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(22,163,74,0.3);
        }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .search-wrapper {
            flex-direction: column;
            border-radius: 20px;
            padding: 16px;
            align-items: stretch;
            gap: 12px;
          }

          .search-input-group {
            background: #F8FAFC;
            border-radius: 12px;
            padding: 12px 14px;
          }

          .search-input {
            font-size: 15px;
          }

          .search-divider {
            display: none;
          }

          .search-btn {
            padding: 14px;
            font-size: 15px;
            text-align: center;
            border-radius: 12px;
          }
        }
      `}</style>
    </>
  );
}