"use client";
import { useState, useEffect } from "react";
import { X, Sparkles, MessageCircle } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes chat-in {
          0% { opacity: 0; transform: translateY(16px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes chat-out {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(16px) scale(0.96); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .chat-open {
          animation: chat-in 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        .chat-close {
          animation: chat-out 0.25s ease-in forwards;
        }
        .shimmer-btn {
          background: linear-gradient(
            110deg,
            #1a4a2e 0%,
            #2d7a4f 30%,
            #4ade80 50%,
            #2d7a4f 70%,
            #1a4a2e 100%
          );
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .glass-header {
          background: linear-gradient(135deg, rgba(45,122,79,0.95) 0%, rgba(20,60,35,0.98) 100%);
          backdrop-filter: blur(20px);
        }
      `}</style>

      {/* ── FLOATING BUTTON ── */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">

        {/* Tooltip label — shows before first open */}
        {!open && pulse && (
          <div style={{
            background: 'linear-gradient(135deg, #1a4a2e, #2d7a4f)',
            color: '#fff',
            fontSize: 13,
            fontWeight: 600,
            padding: '8px 14px',
            borderRadius: 100,
            whiteSpace: 'nowrap',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            animation: 'chat-in 0.4s ease forwards',
            letterSpacing: '0.01em',
          }}>
            💬 Chat with Colab AI
          </div>
        )}

        {/* Pulse ring */}
        {!open && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'rgba(74,222,128,0.35)',
            animation: 'ping-slow 2s ease-out infinite',
            pointerEvents: 'none',
          }} />
        )}

        <button
          onClick={() => setOpen(!open)}
          className="shimmer-btn"
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            border: '1.5px solid rgba(74,222,128,0.4)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(45,122,79,0.5), 0 2px 8px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            zIndex: 1,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(45,122,79,0.65), 0 2px 8px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(45,122,79,0.5), 0 2px 8px rgba(0,0,0,0.3)';
          }}
        >
          {open
            ? <X size={22} strokeWidth={2.5} />
            : <MessageCircle size={22} strokeWidth={2} fill="rgba(255,255,255,0.15)" />
          }
        </button>
      </div>

      {/* ── CHAT WINDOW ── */}
      {open && (
        <div
          className="chat-open fixed z-[9998]"
          style={{
            // Desktop: bottom-right panel
            bottom: 88,
            right: 24,
            width: 'min(420px, calc(100vw - 32px))',
            height: 'min(580px, calc(100vh - 120px))',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
            border: '1px solid rgba(74,222,128,0.18)',
            display: 'flex',
            flexDirection: 'column',
            background: '#0a1510',
          }}
        >
          {/* Header */}
          <div className="glass-header" style={{
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderBottom: '1px solid rgba(74,222,128,0.12)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* Avatar */}
              <div style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4ade80, #16a34a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(74,222,128,0.4)',
                flexShrink: 0,
              }}>
                <Sparkles size={16} color="#fff" strokeWidth={2} />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>
                  Colab AI
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#4ade80',
                    boxShadow: '0 0 6px #4ade80',
                  }} />
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11, fontWeight: 500 }}>
                    Online · LocalCollab Assistant
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              <X size={15} strokeWidth={2.5} />
            </button>
          </div>

          {/* iframe */}
          <iframe
            src="https://local-collab-ai.vercel.app"
            style={{
              flex: 1,
              width: '100%',
              border: 'none',
              background: '#0a1510',
            }}
          />

          {/* Footer branding */}
          <div style={{
            padding: '8px 16px',
            background: 'rgba(0,0,0,0.4)',
            borderTop: '1px solid rgba(74,222,128,0.08)',
            textAlign: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
              POWERED BY · LOCALCOLLAB AI
            </span>
          </div>
        </div>
      )}

      {/* Mobile full-screen override */}
      <style>{`
        @media (max-width: 480px) {
          .chat-open {
            bottom: 0 !important;
            right: 0 !important;
            width: 100vw !important;
            height: 100dvh !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </>
  );
}