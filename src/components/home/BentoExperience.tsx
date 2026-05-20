import MediaTile from "./MediaTile";
import atypicaVideo from "../../assets/videos/atypica_new.mp4";
import zebraVideo from "../../assets/videos/zebra.mp4";
import tmobileVideo from "../../assets/videos/Tmobile.mp4";
import "./BentoExperience.less";

interface ExperienceItem {
  title: string;
  meta: string;
  tagline: string;
  link: string;
  hue: number;
  videoSrc?: string;
  posterSrc?: string;
  size: "lg" | "md" | "wide";
}

// videoSrc / posterSrc are intentionally undefined for now — MediaTile renders
// a beautiful animated gradient placeholder until you add real media.
const experiences: ExperienceItem[] = [
  {
    title: "Atypica AI",
    meta: "2025 · Growth Strategy",
    tagline: "Driving MRR and activation for an AI consumer insights platform.",
    link: "/atypica",
    hue: 200,
    size: "lg",
    videoSrc: atypicaVideo,
  },
  {
    title: "Zebra Workcloud",
    meta: "2025 · Auth × NFC × Biometrics",
    tagline: "Securing frontline workforce management at scale.",
    link: "/zebra",
    hue: 30,
    size: "md",
    videoSrc: zebraVideo,
  },
  {
    title: "T-Mobile CareLink",
    meta: "2024 · PM × Hardware × 5G",
    tagline: "Hypertension medication tracking on T-Mobile's 5G network.",
    link: "/tlink",
    hue: 330,
    size: "wide",
    videoSrc: tmobileVideo,
  },
];

const BentoExperience = () => {
  return (
    <section id="experience" className="bento-section bento-experience">
      <div className="bento-section__label">
        <span className="label-text">Professional Experience</span>
        <span className="label-aside">02</span>
      </div>

      <div className="bento-section__grid">
        {experiences.map((exp, i) => (
          <MediaTile
            key={exp.title}
            className={`exp-card exp-card--${exp.size}`}
            title={exp.title}
            meta={exp.meta}
            tagline={exp.tagline}
            link={exp.link}
            placeholderHue={exp.hue}
            videoSrc={exp.videoSrc}
            posterSrc={exp.posterSrc}
            delay={i * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default BentoExperience;
