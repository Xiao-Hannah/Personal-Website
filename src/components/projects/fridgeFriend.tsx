import React from "react";
import "./fridgeFriend.less";
import "./tablecontent.less";
import compost1 from "./../../assets/images/fridgeFriend/ideation/Ideation-2-1.png";
import compost2 from "./../../assets/images/fridgeFriend/ideation/Ideation-2-2.png";
import hiFi from "./../../assets/images/fridgeFriend/hi-fi.png";
import stickyNotes from "./../../assets/images/fridgeFriend/stickynote.png";
import supermarket from "./../../assets/images/fridgeFriend/supermarket.png";
import fridge from "./../../assets/images/fridgeFriend/fridge.png";
import couch from "./../../assets/images/fridgeFriend/couch.png";
import kitchen from "./../../assets/images/fridgeFriend/kitchen.png";
import avo1 from "./../../assets/images/fridgeFriend/avo1.jpg";
import avo2 from "./../../assets/images/fridgeFriend/avo2.jpg";
import avo3 from "./../../assets/images/fridgeFriend/avo3.jpg";
import avo4 from "./../../assets/images/fridgeFriend/avo4.jpg";
import avo5 from "./../../assets/images/fridgeFriend/avo5.jpg";
import avo6 from "./../../assets/images/fridgeFriend/avo6.jpg";
import avo7 from "./../../assets/images/fridgeFriend/avo7.jpg";
import solution1 from "./../../assets/images/fridgeFriend/solution/solution-1.png";
import solution2 from "./../../assets/images/fridgeFriend/solution/solution-2.png";
import solution3 from "./../../assets/images/fridgeFriend/solution/solution-3.png";
import solution4 from "./../../assets/images/fridgeFriend/solution/solution-4.png";
import ideation1_1 from "./../../assets/images/fridgeFriend/ideation/Ideation-1-1.png";
import ideation1_2 from "./../../assets/images/fridgeFriend/ideation/Ideation-1-2.png";
import ideation1_3 from "./../../assets/images/fridgeFriend/ideation/Ideation-1-3.png";
import ideation3_1 from "./../../assets/images/fridgeFriend/ideation/Ideation-3-1.png";
import ideation3_2 from "./../../assets/images/fridgeFriend/ideation/Ideation-3-2.png";
import ideation3_3 from "./../../assets/images/fridgeFriend/ideation/Ideation-3-3.png";
import evaluation1 from "./../../assets/images/fridgeFriend/testing/Evaluation-1.png";
import evaluation2 from "./../../assets/images/fridgeFriend/testing/Evaluation-2.png";
import evaluation3 from "./../../assets/images/fridgeFriend/testing/Evaluation-3.png";
import arrow from "./../../assets/images/fridgeFriend/ideation/arrow.svg";
import arrow2 from "./../../assets/images/fridgeFriend/ideation/arrow2.svg";
import arrow3 from "./../../assets/images/fridgeFriend/ideation/arrow3.svg";
import iteration1 from "./../../assets/images/fridgeFriend/iteration/1.png";
import iteration2 from "./../../assets/images/fridgeFriend/iteration/2.png";
import iteration3 from "./../../assets/images/fridgeFriend/iteration/3.png";
import iteration4 from "./../../assets/images/fridgeFriend/iteration/4.png";
import iteration5 from "./../../assets/images/fridgeFriend/iteration/5.png";
import iteration6 from "./../../assets/images/fridgeFriend/iteration/6.png";
import iteration7 from "./../../assets/images/fridgeFriend/iteration/7.png";
import { Element, Link } from "react-scroll";
import { useWindowDimensions } from "../../hooks/hooks";

interface UserTestObject {
  image: string;
  title: string;
  titleColor: string;
  description: string[];
}

const userTestObjects: UserTestObject[] = [
  {
    image: evaluation1,
    title: "Mike",
    titleColor: "#f4d12b",
    description: [
      "24 years old",
      "Lives in NYC for more than 6 years",
      "Cooks daily due to his home0base working style",
      "Rational buyer with a strong focus on utility in purchasing decisions",
    ],
  },
  {
    image: evaluation2,
    title: "Lauren",
    titleColor: "#a7cdf4",
    description: [
      "35 years old",
      "Lived in NYC for 10 years",
      "Love cooking and jogging in her spare time",
      "Pursue a quality and healthy lifestyle",
    ],
  },
  {
    image: evaluation3,
    title: "Adam, John, and Jane",
    titleColor: "#ceafd8",
    description: [
      "Early 20s",
      "New residents in NYC",
      "Half of them live off-campus",
      "Most of them don't cook, but are aware of the food waste issue in school cafeteria",
      "Passionate in sustainability and innovation",
    ],
  },
];

