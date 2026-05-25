import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Music,
  Heart,
  Coffee,
  Play,
  X,
  Instagram as InstagramIcon,
} from "lucide-react";
import albumImage from "@/assets/images/albumimage.jpg";
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
import SpotifyPreview from "./SpotifyPreview";
import "./BentoSocial.less";

const SOCIAL_STATS = {
  instagram: { handle: "@hanx0628", posts: 15 },
  nowPlaying: {
    title: "六號咖啡館",
    album: "規定情境",
    artist: "Young",
    spotifyId: "18c2nsUPffvsYcRI7bnaOq",
  },
  coffees: 2,
};

const photoStrip = [photo1, photo2, photo3, photo4, photo5, photo6, travel1, travel3, travel5];

const BentoSocial = () => {
  const [time, setTime] = useState(() => new Date());
  const [spotifyOpen, setSpotifyOpen] = useState(false);

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

  return (
    <section className="bento-section bento-social">
      <div className="bento-section__grid">

        {/* ─── Instagram ─── */}
        <a
          href="https://instagram.com/hanx0628"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-tile tile-paper social-instagram"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          <div className="social-instagram__mosaic" aria-hidden>
            <span className="social-instagram__cell"><img src={instagram1} alt="" /></span>
            <span className="social-instagram__cell"><img src={instagram2} alt="" /></span>
            <span className="social-instagram__cell"><img src={instagram3} alt="" /></span>
            <span className="social-instagram__cell"><img src={instagram4} alt="" /></span>
          </div>
          <div className="social-instagram__overlay">
            <div className="social-instagram__handle">
              <InstagramIcon size={16} /> {SOCIAL_STATS.instagram.handle}
            </div>
            <p className="social-instagram__count">
              {SOCIAL_STATS.instagram.posts} posts
            </p>
          </div>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </a>

        {/* ─── Now playing ─── */}
        <article
          className={`bento-tile tile-paper social-now-playing ${
            spotifyOpen ? "is-playing" : ""
          }`}
          style={{ "--delay": "60ms" } as React.CSSProperties}
        >
          <img src={albumImage} alt="" className="social-now-playing__art" aria-hidden />
          <div className="social-now-playing__art-overlay" aria-hidden />
          <div className="social-now-playing__text">
            <p className="social-now-playing__label">
              <Music size={11} /> Currently listening
              <span className="social-now-playing__bars" aria-hidden>
                <span /><span /><span /><span />
              </span>
            </p>
            <p className="social-now-playing__title">{SOCIAL_STATS.nowPlaying.title}</p>
            <p className="social-now-playing__album">
              <span>{SOCIAL_STATS.nowPlaying.album}</span> · {SOCIAL_STATS.nowPlaying.artist}
            </p>
          </div>
          <button
            type="button"
            className="social-now-playing__play"
            onClick={() => setSpotifyOpen(true)}
            aria-label="Play preview on Spotify"
          >
            <Play size={14} fill="currentColor" />
            <span>Preview</span>
          </button>
          {spotifyOpen && (
            <div className="social-now-playing__embed" role="region" aria-label="Spotify player">
              <button
                type="button"
                className="social-now-playing__close"
                onClick={() => setSpotifyOpen(false)}
                aria-label="Close player"
              >
                <X size={14} />
              </button>
              <SpotifyPreview
                trackId={SOCIAL_STATS.nowPlaying.spotifyId}
                active={spotifyOpen}
              />
            </div>
          )}
        </article>

        {/* ─── Seattle clock ─── */}
        <article
          className="bento-tile tile-paper social-clock"
          style={{ "--delay": "120ms" } as React.CSSProperties}
        >
          <p className="eyebrow">
            <MapPin size={11} /> Seattle
          </p>
          <h2 className="social-clock__time">{seattleTime}</h2>
          <p className="social-clock__sub">
            <span className={`social-clock__pulse ${isAwake ? "" : "is-asleep"}`} />
            {isAwake ? "Open to chat" : "Sleeping zzz"}
          </p>
          <div className="social-clock__coffee">
            <span className="social-clock__coffee-icon" aria-hidden>
              <Coffee size={14} />
              <span className="social-clock__steam">
                <span /><span /><span />
              </span>
            </span>
            <p className="social-clock__coffee-copy">
              <span className="social-clock__coffee-count">{SOCIAL_STATS.coffees}</span>
              <span className="social-clock__coffee-label">cups today</span>
            </p>
          </div>
        </article>

        {/* ─── Photo strip — Moments ─── */}
        <article
          className="bento-tile tile-paper social-photos"
          style={{ "--delay": "180ms" } as React.CSSProperties}
        >
          <p className="eyebrow social-photos__label">
            <Heart size={11} /> Moments
          </p>
          <div className="social-photos__track" aria-hidden>
            {[...photoStrip, ...photoStrip].map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
          </div>
        </article>

      </div>
    </section>
  );
};

export default BentoSocial;
