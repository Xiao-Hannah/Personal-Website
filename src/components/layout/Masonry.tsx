import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Masonry.css';

export interface MasonryItem {
  id: string;
  img: string;
  url?: string;
  height: number;
  onItemClick?: () => void;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface SectionAnchor {
  id: string;
  startItemId: string;
}

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  const get = () => values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;
  const [value, setValue] = useState(get);
  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
  }, [queries]); // eslint-disable-line react-hooks/exhaustive-deps
  return value;
};

const useMeasure = (): [React.RefObject<HTMLDivElement>, { width: number; height: number }] => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [ref, size];
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      src =>
        new Promise<void>(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

interface MasonryProps {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  onItemClick?: (item: MasonryItem) => void;
  maxColumns?: number;
  sectionAnchors?: SectionAnchor[];
}

const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  onItemClick,
  maxColumns,
  sectionAnchors,
}: MasonryProps) => {
  const rawColumns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  );
  const columns = maxColumns ? Math.min(rawColumns, maxColumns) : rawColumns;

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };
    let direction: string = animateFrom;
    if (animateFrom === 'random') {
      const directions = ['top', 'bottom', 'left', 'right'];
      direction = directions[Math.floor(Math.random() * directions.length)];
    }
    switch (direction) {
      case 'top':    return { x: item.x, y: -200 };
      case 'bottom': return { x: item.x, y: window.innerHeight + 200 };
      case 'left':   return { x: -200, y: item.y };
      case 'right':  return { x: window.innerWidth + 200, y: item.y };
      case 'center': return { x: containerRect.width / 2 - item.w / 2, y: containerRect.height / 2 - item.h / 2 };
      default:       return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;
    return items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const height = child.height / 2;
      const y = colHeights[col];
      colHeights[col] += height;
      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  const totalHeight = useMemo(() => {
    if (!grid.length) return 0;
    return Math.max(...grid.map(item => item.y + item.h));
  }, [grid]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;
    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = { x: item.x, y: item.y, width: item.w, height: item.h };
      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        gsap.fromTo(selector, {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: 'blur(10px)' }),
        }, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: 'blur(0px)' }),
          duration: 0.8,
          ease: 'power3.out',
          delay: index * stagger,
        });
      } else {
        gsap.to(selector, { ...animationProps, duration, ease, overwrite: 'auto' });
      }
    });
    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMouseEnter = (e: React.MouseEvent, item: GridItem) => {
    const selector = `[data-key="${item.id}"]`;
    if (scaleOnHover) gsap.to(selector, { scale: hoverScale, duration: 0.3, ease: 'power2.out' });
    if (colorShiftOnHover) {
      const overlay = e.currentTarget.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent, item: GridItem) => {
    const selector = `[data-key="${item.id}"]`;
    if (scaleOnHover) gsap.to(selector, { scale: 1, duration: 0.3, ease: 'power2.out' });
    if (colorShiftOnHover) {
      const overlay = e.currentTarget.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  // Place each section anchor at the max bottom-edge of all items that come
  // before its startItemId. This accounts for the multi-column layout where
  // the first item of a section can be placed in a short column far above
  // where the section visually begins.
  const anchorYPositions = useMemo(() => {
    if (!sectionAnchors || !grid.length) return {} as Record<string, number>;
    const result: Record<string, number> = {};
    for (const anchor of sectionAnchors) {
      const startIndex = grid.findIndex(item => item.id === anchor.startItemId);
      if (startIndex <= 0) {
        result[anchor.id] = 0;
      } else {
        result[anchor.id] = Math.max(...grid.slice(0, startIndex).map(item => item.y + item.h));
      }
    }
    return result;
  }, [grid, sectionAnchors]);

  return (
    <div ref={containerRef} className="list" style={{ height: totalHeight || 'auto' }}>
      {/* Invisible section anchors for IntersectionObserver */}
      {sectionAnchors?.map(anchor => (
        <div
          key={anchor.id}
          id={anchor.id}
          style={{
            position: 'absolute',
            top: anchorYPositions[anchor.id] ?? 0,
            left: 0,
            width: 1,
            height: 1,
            pointerEvents: 'none',
          }}
        />
      ))}

      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className="item-wrapper"
          onClick={() => {
            if (item.onItemClick) {
              item.onItemClick();
            } else if (onItemClick) {
              onItemClick(item);
            } else if (item.url) {
              window.open(item.url, '_blank', 'noopener');
            }
          }}
          onMouseEnter={e => handleMouseEnter(e, item)}
          onMouseLeave={e => handleMouseLeave(e, item)}
        >
          <div className="item-img" style={{ backgroundImage: `url(${item.img})` }}>
            {colorShiftOnHover && (
              <div
                className="color-overlay"
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))',
                  opacity: 0, pointerEvents: 'none', borderRadius: '8px',
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