interface PhoneImageObject {
  image: string;
  title: string;
}

interface UserExperienceObject {
  title: string;
  description: string;
  image: string;
  phoneImages: PhoneImageObject[];
}
const userExperienceObjects: UserExperienceObject[] = [
  {
    title: "Live View of Fridge Contents",
    description:
      "Joy uses her phone to check her grocery list in the supermarket, guided efficiently by her FridgeFriend app which syncs with her fridge at home.",
    phoneImages: [
      {
        title: "Home Page",
        image: iteration1,
      },
      {
        title: "Inside Fridge",
        image: iteration2,
      },
    ],
    image: supermarket,
  },
  {
    title: "Notification of Near-Expiry Food",
    description:
      "Relaxing at home, she receives an alert from the app, prompting her to easily order fresh milk before her current supply expires.",
    phoneImages: [
      {
        title: "Notification",
        image: iteration3,
      },
      {
        title: "Expiration Alert",
        image: iteration4,
      },
    ],
    image: fridge,
  },
  {
    title: "Automatic Restocking Feature",
    description:
      "She greets a delivery of fresh produce at her door, auto-restocked by FridgeFriend, ensuring she always has fresh ingredients on hand.",
    phoneImages: [
      {
        title: "Grocery",
        image: iteration5,
      },
      {
        title: "Restocking",
        image: iteration6,
      },
    ],
    image: couch,
  },
  {
    title: "Smart Recipe Generator",
    description:
      "In her kitchen, she follows a FridgeFriend recipe on her phone, using ingredients the app knows she has, for a delicious, no-waste meal.",
    phoneImages: [
      {
        title: "recipe",
        image: iteration7,
      },
    ],
    image: kitchen,
  },
];

const avoImages: string[] = [avo1, avo2, avo3, avo4, avo5, avo6, avo7];

