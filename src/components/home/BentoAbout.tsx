import { useState, ReactNode } from "react";
import { ArrowUpRight, Quote } from "lucide-react";
import BentoExpand from "./BentoExpand";
import "./BentoAbout.less";

// ─────────────────────────────────────────────────────────────────────────────
// Principle modal content
// ─────────────────────────────────────────────────────────────────────────────
const PRINCIPLE_CONTROL_PARAGRAPHS: ReactNode[] = [
  <>
    Most of the products I'm drawn to solve{" "}
    <span className="accent accent--amber">moments of uncertainty</span> — when
    users are overwhelmed by information and unsure what to do next.
  </>,
  <>
    Great products don't remove complexity entirely, but they make complexity{" "}
    <span className="accent accent--amber">understandable</span>. They break a
    difficult problem into something people can navigate with confidence.
  </>,
  <>
    I'm interested in products that help people move from{" "}
    <span className="accent accent--amber">confusion to clarity</span>. To me,
    product management is about seeking what truly matters to users and building
    tools that make the next step feel obvious and achievable.
  </>,
];

const PRINCIPLE_AI_PARAGRAPHS: ReactNode[] = [
  <>
    I'm most interested in AI products that help people work through complicated
    problems and arrive at{" "}
    <span className="accent accent--indigo">better decisions</span>.
  </>,
  <>
    The goal isn't for AI to replace human thinking, but to make it easier for
    people to understand a situation and{" "}
    <span className="accent accent--indigo">decide what to do next</span>.
  </>,
  <>
    When AI is designed well, it feels less like an answer machine and more like
    a <span className="accent accent--indigo">useful partner</span> — helping
    people move faster and with more confidence, while keeping them in control
    of the final decision.
  </>,
];

type ModalKey = "principle-control" | "principle-ai";

const BentoAbout = () => {
  const [openModal, setOpenModal] = useState<ModalKey | null>(null);

  return (
    <section id="about" className="bento-section bento-about">
      <div className="bento-section__label">
        <span className="label-text">About</span>
        <span className="label-aside">01</span>
      </div>

      <div className="bento-section__grid">
        {/* Principle · Control */}
        <article
          className="bento-tile tile-paper about-principle is-clickable"
          role="button"
          tabIndex={0}
          onClick={() => setOpenModal("principle-control")}
          onKeyDown={(e) =>
            e.key === "Enter" && setOpenModal("principle-control")
          }
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          <Quote className="about-principle__mark" size={22} aria-hidden />
          <p className="about-principle__quote">
            Great products give people a{" "}
            <span className="about-principle__grad about-principle__grad--amber">
              sense of control
            </span>
            .
          </p>
          <p className="eyebrow about-principle__eyebrow">
            my product principle
          </p>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </article>

        {/* Principle · AI */}
        <article
          className="bento-tile tile-paper about-principle is-clickable"
          role="button"
          tabIndex={0}
          onClick={() => setOpenModal("principle-ai")}
          onKeyDown={(e) =>
            e.key === "Enter" && setOpenModal("principle-ai")
          }
          style={{ "--delay": "60ms" } as React.CSSProperties}
        >
          <Quote className="about-principle__mark" size={22} aria-hidden />
          <p className="about-principle__quote">
            AI should make people{" "}
            <span className="about-principle__grad about-principle__grad--indigo">
              feel more capable
            </span>
            .
          </p>
          <p className="eyebrow about-principle__eyebrow">
            my product principle
          </p>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </article>
      </div>

      <BentoExpand
        open={openModal === "principle-control"}
        onClose={() => setOpenModal(null)}
        variant="prose"
        label="My product principle"
        title="Great products give people a sense of control."
        paragraphs={PRINCIPLE_CONTROL_PARAGRAPHS}
      />
      <BentoExpand
        open={openModal === "principle-ai"}
        onClose={() => setOpenModal(null)}
        variant="prose"
        label="My product principle"
        title="AI should make people feel more capable."
        paragraphs={PRINCIPLE_AI_PARAGRAPHS}
      />
    </section>
  );
};

export default BentoAbout;
