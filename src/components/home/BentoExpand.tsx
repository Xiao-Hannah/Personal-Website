import { useEffect, useRef, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import "./BentoExpand.less";

interface BentoExpandProps {
  open: boolean;
  onClose: () => void;
  /** Eyebrow / source label, e.g. "Self introduction" */
  label?: string;
  /** Bold heading */
  title?: string;
  /**
   * Paragraphs of body content. In `chat` variant (default) they are typed out
   * one bubble at a time. In `prose` variant they render as flowing prose.
   * Accepts ReactNode so callers can embed inline highlights.
   */
  paragraphs?: ReactNode[];
  /**
   * Fully custom body. When provided, replaces both `paragraphs` and the
   * standard header — useful for modals with their own internal layout
   * (e.g. avatar + segmented toggles).
   */
  body?: ReactNode;
  /** Optional footer/CTA content under the body. */
  footer?: ReactNode;
  /** Characters per second for the typing effect (default 90). */
  cps?: number;
  /** Visual treatment. `chat` = bubbles + typewriter, `prose` = flowing static text. */
  variant?: "chat" | "prose";
}

const BentoExpand = ({
  open,
  onClose,
  label,
  title,
  paragraphs = [],
  body,
  footer,
  cps = 90,
  variant = "chat",
}: BentoExpandProps) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [typed, setTyped] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  // Treat all paragraphs as strings only for the typewriter (chat variant).
  const stringParagraphs =
    variant === "chat"
      ? (paragraphs.filter((p) => typeof p === "string") as string[])
      : [];

  // Reset & start typing whenever opened (chat variant only)
  useEffect(() => {
    if (!open || variant !== "chat") return;
    setActiveIdx(0);
    setTyped(stringParagraphs.map(() => ""));
    setDone(false);
    startRef.current = null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, paragraphs, variant]);

  // Type out the active paragraph; auto-advance to next when done.
  useEffect(() => {
    if (!open || variant !== "chat" || done) return;
    const current = stringParagraphs[activeIdx];
    if (current === undefined) {
      setDone(true);
      return;
    }

    const tick = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const charCount = Math.min(
        current.length,
        Math.floor((elapsed / 1000) * cps)
      );
      setTyped((prev) => {
        const next = [...prev];
        next[activeIdx] = current.slice(0, charCount);
        return next;
      });
      if (charCount >= current.length) {
        startRef.current = null;
        if (activeIdx < stringParagraphs.length - 1) {
          window.setTimeout(() => setActiveIdx((i) => i + 1), 220);
        } else {
          setDone(true);
        }
      } else {
        rafRef.current = window.requestAnimationFrame(tick);
      }
    };
    rafRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, activeIdx, paragraphs, cps, done, variant]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Skip animation on click anywhere in the body (chat only)
  const handleSkip = () => {
    if (variant !== "chat" || done) return;
    if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    setTyped(stringParagraphs);
    setActiveIdx(stringParagraphs.length - 1);
    setDone(true);
  };

  if (!open || typeof window === "undefined") return null;

  const isProse = variant === "prose";
  const isCustom = body !== undefined;

  return createPortal(
    <div
      className={`bento-expand bento-expand--${variant}${
        isCustom ? " bento-expand--custom" : ""
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Dialog"}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bento-expand__panel">
        {isCustom ? (
          <>
            <button
              type="button"
              className="bento-expand__close bento-expand__close--floating"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="bento-expand__body bento-expand__body--custom">
              {body}
            </div>
          </>
        ) : (
          <>
            <header className="bento-expand__header">
              <div className="bento-expand__heading">
                {label && (
                  <p className="bento-expand__label">
                    {!isProse && (
                      <span className="bento-expand__avatar" aria-hidden>
                        H
                      </span>
                    )}
                    {label}
                  </p>
                )}
                {title && (
                  <h2 className="bento-expand__title">{title}</h2>
                )}
              </div>
              <button
                type="button"
                className="bento-expand__close"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </header>

            <div className="bento-expand__body" onClick={handleSkip}>
              {isProse ? (
                <>
                  {paragraphs.map((para, i) => (
                    <p key={i} className="bento-expand__prose">
                      {para}
                    </p>
                  ))}
                  {footer && (
                    <div className="bento-expand__footer">{footer}</div>
                  )}
                </>
              ) : (
                <>
                  {stringParagraphs.map((_, i) => {
                    const isActive = i === activeIdx && !done;
                    const text = typed[i] ?? "";
                    if (text.length === 0 && i > activeIdx) return null;
                    return (
                      <p key={i} className="bento-expand__bubble">
                        {text}
                        {isActive && <span className="bento-expand__caret" />}
                      </p>
                    );
                  })}
                  {!done && (
                    <p className="bento-expand__hint">
                      Tap anywhere to skip typing →
                    </p>
                  )}
                  {done && footer && (
                    <div className="bento-expand__footer">{footer}</div>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};

export default BentoExpand;
