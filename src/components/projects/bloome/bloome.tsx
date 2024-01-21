import React from "react";
import { useWindowDimensions } from "../../../hooks/hooks";
import { Element, Link } from "react-scroll";
import { SolutionCarousel } from "./solutionCarousel";
import solutionFull from "./../../../assets/images/bloome/solution/solution-full.png";

export const Bloome = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="project-container">
      <div className="project-title-container">
        <div className="project-title">
          <h1>Bloomè: Personalized Floral Experience at Your Fingertips</h1>
        </div>
        <div className="project-header-container">
          <div
            className="project-header-info-container"
            style={{ display: width > 600 ? "inline" : "flex" }}
          >
            <div
              style={{
                width: "45%",
                padding: "20px 20px 20px 0px",
              }}
            >
              <h3 className="bloome-header-topic-title">Domain</h3>
              <p>UX/UI</p>
              <h3 className="bloome-header-topic-title paddingTop">My Role</h3>
              <p>Project Manager</p>
            </div>
            <div style={{ width: "45%", padding: width > 600 ? 0 : "20px" }}>
              <h3 className="bloome-header-topic-title"> Skills</h3>
              <p>Competitive Analysis</p>
              <p> Usability Test</p>
              <p>User Interviews</p>
            </div>
          </div>
          <div
            className="project-header-about-container"
            style={{ width: width > 600 ? "70%" : "100%" }}
          >
            <h3 className="bloome-text-color">
              <b>Project Overview</b>
            </h3>
            <h3 className="bloome-header-topic-title"> Introduction</h3>
            <p>
              Bloomè is an innovative digital platform designed to transform the
              floral shopping experience. Recognizing that selecting the perfect
              bouquet can be a time-consuming challenge for many, Bloomè
              simplifies this process with cutting-edge features. Our unique
              selling points include: Augmented Reality (AR) Preview, Customized
              Bouquets, Weekly Delivery Service.
            </p>
            <h3 className="bloome-header-topic-title padding-top">
              Journey from concept to creation
            </h3>
            <p>
              Over an intense month of design and development, Bloomè evolved
              from a mere idea to a user-centric platform. The process was
              anchored in deep empathy for our users. We engaged in innovative
              empathy exercises, like 'A Day in the Life' of potential
              customers, to truly understand their floral shopping challenges.
              Ideation sessions were vibrant and diverse, employing techniques
              like "Crazy 8's" to stimulate creativity. Prototyping was
              iterative, with each version informed by rigorous usability
              testing. This process ensured that every feature of Bloomè was
              fine-tuned to meet the users' needs and desires.
            </p>
          </div>
        </div>
      </div>

      <div className="table-content-container">
        <div className="table-content">
          <Link
            className="table-content-item"
            to="solution"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="bloome-text-color"> Solution </h3>
          </Link>
          <Link
            className="table-content-item"
            to="process"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="bloome-text-color"> Process </h3>
          </Link>
          <Link
            className="table-content-item"
            to="emphasize"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="bloome-text-color"> Emphasize </h3>
          </Link>
          <Link
            className="table-content-item"
            to="define"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="bloome-text-color"> Define </h3>
          </Link>
          <Link
            className="table-content-item"
            to="ideate"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="bloome-text-color">Ideate</h3>
          </Link>
          <Link
            className="table-content-item"
            to="prototype"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="bloome-text-color"> Prototype </h3>
          </Link>
          <Link
            className="table-content-item"
            to="test"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="bloome-text-color"> Test </h3>
          </Link>
        </div>
        <div className="table-content-text">
          <div className="bloome-body">
            <Element name="solution">
              <h3 className="bloome-body-title"> Solution </h3>
            </Element>

            <h2 className="bloome-logo-text"> Bloomè </h2>
            <p className="bloome-body-subtitle">
              When Floristry Meets Innovation - Craft Your Perfect Bouquet with
              a Touch of Tech.
            </p>
            <img
              src={solutionFull}
              width={"100%"}
              alt={"blome solution image"}
            />
            <SolutionCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};
