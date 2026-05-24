import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import "./MediaTile.less";

export interface MediaTileProps {
  /** Path / URL to a short looping video. When omitted, a styled placeholder is rendered. */
  videoSrc?: string;
  /** Optional poster image shown while video loads (or as a static fallback). */
  posterSrc?: string;
  /** Hue used by the placeholder gradient (degrees, 0–360). */
  placeholderHue?: number;
  /** Internal route to navigate to on click. */
  link?: string;
  /** External href (opens in new tab) — used instead of link when provided. */
  href?: string;
  /** Title shown over the media. */
  title: string;
  /** Small label above the title (e.g. "2025 · Growth Strategy"). */
  meta?: string;
  /** Optional one-line tagline shown below the title. */
  tagline?: string;
  /** Extra class — used to set grid placement from the parent section. */
  className?: string;
  /** CSS animation delay so siblings can stagger. */
  delay?: number;
  /** Variant: `cover` (media fills tile, text overlays top), `split`, or `band` (media + white footer). */
  variant?: "cover" | "split" | "band";
  /**
   * Brand color for the 10px band at the top of the card.
   * When set, switches to the `band` layout: color band → media → white footer.
   */
  bandColor?: string;
  /** Custom media content rendered inside the media area instead of a video/image/placeholder. */
  children?: ReactNode;
}

const MediaTile = ({
  videoSrc,
  posterSrc,
  placeholderHue = 18,
  link,
  href,
  title,
  meta,
  tagline,
  className,
  delay = 0,
  variant = "cover",
  bandColor,
  children,
}: MediaTileProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (link) {
      navigate(link);
    }
  };

  const interactive = Boolean(link || href);
  const effectiveVariant = (bandColor || children || variant === "band") ? "band" : variant;
  const tileStyle = {
    "--delay": `${delay}ms`,
    "--placeholder-hue": `${placeholderHue}`,
  } as React.CSSProperties;

  return (
    <article
      className={`bento-tile media-tile media-tile--${effectiveVariant} ${
        className ?? ""
      }`}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={interactive ? handleClick : undefined}
      onKeyDown={(e) => interactive && e.key === "Enter" && handleClick()}
      style={tileStyle}
    >
      {bandColor && (
        <div
          className="media-tile__band"
          style={{ background: bandColor }}
          aria-hidden
        />
      )}

      <div className="media-tile__media">
        {children ?? (
          videoSrc ? (
            <video
              className="media-tile__video"
              src={videoSrc}
              poster={posterSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : posterSrc ? (
            <img className="media-tile__img" src={posterSrc} alt={title} />
          ) : (
            <div className="media-tile__placeholder">
              <span className="media-tile__placeholder-glow" />
              <span className="media-tile__placeholder-grid" />
              <Play className="media-tile__placeholder-icon" size={28} />
            </div>
          )
        )}
        {effectiveVariant === "cover" && !children && <div className="media-tile__veil" />}
      </div>

      {effectiveVariant === "band" ? (
        <div className="media-tile__footer">
          {meta && <p className="media-tile__meta">{meta}</p>}
          <h3 className="media-tile__title">{title}</h3>
        </div>
      ) : (
        <div className="media-tile__content">
          {meta && <p className="media-tile__meta">{meta}</p>}
          <h3 className="media-tile__title">{title}</h3>
          {tagline && <p className="media-tile__tagline">{tagline}</p>}
        </div>
      )}

      {interactive && (
        <span className="tile-corner" aria-hidden>
          <ArrowUpRight size={16} />
        </span>
      )}
    </article>
  );
};

export default MediaTile;
