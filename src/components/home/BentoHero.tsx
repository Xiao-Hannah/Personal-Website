import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Github,
  Check,
  Sun,
  Moon,
  Quote,
  MapPin,
  Globe,
} from "lucide-react";
import profileImage from "@/assets/images/profile/profile3.png";
import resume from "@/assets/files/resume.pdf";
import resumeImage from "@/assets/images/resume3.png";
import { useNavigate } from "react-router-dom";
import tmobileVideo from "@/assets/videos/tmed2.mp4";
import atypicaVideo from "@/assets/videos/atypica_0524.mp4";
import solareaseCoverVideo from "@/assets/videos/solarease4.mp4";
import foraCover from "../../assets/images/fora/fora.webp";
import bloomeVideo from "@/assets/videos/bloome.mov";
import fridgeFriendCover from "@/assets/images/fridgeFriend/avo3.jpg";
import nmImage from "@/assets/images/newmexico.jpg";
import Aurora from "@/components/Aurora";
import zebraNewCoverVideo from "@/assets/videos/zebra_new_cover.mp4";
import BentoExpand from "./BentoExpand";
import IntroModalBody from "./IntroModalBody";
import { useSpotlight } from "./SpotlightContext";
import { useTheme } from "@/hooks/useTheme";
import "./BentoHero.less";

interface BentoHeroProps {
  onScrollToWork?: () => void;
  onScrollToAbout?: () => void;
  onScrollToContact?: () => void;
}

const STATS = {
  linkedin: { headline: "Product Manager · Seattle, WA", connections: "1k+" },
  github:   { repos: 18, stars: 42, lastPush: "2 days ago" },
  instagram:{ handle: "@hanx0628", posts: 15 },
  nowReading: {
    title: "A Woman's Story",
    author: "Annie Ernaux",
    year: 1987,
    pages: 96,
    progress: 35,
    chapter: "Chapter 3",
  },
  nowPlaying: {
    title: "六號咖啡館",
    album: "規定情境",
    artist: "Young",
    spotifyId: "18c2nsUPffvsYcRI7bnaOq",
    spotifyUrl: "https://open.spotify.com/track/18c2nsUPffvsYcRI7bnaOq",
  },
  coffees: 2,
};

// Deterministic GitHub contribution data (7 rows × 14 cols)
const CONTRIB = Array.from({ length: 7 * 14 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const r = seed / 233280;
  if (r < 0.35) return 0;
  if (r < 0.6) return 1;
  if (r < 0.82) return 2;
  if (r < 0.95) return 3;
  return 4;
});

// ─── Product principles (merged in from BentoAbout) ─────────────────────────
const PRINCIPLE_CONTROL_PARAGRAPHS: ReactNode[] = [
  <>
    Most of the products I'm drawn to solve{" "}
    <span className="accent accent--amber">moments of uncertainty</span> — when
    users are overwhelmed by information and unsure what to do next.
  </>,
  <>
    Great products don't remove complexity entirely, but they make complexity{" "}
    <span className="accent accent--amber">understandable</span>. They break a
    difficult problem into something people can navigate with confidence.
  </>,
  <>
    I'm interested in products that help people move from{" "}
    <span className="accent accent--amber">confusion to clarity</span>. To me,
    product management is about seeking what truly matters to users and building
    tools that make the next step feel obvious and achievable.
  </>,
];

const PRINCIPLE_AI_PARAGRAPHS: ReactNode[] = [
  <>
    I'm most interested in AI products that help people work through complicated
    problems and arrive at{" "}
    <span className="accent accent--indigo">better decisions</span>.
  </>,
  <>
    The goal isn't for AI to replace human thinking, but to make it easier for
    people to understand a situation and{" "}
    <span className="accent accent--indigo">decide what to do next</span>.
  </>,
  <>
    When AI is designed well, it feels less like an answer machine and more like
    a <span className="accent accent--indigo">useful partner</span> — helping
    people move faster and with more confidence, while keeping them in control
    of the final decision.
  </>,
];

