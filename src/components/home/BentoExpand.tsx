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
  title: string;
  /**
   * Paragraphs to type out, one after the other.
   * Each paragraph is a string that will be revealed character-by-character.
   */
  paragraphs: string[];
  /** Optional footer/CTA content under the typed text. */
  footer?: ReactNode;
  /** Characters per second for the typing effect (default 90). */
  cps?: number;
}

const BentoExpand = ({
  open,
  onClose,
  label,
  title,
  paragraphs,
  footer,
  cps = 90,
}: BentoExpandProps) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [typed, setTyped] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  // Reset & start typing whenever opened
  useEffect(() => {
    if (!open) return;
    setActiveIdx(0);
    setTyped(paragraphs.map(() => ""));
    setDone(false);
    startRef.current = null;
  }, [open, paragraphs]);

  // Type out the active paragraph; auto-advance to next when done.
  useEffect(() => {
    if (!open || done) return;
    const current = paragraphs[activeIdx];
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
        if (activeIdx < paragraphs.length - 1) {
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
  }, [open, activeIdx, paragraphs, cps, done]);

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

  // Skip animation on click anywhere in the body
  const handleSkip = () => {
    if (done) return;
    if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    setTyped(paragraphs);
    setActiveIdx(paragraphs.length - 1);
    setDone(true);
  };

  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      className="bento-expand"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bento-expand__panel">
        <header className="bento-expand__header">
          <div className="bento-expand__heading">
            {label && (
              <p className="bento-expand__label">
                <span className="bento-expand__avatar" aria-hidden>H</span>
                {label}
              </p>
            )}
            <h2 className="bento-expand__title">{title}</h2>
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
          {paragraphs.map((para, i) => {
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
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BentoExpand;
