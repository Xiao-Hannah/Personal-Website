import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Github,
  Check,
  Sun,
  Moon,
  Quote,
} from "lucide-react";
import profileImage from "@/assets/images/profile/profile3.png";
import resume from "@/assets/files/resume.pdf";
import resumeImage from "@/assets/images/resume3.png";
import { useNavigate } from "react-router-dom";
import tmobileVideo from "@/assets/videos/tmed.mp4";
import atypicaVideo from "@/assets/videos/atypica_0524.mp4";
import solareaseCoverVideo from "@/assets/videos/solarease_cover.mp4";
import Aurora from "@/components/Aurora";
import TrueFocus from "@/components/TrueFocus";
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
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const tiles = Array.from(
      grid.querySelectorAll<HTMLElement>(":scope > .bento-tile")
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
      await navigator.clipboard.writeText("hannax2313@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
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
              I'm <strong>Hannah Xiao</strong>, currently working as a Growth
              Product Manager <span className="hero-intro__at">@atypica.AI</span>.
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
                {copied ? <Check size={12} /> : <Mail size={12} />}
                <span>{copied ? "Copied!" : "hannax2313@gmail.com"}</span>
              </span>
              <span className="hero-intro__cta">
                Read more <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </article>

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
              ROW 2 — LinkedIn · Email · Quote · Theme
            ═════════════════════════════════════════════════════════════════ */}

        {/* ───────────── LinkedIn — icon tile ───────────── */}
        <a
          href="https://www.linkedin.com/in/hannah-x/"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-tile tile-paper hero-linkedin"
          style={{ "--delay": "60ms" } as React.CSSProperties}
          aria-label="LinkedIn profile"
        >
          {/* LinkedIn "in" logotype */}
          <svg width="96" height="74" viewBox="0 0 96 74" aria-hidden>
            <text
              x="2" y="68"
              fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif"
              fontSize="76" fontWeight="800"
              letterSpacing="-2"
              fill="#0A66C2"
            >in</text>
          </svg>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </a>

        {/* ───────────── Email — Gmail icon, copy on click ───────────── */}
        <div
          role="button"
          tabIndex={0}
          className={`bento-tile tile-paper hero-email is-clickable${copied ? " is-copied" : ""}`}
          style={{ "--delay": "120ms" } as React.CSSProperties}
          onClick={copyEmail}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && copyEmail()}
          aria-label="Copy email address"
        >
          {copied ? (
            <svg width="52" height="40" viewBox="0 0 52 40" aria-hidden>
              <text x="26" y="30" textAnchor="middle"
                fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif"
                fontSize="13" fontWeight="600"
                fill="#1c8a4b">Copied!</text>
            </svg>
          ) : (
            /* Gmail M logo */
            <svg width="80" height="60" viewBox="52 42 88 66" aria-hidden>
              <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
              <path fill="#34a853" d="M116 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
              <path fill="#fbbc04" d="M116 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
              <path fill="#ea4335" d="M72 74V48l22 16.5L116 48v26L94 90.5" />
              <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
            </svg>
          )}
        </div>

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
          <div style={{
            flex: 1,
            background: '#faf6ee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 0,
          }}>
            <TrueFocus
              sentence="Touchless Authentication"
              manualMode={false}
              blurAmount={4}
              borderColor="#0A66C2"
              glowColor="rgba(10, 102, 194, 0.25)"
              fontSize="1.9rem"
              animationDuration={0.8}
              pauseBetweenAnimations={1.5}
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

        {/* ═════════════════════════════════════════════════════════════════
              BELOW FOLD — Résumé · GitHub · Photos · Instagram · …
            ═════════════════════════════════════════════════════════════════ */}

        {/* ───────────── Résumé ───────────── */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="bento-tile tile-paper hero-resume"
          style={{ "--delay": "480ms" } as React.CSSProperties}
          aria-label="View résumé"
        >
          <img src={resumeImage} alt="Résumé" className="hero-resume__img" />
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </a>

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