type PrincipleKey = "control" | "ai";

const BentoHero = ({}: BentoHeroProps) => {
  const navigate = useNavigate();
  const [time, setTime] = useState(() => new Date());
  const [copied, setCopied] = useState(false);
  const [contactCopied, setContactCopied] = useState(false);
  const [introOpen, setIntroOpen] = useState(false);
  const [bulbPulse, setBulbPulse] = useState(false);
  const [principleOpen, setPrincipleOpen] = useState<PrincipleKey | null>(null);
  const { isDark, toggle } = useTheme();
  const { spotlight, clearSpotlight } = useSpotlight();
  const gridRef = useRef<HTMLDivElement>(null);
  const lastPositions = useRef<Map<Element, { top: number; left: number }>>(new Map());
  const firstSpotlightRun = useRef(true);

  const handleThemeToggle = () => {
    setBulbPulse(true);
    window.setTimeout(() => setBulbPulse(false), 700);
    toggle();
  };

  useEffect(() => {
    const id = window.setInterval(() => setTime(new Date()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  // Press Escape to dismiss an active spotlight.
  useEffect(() => {
    if (!spotlight) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") clearSpotlight();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [spotlight, clearSpotlight]);

  // ─── FLIP animation: smoothly translate tiles between layouts whenever
  // the spotlight changes (or is cleared). We capture each tile's previous
  // position relative to the grid container (so scroll & smooth-scroll
  // animations don't leak into the delta), then on the next layout play
  // an inverse-translate → 0 anim via the Web Animations API so tiles
  // glide to their new grid cell.
  //
  // NOTE: project cards use `.hero-experience` (without `.bento-tile`), so we
  // must match both classes — otherwise Experience / Projects spotlights
  // would reposition the project tiles without any animation.
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const tiles = Array.from(
      grid.querySelectorAll<HTMLElement>(":scope > .bento-tile, :scope > .hero-experience, :scope > .hero-outside-office")
    );
    const gridRect = grid.getBoundingClientRect();
    const next = new Map<Element, { top: number; left: number }>();
    tiles.forEach((t) => {
      const r = t.getBoundingClientRect();
      next.set(t, { top: r.top - gridRect.top, left: r.left - gridRect.left });
    });

    if (!firstSpotlightRun.current) {
      tiles.forEach((tile) => {
        const oldPos = lastPositions.current.get(tile);
        const newPos = next.get(tile);
        if (!oldPos || !newPos) return;
        const dx = oldPos.left - newPos.left;
        const dy = oldPos.top - newPos.top;
        if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
        tile.animate(
          [
            { transform: `translate(${dx}px, ${dy}px)` },
            { transform: "translate(0, 0)" },
          ],
          {
            duration: 550,
            easing: "cubic-bezier(0.32, 0.72, 0, 1)",
          }
        );
      });
    } else {
      firstSpotlightRun.current = false;
    }

    lastPositions.current = next;
  }, [spotlight]);

  const seattleHour = Number(
    time.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: "numeric",
      hour12: false,
    })
  );
  const isAwake = seattleHour >= 7 && seattleHour < 23;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hannahx2313@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const copyContactEmail = async () => {
    try {
      await navigator.clipboard.writeText("hx2313@uw.edu");
      setContactCopied(true);
      window.setTimeout(() => setContactCopied(false), 1800);
    } catch { /* no-op */ }
  };


  return (
    <section
      className={`bento-section bento-section--hero bento-hero ${
        spotlight ? "is-spotlit" : ""
      }`}
      data-spotlight={spotlight ?? undefined}
      aria-label="Hannah Xiao — intro"
    >
      <div className="bento-section__grid" ref={gridRef}>
        {/* ═════════════════════════════════════════════════════════════════
              ROW 1 — Self Introduction · Atypica AI
            ═════════════════════════════════════════════════════════════════ */}

        {/* ───────────── Self Introduction (large, clickable) ───────────── */}
        <article
          className="bento-tile tile-paper hero-intro is-clickable"
          role="button"
          tabIndex={0}
          onClick={() => setIntroOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setIntroOpen(true)}
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          <div className="hero-intro__photo-wrap">
            <img
              src={profileImage}
              alt="Hannah Xiao"
              className="hero-intro__photo"
            />
            <span
              className={`hero-intro__status ${
                isAwake ? "is-awake" : "is-asleep"
              }`}
              aria-hidden
            />
          </div>
          <div className="hero-intro__text">
            <p className="hero-intro__greeting">
              Hi! <span className="hero-intro__wave" aria-hidden>👋</span>
            </p>
            <p className="hero-intro__lede">
              I'm <strong>Hannah Xiao</strong>, recently a Growth Product Manager Intern <span className="hero-intro__at">@ atypica.AI</span>.
            </p>
            <div className="hero-intro__actions">
              <span
                role="button"
                tabIndex={0}
                className={`hero-intro__email ${copied ? "is-copied" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  copyEmail();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                    e.preventDefault();
                    copyEmail();
                  }
                }}
                aria-label="Copy email address"
              >
                {copied ? <Check size={12} /> : (
                  <svg width="26" height="20" viewBox="52 42 88 66" aria-hidden>
                    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
                    <path fill="#34a853" d="M116 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
                    <path fill="#fbbc04" d="M116 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
                    <path fill="#ea4335" d="M72 74V48l22 16.5L116 48v26L94 90.5" />
                    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
                  </svg>
                )}
                <span>{copied ? "Copied!" : "hannahx2313@gmail.com"}</span>
              </span>
              <a
                href="https://www.linkedin.com/in/hannah-x/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-intro__linkedin"
                onClick={(e) => e.stopPropagation()}
                aria-label="LinkedIn profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <span className="hero-intro__cta" aria-hidden>
            Read more <ArrowUpRight size={14} />
          </span>
        </article>

        {/* ───────────── Résumé ───────────── */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="bento-tile tile-paper hero-resume"
          style={{ "--delay": "60ms" } as React.CSSProperties}
          aria-label="View résumé"
        >
          <span className="hero-resume__emoji" aria-hidden>📑</span>
          <span className="hero-resume__label">Résumé</span>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </a>

        {/* ───────────── Atypica AI — featured experience ───────────── */}
        <div
          className="card c-atypica hero-experience hero-experience--atypica"
          role="button"
          tabIndex={0}
          onClick={() => navigate('/atypica')}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/atypica')}
          style={{
            borderRadius: '14px',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: 0,
            gap: 0,
            opacity: 0,
            animation: 'bentoIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 180ms forwards',
            cursor: 'pointer',
          } as React.CSSProperties}
        >
          <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
            <video
              src={atypicaVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{
            background: '#ffffff',
            padding: '12px 16px',
            flexShrink: 0,
          }}>
            <div style={{
              fontSize: 9, color: '#aaa',
              letterSpacing: '0.07em', textTransform: 'uppercase',
              marginBottom: 4,
            }}>2025 · Growth Strategy</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: '#1a1a18' }}>Atypica AI</div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
              ROW 2 — Quote · Theme
            ═════════════════════════════════════════════════════════════════ */}

        {/* ───────────── Principle · Control ───────────── */}
        <article
          className="bento-tile tile-paper hero-principle hero-principle--featured is-clickable"
          role="button"
          tabIndex={0}
          onClick={() => setPrincipleOpen("control")}
          onKeyDown={(e) =>
            e.key === "Enter" && setPrincipleOpen("control")
          }
          style={{ "--delay": "240ms" } as React.CSSProperties}
        >
          <Quote className="hero-principle__mark" size={20} aria-hidden />
          <p className="hero-principle__quote">
            Great products give people a <span className="hero-principle__solid hero-principle__solid--amber">sense of control</span>.
          </p>
          <p className="eyebrow hero-principle__eyebrow">
            my product principle
          </p>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </article>

        {/* ───────────── Theme toggle — light switch ───────────── */}
        <button
          type="button"
          className={`bento-tile hero-theme is-clickable ${
            isDark ? "is-dark-mode" : "is-light-mode"
          } ${bulbPulse ? "is-pulsing" : ""}`}
          onClick={handleThemeToggle}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          aria-pressed={isDark}
          style={{ "--delay": "300ms" } as React.CSSProperties}
        >
          <div className="hero-theme__top">
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
            <span className="hero-theme__mode">
              {isDark ? "Dark mode" : "Light mode"}
            </span>
          </div>
          <div className="hero-theme__bulb" aria-hidden>
            <span className="hero-theme__bulb-glow" />
            <span className="hero-theme__bulb-glass">
              <span className="hero-theme__bulb-filament" />
            </span>
            <span className="hero-theme__bulb-cap" />
            <span className="hero-theme__bulb-cord" />
          </div>
          <div className="hero-theme__switch" aria-hidden>
            <span className="hero-theme__switch-track">
              <span className="hero-theme__switch-icons">
                <Sun size={11} />
                <Moon size={11} />
              </span>
              <span className="hero-theme__switch-thumb" />
            </span>
          </div>
        </button>

        {/* ═════════════════════════════════════════════════════════════════
              ROW 3 — Zebra · T-Mobile
            ═════════════════════════════════════════════════════════════════ */}

        {/* ───────────── Zebra Workcloud ───────────── */}
        <div
          className="card c-zebra hero-experience hero-experience--zebra"
          role="button"
          tabIndex={0}
          onClick={() => navigate('/zebra')}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/zebra')}
          style={{
            borderRadius: '14px',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: 0,
            gap: 0,
            opacity: 0,
            animation: 'bentoIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 360ms forwards',
            cursor: 'pointer',
          } as React.CSSProperties}
        >
          <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
            <video
              src={zebraNewCoverVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{
            background: '#ffffff',
            padding: '12px 16px',
            flexShrink: 0,
          }}>
            <div style={{
              fontSize: 9, color: '#aaa',
              letterSpacing: '0.07em', textTransform: 'uppercase',
              marginBottom: 4,
            }}>2025 · Auth × NFC × Biometrics</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: '#1a1a18' }}>Zebra Workcloud</div>
          </div>
        </div>

        {/* ───────────── T-Mobile CareLink ───────────── */}
        <div
          className="card c-tmobile hero-experience hero-experience--tmobile"
          role="button"
          tabIndex={0}
          onClick={() => navigate('/tlink')}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/tlink')}
          style={{
            borderRadius: '14px',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: 0,
            gap: 0,
            opacity: 0,
            animation: 'bentoIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 420ms forwards',
            cursor: 'pointer',
          } as React.CSSProperties}
        >
          <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
            <video
              src={tmobileVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{
            background: '#ffffff',
            padding: '12px 16px',
            flexShrink: 0,
          }}>
            <div style={{
              fontSize: 9, color: '#aaa',
              letterSpacing: '0.07em', textTransform: 'uppercase',
              marginBottom: 4,
            }}>2024 · PM × Hardware × 5G</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: '#1a1a18' }}>T-Mobile CareLink</div>
          </div>
        </div>

        {/* ───────────── SolarEase ───────────── */}
        <div
          className="card c-solarease hero-experience hero-experience--solarease"
          role="button"
          tabIndex={0}
          onClick={() => navigate('/solarease')}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/solarease')}
          style={{
            borderRadius: '14px',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: 0,
            gap: 0,
            opacity: 0,
            animation: 'bentoIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 440ms forwards',
            cursor: 'pointer',
          } as React.CSSProperties}
        >
          <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
            <video
              src={solareaseCoverVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{
            background: '#ffffff',
            padding: '12px 16px',
            flexShrink: 0,
          }}>
            <div style={{
              fontSize: 9, color: '#aaa',
              letterSpacing: '0.07em', textTransform: 'uppercase',
              marginBottom: 4,
            }}>2024 · Solar × IoT × Mobile</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: '#1a1a18' }}>SolarEase</div>
          </div>
        </div>

        {/* ───────────── Fora Tools ───────────── */}
        <div
          className="card c-fora hero-experience hero-experience--fora"
          role="button"
          tabIndex={0}
          onClick={() => navigate('/fora')}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/fora')}
          style={{
            borderRadius: '14px',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: 0,
            gap: 0,
            opacity: 0,
            animation: 'bentoIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 480ms forwards',
            cursor: 'pointer',
          } as React.CSSProperties}
        >
          <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
            <img
              src={foraCover}
              alt="Fora Tools"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{
            background: '#ffffff',
            padding: '12px 16px',
            flexShrink: 0,
          }}>
            <div style={{
              fontSize: 9, color: '#aaa',
              letterSpacing: '0.07em', textTransform: 'uppercase',
              marginBottom: 4,
            }}>2026 · Onboarding Strategy</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: '#1a1a18' }}>Fora Tools</div>
          </div>
        </div>


        {/* ───────────── Bloomè ───────────── */}
        <div
          className="card c-bloome hero-experience hero-experience--bloome"
          role="button"
          tabIndex={0}
          onClick={() => navigate('/bloome')}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/bloome')}
          style={{
            borderRadius: '14px',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: 0,
            gap: 0,
            opacity: 0,
            animation: 'bentoIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 520ms forwards',
            cursor: 'pointer',
          } as React.CSSProperties}
        >
          <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
            <video
              src={bloomeVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ background: '#ffffff', padding: '12px 16px', flexShrink: 0 }}>
            <div style={{ fontSize: 9, color: '#aaa', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 4 }}>2024 · UX Research & Design</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: '#1a1a18' }}>Bloomè</div>
          </div>
        </div>

        {/* ───────────── Fridge Friend ───────────── */}
        <div
          className="card c-fridgefriend hero-experience hero-experience--fridgefriend"
          role="button"
          tabIndex={0}
          onClick={() => navigate('/fridgefriend')}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/fridgefriend')}
          style={{
            borderRadius: '14px',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: 0,
            gap: 0,
            opacity: 0,
            animation: 'bentoIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 560ms forwards',
            cursor: 'pointer',
          } as React.CSSProperties}
        >
          <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
            <img
              src={fridgeFriendCover}
              alt="Fridge Friend"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '65% center', display: 'block' }}
            />
          </div>
          <div style={{ background: '#ffffff', padding: '12px 16px', flexShrink: 0 }}>
            <div style={{ fontSize: 9, color: '#aaa', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 4 }}>2023 · Product Design</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: '#1a1a18' }}>Fridge Friend</div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
              BELOW FOLD — GitHub · Photos · …
            ═════════════════════════════════════════════════════════════════ */}

        {/* ───────────── GitHub — contribution grid ───────────── */}
        <a
          href="https://github.com/Xiao-Hannah"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-tile tile-paper hero-github"
          style={{ "--delay": "540ms" } as React.CSSProperties}
        >
          <div className="hero-github__top">
            <Github size={20} />
            <span className="hero-github__handle">Xiao-Hannah</span>
          </div>
          <div className="hero-github__grid" aria-hidden>
            {CONTRIB.map((level, i) => (
              <span
                key={i}
                className={`hero-github__cell level-${level}`}
                style={{ "--i": i } as React.CSSProperties}
              />
            ))}
          </div>
          <div className="hero-github__stats">
            <span>{STATS.github.repos} repos</span>
            <span>★ {STATS.github.stars}</span>
            <span className="dot" />
            <span className="last-push">pushed {STATS.github.lastPush}</span>
          </div>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </a>

        {/* ───────────── Outside the Office ───────────── */}
        <button
          type="button"
          className="hero-outside-office"
          onClick={() => navigate("/for-fun")}
        >
          <div className="hero-outside-office__cover" aria-hidden>
            <img src={nmImage} alt="" />
          </div>
          <div className="hero-outside-office__text">
            <p className="eyebrow">Side quests</p>
            <h3>Outside the Office</h3>
          </div>
          <span className="hero-outside-office__arrow" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </button>

        {/* ───────────── Contact: Where ───────────── */}
        <article className="bento-tile tile-paper hero-contact-where">
          <Globe size={20} className="hero-contact-where__globe" />
          <p className="eyebrow"><MapPin size={11} /> Based in</p>
          <h3>Seattle, WA</h3>
          <p className="hero-contact-where__sub">UTC-8 · Pacific Time</p>
          <p className="hero-contact-where__sub muted">Travel-ready for the right team.</p>
          <div className="hero-contact-where__chips">
            <span className="hero-contact-where__chip">On-site</span>
            <span className="hero-contact-where__chip">Hybrid</span>
            <span className="hero-contact-where__chip">Remote</span>
          </div>
        </article>

        {/* ───────────── Contact: Let's connect ───────────── */}
        <article id="contact" className="bento-tile tile-paper hero-contact-main">
          <div className="hero-contact-main__top">
            <div className="hero-contact-main__status">
              <span className="hero-contact-main__dot" />
              <span>Open to PM roles &amp; collaborations</span>
            </div>
            <h3 className="hero-contact-main__title">Let's build something people love.</h3>
            <p className="hero-contact-main__sub">
              Open to PM opportunities, collaborations, and conversations about product, AI, and growth.
            </p>
          </div>
          <div className="hero-contact-main__mid">
            <a
              href="https://www.linkedin.com/in/hannah-x/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-contact-main__social-pill"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/Xiao-Hannah"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-contact-main__social-pill"
            >
              <Github size={13} />
              GitHub
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-contact-main__social-pill"
            >
              <span aria-hidden>📑</span>
              Résumé
            </a>
            <span className="hero-contact-main__reply">
              ↩ Replies within 48 h
            </span>
          </div>
          <div className="hero-contact-main__actions">
            <a
              href="mailto:hx2313@uw.edu"
              className="hero-contact-main__send"
            >
              <Mail size={12} /> Get in touch
            </a>
            <button type="button" className="hero-contact-main__copy" onClick={copyContactEmail}>
              {contactCopied ? <><Check size={11} /> Copied</> : "or copy email"}
            </button>
          </div>
        </article>

        {/* ───────────── Principle · AI ───────────── */}
        <article
          className="bento-tile tile-paper hero-principle is-clickable"
          role="button"
          tabIndex={0}
          onClick={() => setPrincipleOpen("ai")}
          onKeyDown={(e) =>
            e.key === "Enter" && setPrincipleOpen("ai")
          }
          style={{ "--delay": "900ms" } as React.CSSProperties}
        >
          <Quote className="hero-principle__mark" size={20} aria-hidden />
          <p className="hero-principle__quote">
            AI should make people <span className="hero-principle__solid hero-principle__solid--indigo">feel more capable</span>.
          </p>
          <p className="eyebrow hero-principle__eyebrow">
            my product principle
          </p>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </article>

      </div>

      <BentoExpand
        open={introOpen}
        onClose={() => setIntroOpen(false)}
        body={<IntroModalBody />}
      />
      <BentoExpand
        open={principleOpen === "control"}
        onClose={() => setPrincipleOpen(null)}
        variant="prose"
        label="My product principle"
        title="Great products give people a sense of control."
        paragraphs={PRINCIPLE_CONTROL_PARAGRAPHS}
      />
      <BentoExpand
        open={principleOpen === "ai"}
        onClose={() => setPrincipleOpen(null)}
        variant="prose"
        label="My product principle"
        title="AI should make people feel more capable."
        paragraphs={PRINCIPLE_AI_PARAGRAPHS}
      />
    </section>
  );
};

export default BentoHero;
