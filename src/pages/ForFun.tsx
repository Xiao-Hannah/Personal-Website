import { useState, useEffect, useMemo } from "react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import ImageLightbox from "@/components/layout/ImageLightbox";
import Masonry, { MasonryItem, SectionAnchor } from "@/components/layout/Masonry";
import './ForFun.less';

// Archaeology images
import archeologyImage1 from "@/assets/images/archeology/xiao_gou.jpeg";
import archeologyImage2 from "@/assets/images/archeology/xiao_mou.jpg";
import archeologyImage3 from "@/assets/images/archeology/xiao_shiba.jpg";
import archeologyImage4 from "@/assets/images/archeology/xiao_hannah.jpg";
import archeologyImage5 from "@/assets/images/archeology/xiao_xiao_han.jpg";
import archeologyImage6 from "@/assets/images/archeology/xiao_zhu.jpg";
import archeologyImage7 from "@/assets/images/archeology/IMG_3323.jpg";

// Photography images
import photographyImage1 from "@/assets/images/photography/photography1.jpg";
import photographyImage2 from "@/assets/images/photography/photography2.jpg";
import photographyImage3 from "@/assets/images/photography/photography3.jpeg";
import photographyImage4 from "@/assets/images/photography/photography4.jpeg";
import photographyImage5 from "@/assets/images/photography/photography5.jpg";
import photographyImage6 from "@/assets/images/photography/photography6.jpg";
import photographyImage7 from "@/assets/images/photography/photography7.jpg";
import photographyImage8 from "@/assets/images/photography/photography8.jpeg";
import photographyImage9 from "@/assets/images/photography/photography9.jpg";
import photographyImage10 from "@/assets/images/photography/photography10.jpg";
import photographyImage11 from "@/assets/images/photography/photography11.jpg";

// Travelling images
import travellingImage1 from "@/assets/images/travelling/travelling1.jpg";
import travellingImage2 from "@/assets/images/travelling/travelling2.jpg";
import travellingImage3 from "@/assets/images/travelling/travelling3.jpeg";
import travellingImage4 from "@/assets/images/travelling/travelling4.jpg";
import travellingImage5 from "@/assets/images/travelling/travelling5.jpg";
import travellingImage6 from "@/assets/images/travelling/travelling6.jpg";
import travellingImage8 from "@/assets/images/travelling/travelling8.jpg";

// Fun images
import funImage2 from "@/assets/images/fun/fun2.jpg";
import funImage3 from "@/assets/images/fun/fun3.jpg";
import funImage4 from "@/assets/images/fun/fun4.jpg";

// Baking images
import bakingImage1 from "@/assets/images/baking/baking1.png";
import bakingImage2 from "@/assets/images/baking/baking2.png";
import bakingImage3 from "@/assets/images/baking/baking3.png";
import bakingImage4 from "@/assets/images/baking/baking4.png";
import bakingImage5 from "@/assets/images/baking/baking5.png";
import bakingImage6 from "@/assets/images/baking/baking6.png";
import bakingImage7 from "@/assets/images/baking/baking7.png";
import bakingImage8 from "@/assets/images/baking/baking8.png";
import bakingImage9 from "@/assets/images/baking/baking9.png";

// Thesis PDF
import thesis from "@/assets/files/thesis.pdf";

// Static image data — click handlers are added inside the component
const archData    = [
  { id: "arch-1", img: archeologyImage1, height: 700 },
  { id: "arch-2", img: archeologyImage2, height: 900 },
  { id: "arch-3", img: archeologyImage3, height: 650 },
  { id: "arch-4", img: archeologyImage4, height: 800 },
  { id: "arch-5", img: archeologyImage5, height: 750 },
  { id: "arch-6", img: archeologyImage6, height: 900 },
  { id: "arch-7", img: archeologyImage7, height: 700 },
];

const photoData   = [
  { id: "photo-1",  img: photographyImage1,  height: 800 },
  { id: "photo-2",  img: photographyImage2,  height: 600 },
  { id: "photo-3",  img: photographyImage3,  height: 900 },
  { id: "photo-4",  img: photographyImage4,  height: 700 },
  { id: "photo-5",  img: photographyImage5,  height: 600 },
  { id: "photo-6",  img: photographyImage6,  height: 850 },
  { id: "photo-7",  img: photographyImage7,  height: 750 },
  { id: "photo-8",  img: photographyImage8,  height: 600 },
  { id: "photo-9",  img: photographyImage9,  height: 900 },
  { id: "photo-10", img: photographyImage10, height: 650 },
  { id: "photo-11", img: photographyImage11, height: 800 },
];

