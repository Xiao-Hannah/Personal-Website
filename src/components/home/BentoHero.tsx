import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Instagram,
  FileText,
  Coffee,
  Music,
  BookOpen,
  Heart,
  Download,
  Check,
  Sun,
  Moon,
  MessageCircle,
  Play,
  X,
} from "lucide-react";
import profileImage from "@/assets/images/profile/profile.jpg";
import albumImage from "@/assets/images/albumimage.jpg";
import bookCover from "@/assets/images/home/book.jpg";
import resume from "@/assets/files/resume.pdf";
import photo1 from "@/assets/images/photography/photography1.jpg";
import photo2 from "@/assets/images/photography/photography2.jpg";
import photo3 from "@/assets/images/photography/photography3.jpeg";
import photo4 from "@/assets/images/photography/photography4.jpeg";
import photo5 from "@/assets/images/photography/photography5.jpg";
import photo6 from "@/assets/images/photography/photography6.jpg";
import travel1 from "@/assets/images/travelling/travelling1.jpg";
import travel3 from "@/assets/images/travelling/travelling3.jpeg";
import travel5 from "@/assets/images/travelling/travelling5.jpg";
import instagram1 from "@/assets/images/instagram/instagram1.jpg";
import instagram2 from "@/assets/images/instagram/instagram2.jpg";
import instagram3 from "@/assets/images/instagram/instagram3.jpg";
import instagram4 from "@/assets/images/instagram/instagram4.jpg";
import BentoExpand from "./BentoExpand";
import IntroModalBody from "./IntroModalBody";
import SpotifyPreview from "./SpotifyPreview";
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
  instagram:{ handle: "@hanx0628", posts: 184 },
  nowReading: {
    title: "Pachinko",
    author: "Min Jin Lee",
    year: 2017,
    pages: 496,
    progress: 42, // percent
    chapter: "Book II · Chapter 4",
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

const photoStrip = [photo1, photo2, photo3, photo4, photo5, photo6, travel1, travel3, travel5];

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

const BentoHero = ({
  onScrollToWork,
  onScrollToContact,
}: BentoHeroProps) => {
  const [time, setTime] = useState(() => new Date());
  const [copied, setCopied] = useState(false);
  const [introOpen, setIntroOpen] = useState(false);
  const [bulbPulse, setBulbPulse] = useState(false);
  const [spotifyOpen, setSpotifyOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  const handleThemeToggle = () => {
    setBulbPulse(true);
    window.setTimeout(() => setBulbPulse(false), 700);
    toggle();
  };

  useEffect(() => {
    const id = window.setInterval(() => setTime(new Date()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const seattleTime = time.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
  });
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
      await navigator.clipboard.writeText("hx2313@uw.edu");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section
      className="bento-section bento-section--hero bento-hero"
      aria-label="Hannah Xiao — intro"
    >
      <div className="bento-section__grid">
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
            <p className="eyebrow">
              <MessageCircle size={11} /> Self introduction
            </p>
            <p className="hero-intro__greeting">
              Heyyy <span className="hero-intro__wave" aria-hidden>👋</span>
            </p>
            <p className="hero-intro__lede">
              I'm <strong>Hannah Xiao</strong>, currently working as a Growth
              Product Manager <span className="hero-intro__at">@atypica.AI</span>.
            </p>
            <span className="hero-intro__cta">
              Click to read more <ArrowUpRight size={14} />
            </span>
          </div>
        </article>

        {/* ───────────── Résumé — mini PDF preview ───────────── */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="bento-tile tile-paper hero-resume"
          style={{ "--delay": "60ms" } as React.CSSProperties}
        >
          <div className="hero-resume__doc" aria-hidden>
            <div className="hero-resume__doc-head">
              <span className="hero-resume__doc-name" />
              <span className="hero-resume__doc-title" />
            </div>
            <div className="hero-resume__doc-section">
              <span className="line w-90" /> <span className="line w-70" />
              <span className="line w-80" />
            </div>
            <div className="hero-resume__doc-section">
              <span className="line w-60" /> <span className="line w-85" />
            </div>
            <div className="hero-resume__doc-section">
              <span className="line w-75" /> <span className="line w-65" />
              <span className="line w-50" />
            </div>
          </div>
          <div className="hero-resume__meta">
            <div className="hero-resume__meta-text">
              <p className="hero-resume__label">
                <FileText size={14} /> Résumé
              </p>
              <p className="hero-resume__sub">Updated May 2026</p>
            </div>
            <span className="hero-resume__download" aria-hidden>
              <Download size={14} />
            </span>
          </div>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </a>

        {/* ───────────── LinkedIn — mini profile card ───────────── */}
        <a
          href="https://www.linkedin.com/in/hannah-x/"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-tile tile-paper hero-linkedin"
          style={{ "--delay": "120ms" } as React.CSSProperties}
        >
          <div className="hero-linkedin__cover" aria-hidden />
          <img
            src={profileImage}
            alt=""
            className="hero-linkedin__avatar"
          />
          <div className="hero-linkedin__body">
            <p className="hero-linkedin__name">Hannah Xiao</p>
            <p className="hero-linkedin__title">{STATS.linkedin.headline}</p>
            <p className="hero-linkedin__connections">
              <Linkedin size={12} /> {STATS.linkedin.connections} connections
            </p>
          </div>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </a>

        {/* ───────────── GitHub — contribution grid ───────────── */}
        <a
          href="https://github.com/Xiao-Hannah"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-tile tile-dark hero-github"
          style={{ "--delay": "180ms" } as React.CSSProperties}
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

        {/* ───────────── Instagram — 4-photo mosaic ───────────── */}
        <a
          href="https://instagram.com/hanx0628"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-tile tile-paper hero-instagram"
          style={{ "--delay": "240ms" } as React.CSSProperties}
        >
          <div className="hero-instagram__mosaic" aria-hidden>
            <span className="hero-instagram__cell"><img src={instagram1} alt="" /></span>
            <span className="hero-instagram__cell"><img src={instagram2} alt="" /></span>
            <span className="hero-instagram__cell"><img src={instagram3} alt="" /></span>
            <span className="hero-instagram__cell"><img src={instagram4} alt="" /></span>
          </div>
          <div className="hero-instagram__overlay">
            <div className="hero-instagram__handle">
              <Instagram size={16} /> {STATS.instagram.handle}
            </div>
            <p className="hero-instagram__count">
              {STATS.instagram.posts} posts
            </p>
          </div>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </a>

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

        {/* ───────────── Seattle clock ───────────── */}
        <article
          className="bento-tile tile-paper hero-clock"
          style={{ "--delay": "360ms" } as React.CSSProperties}
        >
          <p className="eyebrow">
            <MapPin size={11} /> Seattle
          </p>
          <h2 className="hero-clock__time">{seattleTime}</h2>
          <p className="hero-clock__sub">
            <span
              className={`hero-clock__pulse ${isAwake ? "" : "is-asleep"}`}
            />
            {isAwake ? "Open to chat" : "Sleeping zzz"}
          </p>
        </article>

        {/* ───────────── Now playing — w/ album art ───────────── */}
        <article
          className={`bento-tile tile-dark hero-now-playing ${
            spotifyOpen ? "is-playing" : ""
          }`}
          style={{ "--delay": "420ms" } as React.CSSProperties}
        >
          <img
            src={albumImage}
            alt=""
            className="hero-now-playing__art"
            aria-hidden
          />
          <div className="hero-now-playing__art-overlay" aria-hidden />
          <div className="hero-now-playing__text">
            <p className="hero-now-playing__label">
              <Music size={11} /> Currently listening
              <span className="hero-now-playing__bars" aria-hidden>
                <span /><span /><span /><span />
              </span>
            </p>
            <p className="hero-now-playing__title">{STATS.nowPlaying.title}</p>
            <p className="hero-now-playing__album">
              <span>{STATS.nowPlaying.album}</span> · {STATS.nowPlaying.artist}
            </p>
          </div>

          <button
            type="button"
            className="hero-now-playing__play"
            onClick={() => setSpotifyOpen(true)}
            aria-label="Play preview on Spotify"
          >
            <Play size={14} fill="currentColor" />
            <span>Preview</span>
          </button>

          {spotifyOpen && (
            <div className="hero-now-playing__embed" role="region" aria-label="Spotify player">
              <button
                type="button"
                className="hero-now-playing__close"
                onClick={() => setSpotifyOpen(false)}
                aria-label="Close player"
              >
                <X size={14} />
              </button>
              <SpotifyPreview
                trackId={STATS.nowPlaying.spotifyId}
                active={spotifyOpen}
              />
            </div>
          )}
        </article>

        {/* ───────────── Reading ───────────── */}
        <article
          className="bento-tile tile-paper hero-reading"
          style={{ "--delay": "480ms" } as React.CSSProperties}
        >
          <div className="hero-reading__book" aria-hidden>
            <img
              src={bookCover}
              alt=""
              className="hero-reading__cover-img"
            />
            <div className="hero-reading__spine" />
          </div>
          <div className="hero-reading__meta">
            <p className="eyebrow"><BookOpen size={11} /> Currently reading</p>
            <p className="hero-reading__title">{STATS.nowReading.title}</p>
            <p className="hero-reading__author">
              {STATS.nowReading.author} · {STATS.nowReading.year}
            </p>
            <p className="hero-reading__chapter">{STATS.nowReading.chapter}</p>

            <div className="hero-reading__progress" aria-hidden>
              <div className="hero-reading__progress-bar">
                <span style={{ width: `${STATS.nowReading.progress}%` }} />
              </div>
              <span className="hero-reading__progress-label">
                {STATS.nowReading.progress}% ·{" "}
                {Math.round((STATS.nowReading.pages * STATS.nowReading.progress) / 100)}
                /{STATS.nowReading.pages} pages
              </span>
            </div>
          </div>
        </article>

        {/* ───────────── Photo strip ───────────── */}
        <article
          className="bento-tile tile-paper hero-photos"
          style={{ "--delay": "540ms" } as React.CSSProperties}
        >
          <p className="eyebrow hero-photos__label">
            <Heart size={11} /> Lately
          </p>
          <div className="hero-photos__track" aria-hidden>
            {[...photoStrip, ...photoStrip].map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
          </div>
        </article>

        {/* ───────────── Coffee counter ───────────── */}
        <article
          className="bento-tile tile-yellow hero-coffee"
          style={{ "--delay": "600ms" } as React.CSSProperties}
        >
          <Coffee size={22} />
          <p className="hero-coffee__count">{STATS.coffees}</p>
          <p className="hero-coffee__label">cups today</p>
          <span className="hero-coffee__steam" aria-hidden>
            <span /><span /><span />
          </span>
        </article>

        {/* ───────────── Email copy ───────────── */}
        <button
          type="button"
          className="bento-tile tile-paper hero-email is-clickable"
          onClick={copyEmail}
          style={{ "--delay": "660ms" } as React.CSSProperties}
        >
          <Mail size={22} className="hero-email__icon" />
          <p className="hero-email__addr">hx2313@uw.edu</p>
          <span className={`hero-email__copy ${copied ? "is-copied" : ""}`}>
            {copied ? (
              <><Check size={12} /> Copied!</>
            ) : (
              "Click to copy"
            )}
          </span>
        </button>

        {/* ───────────── Work CTA ───────────── */}
        <button
          type="button"
          className="bento-tile tile-paper hero-cta-work is-clickable"
          onClick={onScrollToWork}
          style={{ "--delay": "720ms" } as React.CSSProperties}
        >
          <p className="eyebrow">My work</p>
          <h3>
            See what
            <br />
            I've shipped <span className="hero-cta-work__arrow">↓</span>
          </h3>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </button>

        {/* ───────────── Contact CTA ───────────── */}
        <button
          type="button"
          className="bento-tile tile-dark hero-cta-contact is-clickable"
          onClick={onScrollToContact}
          style={{ "--delay": "780ms" } as React.CSSProperties}
        >
          <p className="eyebrow eyebrow--light">Say hi</p>
          <h3>Let's build something together.</h3>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </button>
      </div>

      <BentoExpand
        open={introOpen}
        onClose={() => setIntroOpen(false)}
        body={<IntroModalBody />}
      />
    </section>
  );
};

export default BentoHero;
