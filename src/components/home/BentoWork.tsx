import MediaTile from "./MediaTile";
import "./BentoWork.less";

interface WorkItem {
  title: string;
  meta: string;
  tagline: string;
  link: string;
  hue: number;
  videoSrc?: string;
  posterSrc?: string;
  size: "lg" | "md";
}

// videoSrc / posterSrc are intentionally undefined for now — MediaTile renders
// a beautiful animated gradient placeholder until you add real media.
const projects: WorkItem[] = [
  {
    title: "Fora Tools",
    meta: "2026 · Onboarding Strategy",
    tagline: "A personalised first-60-days hub for new travel advisors.",
    link: "/fora",
    hue: 95,
    size: "lg",
  },
  {
    title: "SolarEase",
    meta: "2026 · Full-Stack + PM",
    tagline: "ROI simulation + Nash bargaining for community solar.",
    link: "/solarease",
    hue: 270,
    size: "md",
  },
  {
    title: "Bloomè",
    meta: "2024 · UX Research & Design",
    tagline: "Education and access to fight period poverty.",
    link: "/bloome",
    hue: 340,
    size: "md",
  },
  {
    title: "Fridge Friend",
    meta: "2023 · Product Design",
    tagline: "Smart kitchen companion that reduces food waste.",
    link: "/fridgefriend",
    hue: 150,
    size: "lg",
  },
];

const BentoWork = () => {
  return (
    <section id="work" className="bento-section bento-work">
      <div className="bento-section__label">
        <span className="label-text">Selected Work</span>
        <span className="label-aside">03</span>
      </div>

      <div className="bento-section__grid">
        {projects.map((p, i) => (
          <MediaTile
            key={p.title}
            className={`work-card work-card--${p.size}`}
            title={p.title}
            meta={p.meta}
            tagline={p.tagline}
            link={p.link}
            placeholderHue={p.hue}
            videoSrc={p.videoSrc}
            posterSrc={p.posterSrc}
            delay={i * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default BentoWork;
