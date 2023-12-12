import React from "react";
import "./fridgeFriend.less";
import "./tablecontent.less";
import lowFi1 from "./../../assets/images/fridgeFriend/low-fi_1.png";
import compost1 from "./../../assets/images/fridgeFriend/compost1.png";
import compost2 from "./../../assets/images/fridgeFriend/compost2.png";
import lowFi2 from "./../../assets/images/fridgeFriend/low-fi_2.png";
import hiFi from "./../../assets/images/fridgeFriend/hi-fi.png";
import manager from "./../../assets/images/fridgeFriend/manager.png";
import swe from "./../../assets/images/fridgeFriend/softwareEngineer.png";
import students from "./../../assets/images/fridgeFriend/students.png";
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
import stakeholder from "./../../assets/images/fridgeFriend/stakeholder.png";
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
    image: swe,
    title: "Software Engineer",
    titleColor: "#f4d12b",
    description: [
      "24 years old",
      "Lives in NYC for more than 6 years",
      "Cooks daily due to his home0base working style",
      "Rational buyer with a strong focus on utility in purchasing decisions",
    ],
  },
  {
    image: manager,
    title: "Supply Chain Manager",
    titleColor: "#a7cdf4",
    description: [
      "35 years old",
      "Lived in NYC for 10 years",
      "Love cooking and jogging in her spare time",
      "Pursue a quality and healthy lifestyle",
    ],
  },
  {
    image: students,
    title: "College Students",
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

interface UserExperienceObject {
  image: string;
  text: string;
}
const userExperienceObjects: UserExperienceObject[] = [
  {
    image: supermarket,
    text: "Joy uses her phone to check her grocery list in the supermarket, guided efficiently by her FridgeFriend app which syncs with her fridge at home.",
  },
  {
    image: fridge,
    text: "Relaxing at home, she receives an alert from the app, prompting her to easily order fresh milk before her current supply expires.",
  },
  {
    image: couch,
    text: "She greets a delivery of fresh produce at her door, auto-restocked by FridgeFriend, ensuring she always has fresh ingredients on hand.",
  },
  {
    image: kitchen,
    text: "In her kitchen, she follows a FridgeFriend recipe on her phone, using ingredients the app knows she has, for a delicious, no-waste meal.",
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
            <p>
              Food wastage is a growing concern and managing household chores
              efficiently is more important than ever, the average American
              family is constantly seeking ways to save both time and money.
              This is where FridgeFriend steps in, revolutionizing the way we
              interact with our kitchen. With nearly 40% of food in the U.S.
              being wasted and families losing approximately $1,500 a year on
              thrown-out groceries, FridgeFriend offers an innovative solution
              to these problems.
            </p>

            <p>
              FridgeFriend introduces a unique combination of auto-restocking,
              an automatic recipe generator, and an intuitive in-fridge camera
              system is designed to simplify your life, reduce waste, and save
              money. Welcome to the future of kitchen management - welcome to
              FridgeFriend.
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
            to="evaulation"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="fridge-friend-table-content-text"> Evaulation </h3>
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
          <Link
            className="table-content-item"
            to="userExperience"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="fridge-friend-table-content-text">
              User Experience
            </h3>
          </Link>
          <Link
            className="table-content-item"
            to="businessResponse"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <h3 className="fridge-friend-table-content-text">
              Business Response
            </h3>
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
              FridgeFriend is the future of smart, waste-free, and efficient
              household food management.
            </p>
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
                <b> Focus: Food Waste</b>
              </p>
              <p>
                In addressing New York City's multifaceted sustainability
                challenges, including high carbon emissions and substantial
                waste management issues, our group has chosen to concentrate on
                <b> food waste</b>. Despite 86% of residents aspiring to reduce
                their food waste, the average household still discards 8.4lbs of
                food weekly. By focusing on this area, we aim to bridge the gap
                between intention and action, offering practical solutions to
                significantly impact the city's sustainability efforts.
              </p>
            </div>
            <h3 style={{ paddingTop: "30px" }}>Problem Statement</h3>
            <h2 className="fridgeFriend-body-subtitle">
              How can New Yorkers make decisions that minimize the amount of
              food ending up in landfills?
            </h2>
          </div>
          <div className="fridgeFriend-body">
            <Element name="ideation">
              <h3>Brainstorm Solutions</h3>
            </Element>
            <div className="fridgeFriend-body-description">
              <p>
                In our primary research, we realized that with the goal of zero
                waste to landfill by 2030, there is a huge gap between
                residents' willingness to reduce food waste and the large amount
                of waste produced by households. We then came up with three
                ideas to solve the problems.
              </p>
            </div>
            <div>
              <h3 className="fridgeFriend-body-title paddingTop">
                Ideation and Brainstorming
              </h3>

              <h3 className="paddingTop">
                Idea 1: Smart Fridge App Support and Educate People on Mindful
                Shopping and Reducing Waste
              </h3>
              <div className="fridgeFriend-body-description">
                <p>
                  <b> Key Features</b>
                </p>
                <ol>
                  <li>
                    <p>
                      <b>Intelligent Expiry Management </b>
                    </p>
                    <p>
                      Employs a fridge-mounted camera to photograph and monitor
                      your fridge contents, automatically generating expiration
                      dates for fruits and vegetables, and offering manual or
                      barcode scanning entry for packaged foods, all displayed
                      in an easy-to-view food list with freshness indicators.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Tailored Recipe Suggestions </b>
                    </p>
                    <p>
                      Analyzes current fridge inventory to suggest recipes,
                      helping you create delicious meals with what you have on
                      hand, minimizing waste and grocery trips.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Eco-friendly Disposal Guide </b>
                    </p>
                    <p>
                      Provides a map of nearby disposal options for waste food,
                      encouraging responsible and environmentally friendly waste
                      management.
                    </p>
                  </li>
                </ol>
              </div>
              <h3>Challenges</h3>
              <div className="fridgeFriend-body-description">
                <ul>
                  <li>
                    <p>
                      The initiative might cater to a niche audience, possibly
                      not reflecting the diverse perspectives of NYC residents.
                      Additionally, mindful shopping tools may not be perceived
                      as essential.
                    </p>
                  </li>
                  <li>
                    <p>
                      Dependence on a mobile app could exclude individuals
                      without access to smart devices or the internet.
                    </p>
                  </li>
                </ul>
              </div>
              <h3>Competitors</h3>
              <div className="fridgeFriend-body-description">
                <ul>
                  <li>
                    <p>
                      Existing apps like "<u>NoWaste</u>" and "<u>Fridge Pal</u>
                      " provide similar services, helping users manage food
                      inventory, suggesting recipes, and reminding them of
                      expiration dates.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="fridgeFriend-image">
                <img src={lowFi1} alt={"idea 1 figma design"} width={"100%"} />
              </div>
              <h3 className={"paddingTop"}>
                Idea 2: Compost Bin with Garden Facilitate the Redistribution of
                Surplus Food
              </h3>
              <div className="fridgeFriend-body-description">
                <p>
                  <b> Key Features</b>
                </p>
                <ol>
                  <li>
                    <p>
                      <b>Straightforward Composting </b>
                    </p>
                    <p>
                      Food scraps go in one location where they don't have to be
                      removed or dealt with directly for long periods of time.
                      Consumers won't have to find compost locations or worry
                      about emptying their bin every week and confusion around
                      separation is eliminated.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Mitigates Smell </b>
                    </p>
                    <p>
                      Prevents the compost smell from pervading the home by
                      processing it internally, without any need to open up the
                      composter and mix the scraps yourself.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Low Cost Produce at Home </b>
                    </p>
                    <p>
                      Using the food scraps as compost for a garden allows
                      people to use their old food to grow new food, saving them
                      more money in the long run while also helping the
                      environment. Allows communities to take their waste and
                      turn it into something needed.
                    </p>
                  </li>
                </ol>
              </div>
              <h3>Challenges</h3>
              <div className="fridgeFriend-body-description">
                <ul>
                  <li>
                    <p>
                      Overcoming ingrained preferences for aesthetically
                      pleasing produce requires a significant shift in consumer
                      habits.
                    </p>
                  </li>
                  <li>
                    <p>
                      Beyond changing perceptions, there may be a need for
                      additional incentives, such as pricing adjustments, to
                      encourage the purchase of imperfect produce.
                    </p>
                  </li>
                </ul>
              </div>
              <h3>Competitors</h3>
              <div className="fridgeFriend-body-description">
                <ul>
                  <li>
                    <p>
                      Businesses like "<u>Imperfect Foods</u>" and "
                      <u>Misfits Market</u>" have already established themselves
                      in the market, offering discounted imperfect produce
                      directly to consumers and contributing to waste reduction.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="fridgeFriend-side-by-side-image">
                <img src={compost1} alt={"idea 2 image"} width={"50%"} />
                <img src={compost2} alt={"idea 2 image2"} width={"50%"} />
              </div>
              <h3 className={"paddingTop"}>
                Idea 3: Local Farmers and Imperfect Produce Delivery App
                Normalize Imperfect Produce
              </h3>
              <div className="fridgeFriend-body-description">
                <p>
                  <b> Key Features</b>
                </p>
                <ol>
                  <li>
                    <p>
                      <b>Real-Time Shopping </b>
                    </p>
                    <p>
                      Farm-to-Table Transparency: Experience complete
                      transparency in our supply chain. Know exactly where your
                      food comes from and who the farmers are.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Supporting Local Farmers </b>
                    </p>
                    <p>
                      By purchasing through our app, you directly support local
                      farmers, contributing to a more sustainable agricultural
                      ecosystem.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Customizable Meal plans </b>
                    </p>
                    <p>
                      Tailor your meal plans with a wide range of "imperfect"
                      products. Discover new flavors and support local
                      agriculture with every meal.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b> Nutrition Analysis </b>
                    </p>
                    <p>
                      Subscribers to our meal plans receive personalized
                      nutritional analysis, taking into account the source and
                      quality of ingredients from our supply chain
                    </p>
                  </li>
                </ol>
              </div>
              <h3>Challenges</h3>
              <div className="fridgeFriend-body-description">
                <ul>
                  <li>
                    <p>
                      Potential skepticism regarding the safety and quality of
                      surplus food could deter participation. Ensuring timely
                      redistribution of food to prevent spoilage presents
                      substantial logistical hurdles.
                    </p>
                  </li>
                </ul>
              </div>
              <h3>Competitors</h3>
              <div className="fridgeFriend-body-description">
                <ul>
                  <li>
                    <p>
                      Platforms like "<u>Too Good To Go</u>" and "<u>OLIO</u>"
                      are prominent players in this space, facilitating the sale
                      of surplus food at reduced prices and encouraging food
                      sharing among communities.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="fridgeFriend-image">
                <img src={lowFi2} alt={"idea 3 figma design"} width={"100%"} />
              </div>
            </div>
          </div>
          <div className="fridgeFriend-body">
            <Element name="userTesting">
              <h3 className="fridgeFriend-body-title"> User Testing </h3>
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
          </div>
          <div className="fridgeFriend-body">
            <Element name="evaulation">
              <h3 className="fridgeFriend-body-title"> Evaluation </h3>
            </Element>
            <h2 className="fridgeFriend-body-subtitle">
              Idea 1 best addresses our customers' needs.
            </h2>
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
              <p>
                Generally, idea 1 is a more appropriate idea to keep pursuing,
                as it is both practical with a large potential customer base and
                it helps with the daily food management with innovative
                solutions.
              </p>
              <p>
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
              narrowing in on our solution and adding features
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
            </div>
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

            <iframe
              src={`https://www.youtube.com/embed/y9LqWhmTMeQ`}
              width={(width * 2) / 3}
              height={(height * 2) / 3}
              style={{ display: "block", margin: "auto" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div className="fridgeFriend-body">
            <Element name="userExperience">
              <h3 className="fridgeFriend-body-title"> User Experience </h3>
            </Element>
            <h2 className="fridgeFriend-body-subtitle">
              Creating ideal customer experiences in different scenarios
            </h2>
            <div className="fridgeFriend-body-description paddingTop">
              {userExperienceObjects.map((userExperienceObject, index) => {
                return (
                  <div
                    className={
                      index % 2 === 0
                        ? "fridgeFriend-user-experience-item"
                        : "fridgeFriend-user-experience-item reverse"
                    }
                    key={index}
                  >
                    <div className="fridgeFriend-user-experience-item-image-container">
                      <img
                        width={"100%"}
                        src={userExperienceObject.image}
                        alt={"user experience image"}
                      />
                    </div>
                    <div className="fridgeFriend-user-experience-item-text-container">
                      <p className="fridgeFriend-user-experience-item-text">
                        {userExperienceObject.text}
                      </p>
                    </div>
                  </div>
                );
              })}
              ;
            </div>
          </div>
          <div className="fridgeFriend-body">
            <Element name="businessResponse">
              <h3 className="fridgeFriend-body-title"> Business Response </h3>
            </Element>
            <h2 className="fridgeFriend-body-subtitle">Stakeholder System</h2>

            <div className="fridgeFriend-image">
              <img
                src={stakeholder}
                alt={"stakeholder system"}
                width={"100%"}
              />
            </div>
            <h2 className="fridgeFriend-body-subtitle paddingTop">
              Value to our stakeholders
            </h2>
            <div className="fridgeFriend-body-description paddingTop">
              <p>
                <b>For Users: </b>
              </p>
              <ul>
                <li>
                  <p>
                    <b>Time-saving Magic:</b> FridgeFriend's 360-angle AI camera
                    takes the guesswork out of managing food freshness, saving
                    users' time by providing instant expiration dates and
                    alerts.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Financial Wizardry:</b> Users can see the money they save
                    by reducing food waste, empowering them to make mindful
                    decisions and save on grocery costs.
                  </p>
                </li>
              </ul>
              <p>
                <b>For Investors: </b>
              </p>
              <ul>
                <li>
                  <p>
                    <b>Innovation Elixir:</b> FridgeFriend's cutting-edge
                    technology, including the AI camera and auto-restocking,
                    positions it as a pioneer in the smart home and kitchen
                    space.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Monetary Enchantment:</b> The potential for user growth
                    and engagement, driven by the app's unique features, creates
                    a promising investment opportunity.
                  </p>
                </li>
              </ul>
              <p>
                <b>For Partners: </b>
              </p>
              <ul>
                <li>
                  <p>
                    <b>Collaboration Spell:</b> FridgeFriend offers
                    collaboration opportunities, especially for grocery
                    providers, through the "buy again" and "auto-restock"
                    features.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Ecosystem Expansion:</b> Partners can benefit from being
                    part of an innovative ecosystem that enhances user
                    experience and engagement.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