const travelData  = [
  { id: "travel-1", img: travellingImage1, height: 650 },
  { id: "travel-2", img: travellingImage2, height: 850 },
  { id: "travel-3", img: travellingImage3, height: 700 },
  { id: "travel-4", img: travellingImage4, height: 900 },
  { id: "travel-5", img: travellingImage5, height: 600 },
  { id: "travel-6", img: travellingImage6, height: 800 },
  { id: "travel-8", img: travellingImage8, height: 750 },
];

const bakingData  = [
  { id: "baking-1", img: bakingImage1, height: 900 },
  { id: "baking-2", img: bakingImage2, height: 700 },
  { id: "baking-3", img: bakingImage3, height: 800 },
  { id: "baking-4", img: bakingImage4, height: 650 },
  { id: "baking-5", img: bakingImage5, height: 900 },
  { id: "baking-6", img: bakingImage6, height: 750 },
  { id: "baking-7", img: bakingImage7, height: 800 },
  { id: "baking-8", img: bakingImage8, height: 700 },
  { id: "baking-9", img: bakingImage9, height: 850 },
];

const funData     = [
  { id: "fun-2", img: funImage2, height: 750 },
  { id: "fun-3", img: funImage3, height: 650 },
  { id: "fun-4", img: funImage4, height: 850 },
];

const navSections = [
  { id: 'anchor-archaeology', label: 'Archaeological Project', startItemId: 'arch-1' },
  { id: 'anchor-photography', label: 'Photography',            startItemId: 'photo-1' },
  { id: 'anchor-travelling',  label: 'Travelling',             startItemId: 'travel-1' },
  { id: 'anchor-baking',      label: 'Baking',                 startItemId: 'baking-1' },
  { id: 'anchor-fun',         label: 'Trying New Things',      startItemId: 'fun-2' },
];

const sectionAnchors: SectionAnchor[] = navSections.map(s => ({
  id: s.id,
  startItemId: s.startItemId,
}));

const ForFun = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const [activeSection, setActiveSection] = useState('anchor-archaeology');

  // Merge all items into one array with per-item click handlers
  const allItems = useMemo<MasonryItem[]>(() => [
    ...archData.map(item => ({
      ...item,
      onItemClick: () => window.open(thesis, '_blank', 'noopener'),
    })),
    ...photoData.map(item => ({
      ...item,
      onItemClick: () => setLightboxImage({ src: item.img, alt: 'Photography' }),
    })),
    ...travelData.map(item => ({
      ...item,
      onItemClick: () => setLightboxImage({ src: item.img, alt: 'Travelling' }),
    })),
    ...bakingData.map(item => ({
      ...item,
      onItemClick: () => setLightboxImage({ src: item.img, alt: 'Baking' }),
    })),
    ...funData.map(item => ({
      ...item,
      onItemClick: () => setLightboxImage({ src: item.img, alt: 'Fun' }),
    })),
  ], []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const anchorIds = navSections.map(s => s.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    // Observe once anchors are in the DOM
    const observe = () => {
      anchorIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    // Small delay to let Masonry compute grid and render anchors
    const timer = setTimeout(observe, 300);

    const handleScroll = () => {
      const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
      if (nearBottom) setActiveSection('anchor-fun');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (!el) return;
    const nav = document.querySelector('.navigation') as HTMLElement | null;
    const navHeight = nav ? nav.offsetHeight : 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="for-fun-page">
      <Navigation />

      {lightboxImage && (
        <ImageLightbox
          image={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}

      <section className="for-fun-hero">
        <div className="container">
          <h1 className="for-fun-title">Something Fun</h1>
          <p className="for-fun-subtitle">
            Beyond design — exploring the world, capturing moments, and embracing new experiences.
          </p>
        </div>
      </section>

      <div className="for-fun-body">
        <aside className="for-fun-sidebar">
          <nav className="for-fun-sidebar__nav">
            {navSections.map(s => (
              <button
                key={s.id}
                className={`for-fun-sidebar__link${activeSection === s.id ? ' is-active' : ''}`}
                onClick={() => scrollToSection(s.id)}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="for-fun-content">
          <Masonry
            items={allItems}
            sectionAnchors={sectionAnchors}
            animateFrom="bottom"
            stagger={0.03}
            blurToFocus={false}
            scaleOnHover
            hoverScale={0.97}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ForFun;
