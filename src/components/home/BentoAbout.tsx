import { useState } from "react";
import {
  ArrowUpRight,
  GraduationCap,
  Telescope,
  Quote,
  MapPin,
  Briefcase,
  Calendar,
  Award,
} from "lucide-react";
import BentoExpand from "./BentoExpand";
import "./BentoAbout.less";

interface WorkRow {
  company: string;
  role: string;
  span: string;
  initials: string;
  color: string;
}

const workHistory: WorkRow[] = [
  { company: "Atypica.AI",     role: "Growth Product Manager", span: "2025 — Now", initials: "A",  color: "tile-coral" },
  { company: "Zebra Tech",     role: "Product Manager",         span: "2025",       initials: "Z",  color: "tile-cyan" },
  { company: "T-Mobile",       role: "PM × Full-Stack",         span: "2024",       initials: "T",  color: "tile-magenta" },
  { company: "UW · ITM Lab",   role: "Researcher · 0→1 hardware", span: "2023–25",  initials: "UW", color: "tile-purple" },
];

const UW_PARAGRAPHS = [
  "University of Washington — M.S. in Technology Innovation (2023–2025).",
  "An interdisciplinary program where I built 0→1 products across software and hardware: from medication-adherence devices to AI-powered consumer research tools.",
  "Highlights: capstone with T-Mobile on CareLink (hypertension adherence on 5G), independent project on NFC authentication for frontline workforce, and a thesis-adjacent study on bias in synthetic-user research.",
  "Skills I leaned into here: rapid prototyping, hardware-software integration, working with engineering teams, and shipping at speed.",
];

const COLUMBIA_PARAGRAPHS = [
  "Columbia University · Barnard College — B.A. in Anthropology + Economics.",
  "A weird combination that turned out to make a lot of sense for product work: anthropology taught me to ask why people behave the way they do, economics taught me to test those intuitions with data.",
  "I spent a summer excavating in the Taos District of New Mexico, where I learned that fieldwork is mostly figuring things out with whatever's in front of you — a mindset that's served me well in startups.",
  "Senior thesis: 'From Sherds to Society — Kwahe'e Black-on-white and Social Interaction in the Taos District.'",
];

const BentoAbout = () => {
  const [openModal, setOpenModal] = useState<"uw" | "columbia" | null>(null);

  return (
    <section id="about" className="bento-section bento-about">
      <div className="bento-section__label">
        <span className="label-text">About</span>
        <span className="label-aside">01</span>
      </div>

      <div className="bento-section__grid">
        {/* Story tile */}
        <article
          className="bento-tile tile-paper about-story"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          <Quote className="about-story__mark" size={28} aria-hidden />
          <p className="about-story__lede">
            Former archaeologist, now product manager. I treat products like
            artifacts — <strong>evidence of what people actually need.</strong>
          </p>
          <p className="about-story__second">
            Across growth, B2B, and B2C, I turn early questions into clear
            directions through research, experimentation, and a lot of
            prototyping.
          </p>
        </article>

        {/* Principle (single coral accent) */}
        <article
          className="bento-tile tile-coral about-principle"
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          <p className="about-principle__quote">
            The best product decisions come from listening to{" "}
            <strong>what people actually do</strong>, not just what they say.
          </p>
          <p className="eyebrow">my design principle</p>
        </article>

        {/* Focus tags */}
        <article
          className="bento-tile tile-paper about-tags"
          style={{ "--delay": "140ms" } as React.CSSProperties}
        >
          <p className="eyebrow">What I work on</p>
          <div className="about-tags__list">
            {["Growth", "AI products", "0→1", "Strategy", "Research"].map((t) => (
              <span className="about-tags__chip" key={t}>
                {t}
              </span>
            ))}
          </div>
        </article>

        {/* Where I've worked — actual timeline */}
        <article
          className="bento-tile tile-paper about-work"
          style={{ "--delay": "200ms" } as React.CSSProperties}
        >
          <p className="eyebrow">
            <Briefcase size={11} /> Where I've worked
          </p>
          <ul className="about-work__list">
            {workHistory.map((w) => (
              <li key={w.company} className="about-work__row">
                <span className={`about-work__badge ${w.color}`}>
                  {w.initials}
                </span>
                <div className="about-work__text">
                  <p className="about-work__company">{w.company}</p>
                  <p className="about-work__role">{w.role}</p>
                </div>
                <span className="about-work__span">{w.span}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* UW — richer */}
        <article
          className="bento-tile tile-paper about-edu is-clickable"
          role="button"
          tabIndex={0}
          onClick={() => setOpenModal("uw")}
          onKeyDown={(e) => e.key === "Enter" && setOpenModal("uw")}
          style={{ "--delay": "260ms" } as React.CSSProperties}
        >
          <div className="about-edu__crest about-edu__crest--uw" aria-hidden>
            <span>W</span>
          </div>
          <div className="about-edu__body">
            <div className="about-edu__top">
              <GraduationCap size={18} />
              <p className="eyebrow"><Calendar size={11} /> 2023 – 2025</p>
            </div>
            <h3>University of Washington</h3>
            <p className="about-edu__degree">
              <Award size={12} /> M.S. Technology Innovation
            </p>
            <p className="about-edu__detail">
              Built 0→1 products across software and hardware. Capstones with
              T-Mobile (CareLink) and Zebra (frontline auth).
            </p>
            <div className="about-edu__chips">
              <span>Hardware × software</span>
              <span>Capstones</span>
              <span>Prototyping</span>
            </div>
          </div>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </article>

        {/* Columbia — richer */}
        <article
          className="bento-tile tile-paper about-edu is-clickable"
          role="button"
          tabIndex={0}
          onClick={() => setOpenModal("columbia")}
          onKeyDown={(e) => e.key === "Enter" && setOpenModal("columbia")}
          style={{ "--delay": "320ms" } as React.CSSProperties}
        >
          <div className="about-edu__crest about-edu__crest--columbia" aria-hidden>
            <span>C</span>
          </div>
          <div className="about-edu__body">
            <div className="about-edu__top">
              <Telescope size={18} />
              <p className="eyebrow"><MapPin size={11} /> NYC · Barnard College</p>
            </div>
            <h3>Columbia University</h3>
            <p className="about-edu__degree">
              <Award size={12} /> B.A. Anthropology + Economics
            </p>
            <p className="about-edu__detail">
              Learned to read human behaviour through systems and stories — and
              excavated pottery in the New Mexico desert.
            </p>
            <div className="about-edu__chips">
              <span>Anthropology</span>
              <span>Economics</span>
              <span>Fieldwork</span>
            </div>
          </div>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </article>
      </div>

      <BentoExpand
        open={openModal === "uw"}
        onClose={() => setOpenModal(null)}
        label="Education · 2023 – 2025"
        title="University of Washington"
        paragraphs={UW_PARAGRAPHS}
      />
      <BentoExpand
        open={openModal === "columbia"}
        onClose={() => setOpenModal(null)}
        label="Education · Barnard College"
        title="Columbia University"
        paragraphs={COLUMBIA_PARAGRAPHS}
      />
    </section>
  );
};

export default BentoAbout;
