import { useNavigate } from "react-router-dom";
import { ArrowUpRight, BookOpen, Camera, Plane } from "lucide-react";
import thesis from "@/assets/files/thesis.pdf";
import photo1 from "@/assets/images/photography/photography1.jpg";
import photo3 from "@/assets/images/photography/photography3.jpeg";
import photo5 from "@/assets/images/photography/photography5.jpg";
import photo7 from "@/assets/images/photography/photography7.jpg";
import travel1 from "@/assets/images/travelling/travelling1.jpg";
import travel3 from "@/assets/images/travelling/travelling3.jpeg";
import "./BentoFun.less";

const BentoFun = () => {
  const navigate = useNavigate();

  return (
    <section id="for-fun" className="bento-section bento-fun">
      <div className="bento-section__label">
        <span className="label-text">For Fun</span>
        <span className="label-aside">04</span>
      </div>

      <div className="bento-section__grid">
        {/* Thesis — feature paper preview */}
        <a
          href={thesis}
          target="_blank"
          rel="noopener noreferrer"
          className="bento-tile tile-paper fun-thesis"
        >
          <div className="fun-thesis__paper" aria-hidden>
            <div className="fun-thesis__journal">
              The Columbia Anthropology Review · 2022
            </div>
            <p className="fun-thesis__title">
              From Sherds to Society
            </p>
            <p className="fun-thesis__subtitle">
              Kwahe'e Black-on-white and Social Interaction in the Taos District
            </p>
            <p className="fun-thesis__byline">Hannah Xiao · Senior Thesis</p>
            <div className="fun-thesis__cols">
              <div className="fun-thesis__col">
                <span className="fun-thesis__heading" />
                <span className="fun-thesis__line w-95" />
                <span className="fun-thesis__line w-90" />
                <span className="fun-thesis__line w-100" />
                <span className="fun-thesis__line w-85" />
                <span className="fun-thesis__line w-92" />
                <span className="fun-thesis__line w-80" />
                <span className="fun-thesis__line w-70" />
                <span className="fun-thesis__heading" />
                <span className="fun-thesis__line w-100" />
                <span className="fun-thesis__line w-88" />
              </div>
              <div className="fun-thesis__col">
                <span className="fun-thesis__line w-92" />
                <span className="fun-thesis__line w-86" />
                <span className="fun-thesis__line w-100" />
                <span className="fun-thesis__shard" />
                <span className="fun-thesis__line w-80" />
                <span className="fun-thesis__line w-95" />
                <span className="fun-thesis__heading" />
                <span className="fun-thesis__line w-90" />
                <span className="fun-thesis__line w-100" />
                <span className="fun-thesis__line w-70" />
              </div>
            </div>
          </div>
          <div className="fun-thesis__caption">
            <div>
              <p className="eyebrow"><BookOpen size={11} /> Senior Thesis</p>
              <h3>Archaeological Thesis</h3>
              <p className="fun-thesis__desc">
                A study of Kwahe'e Black-on-white pottery and social interaction
                in the Taos District.
              </p>
            </div>
            <span className="fun-thesis__cta">PDF · Open</span>
          </div>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </a>

        {/* Photography mosaic */}
        <article
          className="bento-tile fun-photo"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          <div className="fun-photo__mosaic" aria-hidden>
            <img src={photo1} alt="" />
            <img src={photo3} alt="" />
            <img src={photo5} alt="" />
            <img src={photo7} alt="" />
          </div>
          <div className="fun-photo__overlay">
            <Camera size={20} />
            <h3>Photography</h3>
            <p>One frame at a time, around the world.</p>
          </div>
        </article>

        {/* Travel mosaic */}
        <article
          className="bento-tile fun-travel"
          style={{ "--delay": "160ms" } as React.CSSProperties}
        >
          <div className="fun-travel__mosaic" aria-hidden>
            <img src={travel1} alt="" />
            <img src={travel3} alt="" />
          </div>
          <div className="fun-travel__overlay">
            <Plane size={20} />
            <h3>Travelling</h3>
            <p>Always plotting the next adventure.</p>
          </div>
        </article>

        {/* CTA */}
        <button
          type="button"
          className="bento-tile tile-coral fun-cta is-clickable"
          onClick={() => navigate("/for-fun")}
          style={{ "--delay": "220ms" } as React.CSSProperties}
        >
          <p className="eyebrow">Side quests</p>
          <h3>
            See the
            <br />
            full gallery.
          </h3>
          <span className="fun-cta__arrow">
            <ArrowUpRight size={20} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default BentoFun;
