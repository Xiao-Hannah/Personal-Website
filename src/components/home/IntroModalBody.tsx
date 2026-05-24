import { useState } from "react";
import { MapPin, GraduationCap } from "lucide-react";
import profileImage from "@/assets/images/profile/profile_2.jpg";
import "./BentoAbout.less";

/**
 * Shared "About Hannah" modal body — rendered inside <BentoExpand body={...} />.
 * Includes avatar, lede, and a TL;DR / Detailed segmented toggle.
 */
const IntroModalBody = () => {
  const [view, setView] = useState<"tldr" | "detailed">("tldr");

  return (
    <div className="about-modal">
      <img
        src={profileImage}
        alt="Hannah Xiao"
        className="about-modal__avatar"
      />

      <p className="about-modal__lede">
        My name is Hannah, a product builder who loves turning{" "}
        <span className="accent accent--coral">vague ideas</span> into things
        people can actually use.
      </p>

      <div className="about-modal__toggle" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={view === "tldr"}
          className={`about-modal__toggle-btn${
            view === "tldr" ? " is-active" : ""
          }`}
          onClick={() => setView("tldr")}
        >
          TL;DR
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={view === "detailed"}
          className={`about-modal__toggle-btn${
            view === "detailed" ? " is-active" : ""
          }`}
          onClick={() => setView("detailed")}
        >
          Detailed
        </button>
      </div>

      {view === "tldr" ? (
        <div className="about-modal__content about-modal__content--tldr">
          <div className="about-modal__block">
            <p className="about-modal__block-label">
              <MapPin size={12} /> Currently
            </p>
            <p className="about-modal__block-title">
              <span className="accent accent--amber">Seattle, WA</span>
            </p>
            <p className="about-modal__block-body">
              Building products and testing new ideas.
            </p>
          </div>

          <div className="about-modal__block">
            <p className="about-modal__block-label">
              <GraduationCap size={12} /> Previously
            </p>

            <div className="about-modal__school">
              <p className="about-modal__block-title">
                <span className="accent accent--purple">
                  University of Washington
                </span>
              </p>
              <p className="about-modal__block-degree">
                M.S. in Technology Innovation
              </p>
              <p className="about-modal__block-body">
                Built 0→1 products across software and hardware.
              </p>
            </div>

            <div className="about-modal__school">
              <p className="about-modal__block-title">
                <span className="accent accent--blue">
                  Columbia University
                </span>{" "}
                <span className="about-modal__block-sub">(Barnard College)</span>
              </p>
              <p className="about-modal__block-degree">
                B.A. in Anthropology and Economics
              </p>
              <p className="about-modal__block-body">
                Became fascinated by human behavior, systems, and the stories
                hidden in data and artifacts.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="about-modal__content about-modal__content--detailed">
          <p>
            I studied{" "}
            <span className="accent accent--amber">archaeology and economics</span>
            , which shaped how I think. Archaeology taught me to piece together
            stories from fragments of evidence and to stay curious about why
            people behave the way they do. I learned in economics classes to
            test those instincts with data. When I was excavating in the New
            Mexico desert, I got comfortable getting my hands dirty and figuring
            things out in the field. In many ways, I'm still doing the same
            thing today, just with prototypes instead of pottery shards. To
            become a more technical product builder, I later earned a Master's
            in{" "}
            <span className="accent accent--purple">Technology Innovation</span>{" "}
            from the University of Washington.
          </p>
          <p>
            I've worked on both consumer and enterprise products, from workforce
            software to AI-powered consumer insights. What I enjoy most is
            taking a messy problem, talking to users, digging into the data,
            and helping a team{" "}
            <span className="accent accent--coral">
              figure out what to build next
            </span>
            . I love that moment when something that felt fuzzy suddenly clicks
            and everyone is moving in the same direction.
          </p>
          <p>
            I believe the best products come from{" "}
            <span className="accent accent--coral">
              really understanding people
            </span>
            . I'm happiest when the problem is still unclear and there's no
            obvious answer yet. Lately, I've become especially interested in
            the intersection of{" "}
            <span className="accent accent--indigo">product and growth</span>.
            Building something useful is only half the job — the other half is
            figuring out how to explain it in a way that makes people want to
            try it and keep coming back.
          </p>
        </div>
      )}
    </div>
  );
};

export default IntroModalBody;
