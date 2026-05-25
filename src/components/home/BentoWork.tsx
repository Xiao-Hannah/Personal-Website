import MediaTile from "./MediaTile";
import foraCover from "../../assets/images/fora/fora.webp";
import solareaseCoverVideo from "../../assets/videos/solarease_cover.mp4";
import fridgeFriendCover from "../../assets/images/fridgeFriend/avo3.jpg";
import bloomeVideo from "../../assets/videos/bloome.mov";
import "./BentoWork.less";

interface WorkItem {
  title: string;
  meta: string;
  tagline: string;
  link: string;
  hue: number;
  videoSrc?: string;
  posterSrc?: string;
  size: "lg" | "md" | "sq";
  variant?: "cover" | "split" | "band";
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
    posterSrc: foraCover,
    variant: "band",
  },
  {
    title: "SolarEase",
    meta: "2026 · Full-Stack + PM",
    tagline: "ROI simulation + Nash bargaining for community solar.",
    link: "/solarease",
    hue: 270,
    size: "sq",
    videoSrc: solareaseCoverVideo,
    variant: "band",
  },
  {
    title: "Bloomè",
    meta: "2024 · UX Research & Design",
    tagline: "Education and access to fight period poverty.",
    link: "/bloome",
    hue: 340,
    size: "md",
    videoSrc: bloomeVideo,
    variant: "band",
  },
  {
    title: "Fridge Friend",
    meta: "2023 · Product Design",
    tagline: "Smart kitchen companion that reduces food waste.",
    link: "/fridgefriend",
    hue: 150,
    size: "lg",
    posterSrc: fridgeFriendCover,
    variant: "band",
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
            variant={p.variant}
            delay={i * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default BentoWork;
