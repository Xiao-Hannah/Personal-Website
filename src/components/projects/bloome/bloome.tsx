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
import competitor from "./../../../assets/images/bloome/ideate/competitor.png";
import userFlow from "./../../../assets/images/bloome/prototype/userflow.png";
import lowFidelity from "./../../../assets/images/bloome/prototype/lowFidelity.png";
import { HighFidelity } from "./highFidelity";

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
            style={{
              display: width < 1350 ? "grid" : width > 600 ? "inline" : "flex",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div
              style={{
                width: "45%",
                padding: width > 1350 ? 0 : "20px 20px 20px 0px",
              }}
            >
              <h3 className="bloome-header-topic-title">Domain</h3>
              <p>UX/UI</p>
              <h3 className="bloome-header-topic-title paddingTop">My Role</h3>
              <p>Project Manager</p>
            </div>
            <div style={{ width: "45%", padding: width > 1350 ? 0 : "20px" }}>
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
            <h3 className="bloome-header-topic-title">
              <b>Introduction</b>
            </h3>
            <p>
              Bloomè is an innovative digital platform designed to transform the
              floral shopping experience. Recognizing that selecting the perfect
              bouquet can be a time-consuming challenge for many, Bloomè
              simplifies this process with cutting-edge features. Our unique
              selling points include: Augmented Reality (AR) Preview, Customized
              Bouquets, Weekly Delivery Service.
            </p>
            <h3 className="bloome-header-topic-title padding-top">
              <b>Journey from concept to creation</b>
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
            to="reflection"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="bloome-text-color"> Reflection </h3>
          </Link>
        </div>
        <div className="table-content-text">
          <div className="bloome-body">
            <Element name="solution">
              <h3 className="bloome-body-title">
                <b>Solution </b>
              </h3>
            </Element>
            <p className="bloome-body-subtitle">
              When Floristry Meets Innovation - Craft Your Perfect Bouquet with
              a Touch of Tech.
            </p>
            <h2 className="bloome-logo-text"> Bloomè </h2>
            <img
              src={solutionFull}
              width={"100%"}
              alt={"blome solution image"}
            />
            <SolutionCarousel />
          </div>
          <div className="bloome-body removePadding">
            <Element name="process">
              <h3 className="bloome-body-title">
                <b>Process</b>
              </h3>
            </Element>

            <div className="bloome-process-container paddingTop">
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
                <b>Emphasize : Understand the Users</b>
              </h3>
            </Element>
            <h3 className="bloome-header-topic-title">Persona</h3>
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

            <h3 className="bloome-body-title paddingTop-section">
              <b>USER JOURNEY MAP</b>
            </h3>
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
          <div className="bloome-body removePadding">
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
            <img
              src={competitor}
              width={"100%"}
              alt={"bloome ideate competitor"}
              className="paddingTop"
            />
            <div>
              <h3 className="bloome-body-title">Key Findings</h3>
              <p>
                In our competitive audit of renowned florists, we uncovered key
                opportunities to enhance the mobile bouquet shopping experience:
              </p>

              <h3>Limited Mobile Experience</h3>
              <p className="removeMargin">
                Most florists have not yet embraced mobile apps, unveiling a
                chance to simplify ordering for on-the-go flower enthusiasts.
              </p>
              <h3>Refined Interfaces</h3>
              <p className="removeMargin">
                Each brand showcases a polished interface, yet stands out with
                its own accessibility-boosting features.
              </p>
              <h3>Universal Pain Points</h3>
              <p className="removeMargin">
                A common thread is the need for bouquet previews and detailed
                size guides to assist customers in their selection process.
              </p>
            </div>
          </div>
          <div className="bloome-body">
            <Element name="prototype">
              <h3 className="bloome-body-title">
                <b>PROTOTYPE: USER FLOW & WIREFRAMES </b>
              </h3>
            </Element>
            <h3 className="bloome-body-title">USER FLOW</h3>
            <img
              src={userFlow}
              width={"100%"}
              alt={"bloome prototype userflow"}
              className="paddingTop"
            />
            <h3 className="bloome-body-title">LOW-FIDELITY WIREFRAMES</h3>
            <img
              src={lowFidelity}
              width={"100%"}
              alt={"bloome prototype userflow"}
              className="paddingTop"
            />
            <h3 className="bloome-body-title paddingTop">HIGH-FIDELITY WIREFRAMES</h3>
            <HighFidelity />
          </div>
          <div className="bloome-body">
            <Element name="reflection">
              <h3 className="bloome-body-title">
                <b>Reflection </b>
              </h3>
            </Element>
            <p>
              As a case study for the Google UX Design Professional Certificate
              course,{" "}
              <b>
                I independently navigated through all phases of the design
                process, including Empathize, Define, Ideate, Prototype, and
                Iterate
              </b>
              . My journey with Bloomè involved creating personas, defining the
              problem statement, conducting competitor audits, and engaging in
              iterative prototyping. One of the project's highlights is its
              unique features like Augmented Reality (AR) Preview, Customized
              Bouquets, and a Weekly Delivery Service, all aimed at streamlining
              the bouquet selection process for users.
            </p>
            <p>
              Embarking on this project as a first-timer, particularly with
              Figma, I not only developed my technical skills but also gained a
              deep understanding of the human-centered design process.{" "}
              <b>
                A key learning was the importance of balancing attention to
                detail with the overall completion of the project
              </b>
              . Initially, I found myself immersed in refining low-fidelity
              prototypes, which, although valuable, were subject to significant
              changes during the iteration phase. This experience taught me the
              crucial lesson of focusing on broader project goals while also
              appreciating the intricacies of design details. Bloomè, through
              its innovative approach and my contributions, stands as a
              testament to the potential of thoughtful UX design in transforming
              everyday experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
