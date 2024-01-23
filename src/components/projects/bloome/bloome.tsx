import React from "react";
import { useWindowDimensions } from "../../../hooks/hooks";
import { Element, Link } from "react-scroll";
import { SolutionCarousel } from "./solutionCarousel";
import solutionFull from "./../../../assets/images/bloome/solution/solution-full.png";
import { ProcessElement } from "./processElement";
import { SolutionDesign1 } from "./solutionDesign1";
import { SolutionDesign2 } from "./solutionDesign2";
import persona1Journey from "./../../../assets/images/bloome/emphasize/persona1Journey.png";
import persona2Journey from "./../../../assets/images/bloome/emphasize/persona2Journey.png";

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
          <div className="bloome-body">
            <Element name="process">
              <h3 className="bloome-body-title"> Process </h3>
            </Element>

            <div className="bloome-process-container">
              <ProcessElement
                text="emphasize"
                description={["persona", "user journey map"]}
              />
              <ProcessElement
                text="define"
                description={["problem statement"]}
              />
              <ProcessElement
                text="ideate"
                description={["competitor audit", "ideation"]}
              />
              <ProcessElement
                text="prototype"
                description={["user flow", "wireframes"]}
              />
              <ProcessElement
                text="test"
                description={["usability test", "insights"]}
              />
            </div>
          </div>
          <div className="bloome-body">
            <Element name="emphasize">
              <h3 className="bloome-body-title">
                Emphasize : Understand the Users
              </h3>
            </Element>
            <h3 className="bloome-header-topic-title">
              <b> Persona</b>
            </h3>
            <div className="bloome-body-description">
              <p>
                In our exploration of the bouquet shopping experience, we
                discovered a universal challenge among our customers:{" "}
                <b>
                  the significant time invested in selecting the right bouquet
                </b>
                . Whether it's for personal aesthetics or as a thoughtful gift,
                customers seek a balance between beauty and efficiency. This is
                especially true for those who frequently purchase flowers to
                enhance their living spaces or for regular gifting but are
                time-constrained.
              </p>
              <p className="paddingTop">
                To capture these insights, we crafted two personas based on our
                initial research. These personas represent our primary customer
                segments: one who desires to seamlessly incorporate floral
                elegance into their lifestyle and another who looks for
                exceptional, yet straightforward choices for special occasions.
                These personas are at the heart of our design process, ensuring
                our app resonates with and caters to the diverse needs of our
                customers.
              </p>
            </div>
            <SolutionDesign1 />
            <SolutionDesign2 />

            <h3 className="bloome-body-title">USER JOURNEY MAP</h3>
            <h3 className="bloome-emphasize-user-title yellow">
              <b>Emily Chen </b>
            </h3>
            <h3>
              Goal: To effortlessly integrate stylish floral arrangements into
              her dynamic urban lifestyle.
            </h3>
            <img
              src={persona1Journey}
              width={"100%"}
              alt={"bloome persona 1 journey image"}
            />
            <h3 className="bloome-emphasize-user-title blue">
              <b>David Martinez </b>
            </h3>
            <h3>
              Goal: To find and purchase unique, high-quality bouquets for
              special occasions without the hassle of decision-making.
            </h3>
            <img
              src={persona2Journey}
              width={"100%"}
              alt={"bloome persona 2 journey image"}
            />
          </div>
          <div className="bloome-body">
            <Element name="define">
              <h3 className="bloome-body-title">
                <b>define: problem statements</b>
              </h3>
            </Element>
            <p>
              In the bustling urban environment, time-pressed consumers struggle
              to find convenient, swift, and personalized ways to purchase and
              enjoy floral arrangements. Despite the availability of online
              flower delivery services,{" "}
              <b>
                there exists a gap in the market for a digital solution that
                combines the efficiency of technology with the personal touch of
                a florist's expertise
              </b>
              . Customers, particularly those with an eye for design and
              aesthetics, often face challenges in visualizing how these
              bouquets will complement their living spaces before making a
              purchase.
            </p>
            <h2 className="bloome-body-subtitle-2">
              How might we enable busy consumers to easily choose and visualize
              BOUQUETS through a mobile app?
            </h2>
            <p>
              Therefore, the Bloomè app aims to address these needs by providing
              an innovative platform that allows customers to quickly and
              effortlessly select, customize, and preview floral arrangements
              within the context of their own environment, ensuring satisfaction
              with both the process and the final product.
            </p>
          </div>
          <div className="bloome-body">
            <Element name="ideate">
              <h3 className="bloome-body-title">
                <b>IDEATE: COMPETITOR ANALYSIS & BRAINSTORMING </b>
              </h3>
            </Element>
            <h3 className="bloome-body-title">COMPETITOR AUDIT</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