export const FridgeFriend = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div className="fridgeFriend-container">
      <div className="fridgeFriend-title">
        <div className="fridgeFriend-title-container">
          <h1>
            Fridge Friend: AI-Powered camera that revolutionize your kitchen
          </h1>
        </div>
        <div className="fridgeFriend-header-container">
          <div className="fridgeFriend-header-info-container">
            <div style={{ width: "45%", padding: "20px 20px 20px 0px" }}>
              <h3>Domain</h3>
              <p>UX/UI</p>
              <h3> Team </h3>
              <p>Hannah Xiao</p>
              <p>Alex Deli-Ivanov</p>
              <p>Lydia Claire Futrell</p>
              <p>Jing Cheng</p>
            </div>
            <div style={{ width: "45%", padding: "20px" }}>
              <h3> Skills</h3>
              <p>Primary Research</p>
              <p>Competitive Analysis</p>
              <p> Digital Ethnography Research</p>
              <p> Stakeholder + User Interviews</p>
            </div>
          </div>
          <div className="fridgeFriend-header-about-container">
            <h3 className="fridgeFriend-header-about-title">
              Project Overview
            </h3>
            <p>
              Food wastage is a growing concern. With nearly 40% of food in the
              U.S. being wasted and families losing approximately $1,500 a year
              on thrown-out groceries, we are constantly seeking ways to save
              both time and money. This is where{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=y9LqWhmTMeQ"
                className="fridgeFriend-link"
              >
                FridgeFriend
              </a>{" "}
              steps in, revolutionizing the way we interact with our kitchen.
            </p>

            <p>
              Over the course of a semester, our team developed a mobile
              application coupled with a 3D digital twin, transforming the
              kitchen experience. As the project leader, I spearheaded the
              integration of a user-friendly interface with practical product
              design. Key feature include: Auto-Restocking, Automatic Recipe
              Generator, and In-Fridge Camera System.
            </p>

            <p>
              FridgeFriend was met with enthusiastic feedback during our final
              presentation, particularly because it simplifies the
              decision-making process, making sustainable living both intuitive
              and effortless.
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
            <h3 className="fridge-friend-table-content-text"> Solution </h3>
          </Link>
          <Link
            className="table-content-item"
            to="process"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="fridge-friend-table-content-text"> Process </h3>
          </Link>
          <Link
            className="table-content-item"
            to="ideation"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="fridge-friend-table-content-text"> Ideation </h3>
          </Link>
          <Link
            className="table-content-item"
            to="userTesting"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="fridge-friend-table-content-text"> User Testing </h3>
          </Link>
          <Link
            className="table-content-item"
            to="iteration"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="fridge-friend-table-content-text"> Iteration </h3>
          </Link>
        </div>
        <div className="table-content-text">
          <div className="fridgeFriend-body">
            <Element name="solution">
              <h3 className="fridgeFriend-body-title"> Solution </h3>
            </Element>
            <h2 className="fridgeFriend-body-subtitle">
              An innovative solution to create a convenient lifestyle that
              reduces waste and saves money.
            </h2>
            <p className="fridgeFriend-body-description paddingTop">
              FridgeFriend is a groundbreaking solution that redefines kitchen
              efficiency. By integrating in-fridge cameras with smart
              technology, it tracks and manages your groceries, alerting you to
              use items before they expire. Coupled with an automatic recipe
              generator and a smart shopping assistant, it not only minimizes
              food waste but also streamlines your grocery planning and
              shopping, making kitchen management effortless and sustainable.
            </p>
            <div className="fridgeFriend-solution-container">
              <div>
                <h3 className="fridgeFriend-body-topic-title"> Mobile App</h3>
                <img
                  src={solution1}
                  alt={"solution1-image"}
                  style={{ maxHeight: "450px" }}
                />
              </div>
              <div>
                <h3 className="fridgeFriend-body-topic-title"> Digital Twin</h3>
                <div className="fridgeFriend-solution-twin">
                  <div className="fridgeFriend-solution-twin-1">
                    <img
                      src={solution2}
                      alt={"solution2-image"}
                      style={{ maxHeight: "300px" }}
                    />
                    <img
                      src={solution3}
                      alt={"solution3-image"}
                      style={{ maxHeight: "300px" }}
                    />
                  </div>
                  <img
                    src={solution4}
                    alt={"solution4-image"}
                    style={{ padding: "5px" }}
                  />
                </div>
              </div>
            </div>
            <div className="fridgeFriend-solution-chat paddingTop">
              <div className="fridgeFriend-solution-chat-row">
                <div className="fridgeFriend-solution-chat-box box-design1">
                  <p>
                    "This is super cool! My CS brain filling in some of the tech
                    gaps and this feels pretty believable."
                  </p>
                </div>

                <div className="fridgeFriend-solution-chat-box box-design2">
                  <p>"Interesting product design."</p>
                </div>
              </div>
              <div className="fridgeFriend-solution-chat-row">
                <div className="fridgeFriend-solution-chat-box box-design3">
                  <p>
                    "I like that it's a more affordable version of a smart
                    fridge."
                  </p>
                </div>

                <div className="fridgeFriend-solution-chat-box box-design4">
                  <p>
                    "I like how it can be used in not only fridges but other
                    places too."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fridgeFriend-body">
            <Element name="process">
              <h3 className="fridgeFriend-body-title"> Process </h3>
            </Element>
            <h2 className="fridgeFriend-body-subtitle">
              How to make New York a more sustainable city?
            </h2>
            <div className="fridgeFriend-body-description paddingTop">
              <p>
                In addressing New York City's multifaceted sustainability
                challenges, including high carbon emissions and substantial
                waste management issues, our group has chosen to concentrate on
                food waste.
              </p>
            </div>
            <div className="fridgeFriend-body-description paddingTop">
              <h3 className="fridgeFriend-body-topic-title">
                Primary Research
              </h3>
              <p className="paddingTop">
                <b>86%</b> of the New York residents express a desire to reduce
                their food waste
              </p>
              <p>
                <b>8.4</b> lbs of foods are discards on a weekly basis by the
                average household
              </p>
              <p>
                <b>21%</b> of residential waste is food scraps that could be
                composted
              </p>
            </div>
            <div className="fridgeFriend-body-description paddingTop">
              <p>
                Our interviews told us that most people want to save the
                environment and contribute to a more sustainable lifestyle, but
                it's either not
                <span className="fridgeFriend-color"> convenient </span>
                or
                <span className="fridgeFriend-color"> intuitive</span>.
                Therefore, we want to bridge the gap between intention and
                action.
              </p>
              <p className="paddingTop"> We asked,</p>
            </div>
            <h2 className="fridgeFriend-body-subtitle-2">
              How can New Yorkers make decisions that minimize household food
              waste?
            </h2>
          </div>
          <div className="fridgeFriend-body">
            <Element name="ideation">
              <h3 className="fridgeFriend-body-title paddingTop">Ideation</h3>
            </Element>
            <div className="fridgeFriend-body-description">
              <p>
                Having our problem statement, we came up with possible solutions
                that would help create intuitive while convenient solutions to
                reduce household food waste.
              </p>
            </div>
            <div>
              <h3
                className="fridgeFriend-body-topic-title uppercase paddingTop-section"
                style={{ marginBottom: 0 }}
              >
                Idea 1: Smart Fridge App
              </h3>
              <h3
                className="uppercase"
                style={{ marginTop: 0, fontWeight: 400 }}
              >
                Support and Educate People on Mindful Shopping and Reducing
                Waste
              </h3>
              <div className="fridgeFriend-body-description">
                <p>
                  This is an application that assists users in gauging the
                  precise amount of food required for a balanced weekly diet.
                  With a fridge-mounted camera to photograph and monitor fridge
                  contents, this app automatically generates expiration dates,
                  tailored recipe suggestions, and disposal guides.
                </p>
              </div>
              <div className="fridgeFriend-ideation1-container">
                <h3
                  className="fridgeFriend-body-topic-title uppercase paddingTop-section"
                  style={{ marginBottom: 0 }}
                >
                  INTELLIGENT EXPIRY MANAGEMENT
                </h3>
                <img
                  src={ideation1_1}
                  alt={"ideation1_1-image"}
                  width={"100%"}
                />
                <ul>
                  <li>
                    <p>Generate expiration dates for fruits and vegetables</p>
                  </li>
                  <li>
                    <p>
                      Offer manual or barcode scanning entry for packaged foods
                    </p>
                  </li>
                  <li>
                    <p>
                      Display in an easy-to-view food list with freshness
                      indicators
                    </p>
                  </li>
                </ul>
              </div>
              <div className="fridgeFriend-ideation1-container">
                <h3
                  className="fridgeFriend-body-topic-title uppercase paddingTop-section"
                  style={{ marginBottom: 0 }}
                >
                  TAILORED RECIPE SUGGESTIONS
                </h3>
                <img
                  src={ideation1_2}
                  alt={"ideation1_2-image"}
                  width={"100%"}
                />
                <ul>
                  <li>
                    <p>Analyze current fridge inventory to suggest recipes</p>
                  </li>
                  <li>
                    <p>
                      Helping create delicious meals with what you have on hand
                      and minimize grocery trips
                    </p>
                  </li>
                </ul>
              </div>
              <div className="fridgeFriend-ideation1-container">
                <h3
                  className="fridgeFriend-body-topic-title uppercase paddingTop-section"
                  style={{ marginBottom: 0 }}
                >
                  ECO-FRIENDLY DISPOSAL GUIDE
                </h3>
                <img
                  src={ideation1_3}
                  alt={"ideation1_3-image"}
                  width={"100%"}
                />
                <ul>
                  <li>
                    <p>
                      Provide a map of nearby disposal options for waste food
                    </p>
                  </li>
                  <li>
                    <p>
                      Encouraging responsible and environmentally friendly waste
                      management
                    </p>
                  </li>
                </ul>
              </div>
              <h3 className="paddingTop">Competitors</h3>
              <div className="fridgeFriend-body-description">
                <p>
                  Existing apps like "
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.nowasteapp.com/"
                    className="fridgeFriend-link"
                  >
                    NoWaste
                  </a>
                  " and "
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.fridgepal&pli=1"
                    className="fridgeFriend-link"
                  >
                    Fridge Pal
                  </a>
                  " provide similar services, helping users manage food
                  inventory, suggesting recipes, and reminding them of
                  expiration dates.
                </p>
              </div>
              <h3
                className="fridgeFriend-body-topic-title uppercase paddingTop-section"
                style={{ marginBottom: 0 }}
              >
                Idea 2: Compost Bin With Garden
              </h3>
              <h3
                className="uppercase"
                style={{ marginTop: 0, fontWeight: 400 }}
              >
                Facilitate Recycling of Food Waste
              </h3>
              <div className="fridgeFriend-body-description">
                <p>
                  This solution provides more incentives for people to reduce
                  food waste by recycling their food scraps into a home garden.
                </p>
              </div>
              <div className="fridgeFriend-ideation2-container">
                <img src={compost1} alt={"ideation1_1-image"} width={"80%"} />
                <img
                  className={"arrow arrow1"}
                  src={arrow}
                  alt={"arrow-image"}
                />
                <img
                  className={"arrow arrow2"}
                  src={arrow2}
                  alt={"arrow-image"}
                />
                <div className="fridgeFriend-body-description">
                  <div>
                    <h3 className="fridgeFriend-body-topic-title">
                      Straightforward composting
                    </h3>
                    <p>
                      Food scraps go in one location where they don't have to be
                      removed or dealt with directly for long periods of time.
                      Consumers won't have to find compost locations or worry
                      about emptying their bin every week and confusion around
                      separation is eliminated.
                    </p>
                  </div>
                  <div>
                    <h3 className="fridgeFriend-body-topic-title">
                      Mitigate smell
                    </h3>
                    <p>
                      Prevents the compost smell from pervading the home by
                      processing it internally, without any need to open up the
                      composter and mix the scraps yourself.
                    </p>
                  </div>
                </div>
              </div>

              <div className="fridgeFriend-ideation2-container">
                <img src={compost2} alt={"ideation1_1-image"} width={"80%"} />
                <img
                  src={arrow3}
                  className={"arrow arrow3"}
                  alt={"arrow-image"}
                />
                <div className="fridgeFriend-body-description">
                  <div>
                    <h3 className="fridgeFriend-body-topic-title">
                      Low cost at home
                    </h3>
                    <p>
                      Using the food scraps as compost for a garden allows
                      people to use their old food to grow new food, saving them
                      more money in the long run while also helping the
                      environment. Allows communities to take their waste and
                      turn it into something needed.
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="paddingTop">Competitors</h3>
              <div className="fridgeFriend-body-description">
                <p>
                  Businesses like "
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.imperfectfoods.com/"
                    className="fridgeFriend-link"
                  >
                    Imperfect Foods
                  </a>
                  " and "
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.misfitsmarket.com/"
                    className="fridgeFriend-link"
                  >
                    Misfits Market
                  </a>
                  " have already established themselves in the market, offering
                  discounted imperfect produce directly to consumers and
                  contributing to waste reduction.
                </p>
              </div>
              <h3
                className="fridgeFriend-body-topic-title uppercase paddingTop-section"
                style={{ marginBottom: 0 }}
              >
                Idea 3: Local Farmer Delivery App
              </h3>
              <h3
                className="uppercase"
                style={{ marginTop: 0, fontWeight: 400 }}
              >
                Support Local Farmers and Promote the Adoption of Imperfect
                Produce
              </h3>
              <div className="fridgeFriend-body-description">
                <p>
                  This application functions as a bridge between local farmers
                  and consumers by providing a end-to-end platform that helps
                  farmers expand its customer base. At the same time, customers
                  are able to see a transparent supply chain and contribute to a
                  more sustainable lifestyle.
                </p>
              </div>

              <div className="fridgeFriend-ideation3-container">
                <img
                  src={ideation3_1}
                  alt={"ideation1_1-image"}
                  width={"100%"}
                />
                <img
                  src={ideation3_2}
                  alt={"ideation1_1-image"}
                  width={"100%"}
                />
                <img
                  src={ideation3_3}
                  alt={"ideation1_1-image"}
                  width={"100%"}
                />
              </div>

              <div className="fridgeFriend-body-description">
                <h3 className="fridgeFriend-body-topic-title">
                  Real-time shopping
                </h3>
                <p>
                  Farm-to-Table Transparency: Experience complete transparency
                  in our supply chain. Know exactly where your food comes from
                  and who the farmers are.
                </p>

                <h3 className="fridgeFriend-body-topic-title paddingTop">
                  Supporting local farmers
                </h3>
                <p>
                  By purchasing through our app, you directly support local
                  farmers, contributing to a more sustainable agricultural
                  ecosystem.
                </p>

                <h3 className="fridgeFriend-body-topic-title paddingTop">
                  Customizable meal plans
                </h3>
                <p>
                  Tailor your meal plans with a wide range of "imperfect"
                  products. Discover new flavors and support local agriculture
                  with every meal.
                </p>
              </div>

              <h3 className="paddingTop">Competitors</h3>
              <div className="fridgeFriend-body-description">
                <ul>
                  <li>
                    <p>
                      Platforms like "
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.toogoodtogo.com/"
                        className="fridgeFriend-link"
                      >
                        Too Good To Go
                      </a>
                      " and "
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://olioapp.com/"
                        className="fridgeFriend-link"
                      >
                        OLIO
                      </a>
                      " are prominent players in this space, facilitating the
                      sale of surplus food at reduced prices and encouraging
                      food sharing among communities.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="fridgeFriend-body">
            <Element name="userTesting">
              <h3 className="fridgeFriend-body-title">Testing & Evaluation</h3>
            </Element>
            <div className="fridgeFriend-testing-container">
              {userTestObjects.map((userTestObject, index) => {
                return (
                  <div className="fridgeFriend-testing-item" key={index}>
                    <div className="frigeFriend-testing-item-image-container">
                      <img src={userTestObject.image} alt={"user test image"} />
                    </div>
                    <h3
                      className="frigeFriend-testing-item-title"
                      style={{ color: userTestObject.titleColor }}
                    >
                      {userTestObject.title}
                    </h3>
                    <ul>
                      {userTestObject.description.map(
                        (description, descriptionIndex) => {
                          return (
                            <li key={descriptionIndex}>
                              <p>{description} </p>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="fridgeFriend-image">
              <img
                src={stickyNotes}
                alt={"unit testing brainstorming ideas"}
                width={"100%"}
              />
            </div>
            <div className="fridgeFriend-body-description paddingTop">
              <p>
                Most of our users liked these three ideas, and had a hard time
                choosing the best of them. However, their responses provided us
                with some key considerations around the food wast management
                solutions:
              </p>
              <ol>
                <li>
                  <p>
                    How to make this solution more convenient to understand and
                    use?
                  </p>
                </li>
                <li>
                  <p> Consider the actual implementation and practicality.</p>
                </li>
                <li>
                  <p>
                    What business value can our solution provide to our
                    partners?
                  </p>
                </li>
              </ol>
              <p className="paddingTop">
                Generally, <b>idea 1</b> is a more appropriate idea to keep
                pursuing, as it is both practical with a large potential
                customer base and it helps with the daily food management with
                innovative solutions.
              </p>
              <p className="paddingTop">
                After we reviewed all user interviews, we need to address the
                following challenges:
              </p>
              <ol>
                <li>
                  <p>
                    How to make it more competitive, given there are similar
                    fridge-camera products in the market?
                  </p>
                </li>
                <li>
                  <p> The disposal option caused many confusions.</p>
                </li>
                <li>
                  <p>How to make the solution more believable to customers?</p>
                </li>
              </ol>
            </div>
          </div>
          <div className="fridgeFriend-body">
            <Element name="iteration">
              <h3 className="fridgeFriend-body-title"> Iteration </h3>
            </Element>
            <h2 className="fridgeFriend-body-subtitle">
              Narrowing in on our solution and adding features
            </h2>
            <div className="fridgeFriend-body-description paddingTop">
              <p>
                We narrowed down our scope to only focus on food inventory
                management, and we integrated industrial design with interactive
                media to both create a user interface but also a 3D model of our
                product. By iterating our ideas, we created a solution that is
                affordable, portable, and convenient for users to manage
                inventories in kitchen.
              </p>
              <div className="fridgeFriend-image">
                <img
                  src={hiFi}
                  alt={"high fidelity figma design"}
                  width={"100%"}
                />
              </div>
              <div className="avo-item-image-container-parent">
                <div className="avo-item-image-container">
                  {avoImages.map((image, i) => {
                    return <img key={i} src={image} height={"400px"} />;
                  })}
                </div>
              </div>
            </div>

            <h2 className="fridgeFriend-body-subtitle">
              Ideal User Experience
            </h2>

            <div className="fridgeFriend-body-description paddingTop">
              {userExperienceObjects.map((userExperienceObject, index) => {
                return (
                  <div
                    className={"fridgeFriend-user-experience-item"}
                    key={index}
                  >
                    <h3 className="fridgeFriend-body-topic-title paddingTop">
                      {userExperienceObject.title}
                    </h3>
                    <p> {userExperienceObject.description}</p>
                    <div className="fridgeFriend-user-experience-item-image-container">
                      <img
                        width={"100%"}
                        src={userExperienceObject.image}
                        alt={"user experience image"}
                      />
                      <div className="fridgeFriend-user-experience-item-phone-image-container">
                        {userExperienceObject.phoneImages.map(
                          (phoneImage, phoneImageIndex) => {
                            return (
                              <div
                                className="fridgeFriend-user-experience-item-phone-image"
                                key={phoneImageIndex}
                              >
                                <img
                                  width={"60%"}
                                  src={phoneImage.image}
                                  alt={"user experience image"}
                                />
                                <h3 className="fridgeFriend-body-topic-title paddingTop">
                                  {phoneImage.title}
                                </h3>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
