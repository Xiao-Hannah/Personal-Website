import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import nmImage from "@/assets/images/newmexico.jpg";
import "./BentoFun.less";

const BentoFun = () => {
  const navigate = useNavigate();

  return (
    <section id="for-fun" className="bento-section bento-fun">
      <div className="bento-section__grid">
        <button
          type="button"
          className="bento-tile fun-cta is-clickable"
          onClick={() => navigate("/for-fun")}
        >
          <div className="fun-cta__cover" aria-hidden>
            <img src={nmImage} alt="" className="fun-cta__cover-img" />
          </div>
          <div className="fun-cta__text">
            <p className="eyebrow">Side quests</p>
            <h3>Outside the Office</h3>
          </div>
          <span className="fun-cta__arrow">
            <ArrowUpRight size={18} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default BentoFun;
