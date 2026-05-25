import { useNavigate } from "react-router-dom";
import { ArrowUpRight, BookOpen, Camera, Plane } from "lucide-react";
import thesis from "@/assets/files/thesis.pdf";
import nmImage from "@/assets/images/newmexico.jpg";
import bookCover from "@/assets/images/annie2.webp";

const NOW_READING = {
  title: "A Woman's Story",
  author: "Annie Ernaux",
  progress: 35,
};
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
          <div className="fun-thesis__cover" aria-hidden>
            <img src={nmImage} alt="" className="fun-thesis__cover-img" />
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

        {/* Reading */}
        <article className="bento-tile tile-paper fun-reading">
          <p className="eyebrow fun-reading__eyebrow"><BookOpen size={11} /> Reading</p>
          <div className="fun-reading__book" aria-hidden>
            <img src={bookCover} alt="" className="fun-reading__cover-img" />
            <div className="fun-reading__spine" />
          </div>
          <div className="fun-reading__meta">
            <p className="fun-reading__title">{NOW_READING.title}</p>
            <p className="fun-reading__author">{NOW_READING.author}</p>
            <div className="fun-reading__progress" aria-hidden>
              <div className="fun-reading__progress-bar">
                <span style={{ width: `${NOW_READING.progress}%` }} />
              </div>
              <span className="fun-reading__progress-label">
                {NOW_READING.progress}% complete
              </span>
            </div>
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
