import { useState, useEffect, useRef } from 'react';
import './CustomCursor.css';

// Slightly higher lerp — arrow tip precision needs more responsiveness
const LERP = 0.20;

const INTERACTIVE =
  'a[href], button, [role="button"], [tabindex]:not([tabindex="-1"]), ' +
  'input, select, textarea, label, ' +
  '.is-clickable, .nav-link, .mobile-nav-link, .logo, ' +
  '.hero-experience, .hero-outside-office, .hero-resume, .bento-tile';

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// Classic pointer shape — tip at SVG (2, 2):
//   straight left edge → inner diagonal cut → descending tail →
//   tail notch → inner right edge → shoulder → close (= right body edge)
const ARROW = 'M 2 2 L 2 20 L 14.5 14.5 Z';

export default function CustomCursor() {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const actual   = useRef({ x: -300, y: -300 });
  const display  = useRef({ x: -300, y: -300 });
  const rafRef   = useRef<number>();
  const shownRef = useRef(false);

  const [visible,  setVisible]  = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e: MouseEvent) => {
      actual.current = { x: e.clientX, y: e.clientY };
      if (!shownRef.current) { shownRef.current = true; setVisible(true); }
    };
    const onOver  = (e: MouseEvent) =>
      setHovering(!!(e.target as Element).closest(INTERACTIVE));
    const onDown  = () => setClicking(true);
    const onUp    = () => setClicking(false);
    const onLeave = () => { shownRef.current = false; setVisible(false); };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup',   onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);

    const tick = () => {
      display.current.x = lerp(display.current.x, actual.current.x, LERP);
      display.current.y = lerp(display.current.y, actual.current.y, LERP);
      if (wrapRef.current) {
        wrapRef.current.style.transform =
          `translate(${display.current.x}px, ${display.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup',   onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current!);
    };
  }, []);

  const svgCls = [
    'arrow-cursor',
    visible  && 'is-visible',
    hovering && 'is-hovering',
    clicking && 'is-clicking',
  ].filter(Boolean).join(' ');

  return (
    // Zero-size anchor — transform updated every rAF frame
    <div ref={wrapRef} className="arrow-cursor-wrap" aria-hidden="true">
      <svg
        className={svgCls}
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={ARROW} className="arrow-path" />
      </svg>
    </div>
  );
}
