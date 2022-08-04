import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import TechDiagram from "../../Modal/TechDiagram/TechDiagram";
import Styles from "./About.module.css";

const About = (props) => {
  const loggedInStatus = useSelector(
    (state) => state.authentication.isLoggedin
  );
  const [showDiagram, setShowDiagram] = useState(false);

  const hideModalHandler = () => {
    setShowDiagram(!showDiagram);
  };

  let backBtn = "";
  if (!loggedInStatus) {
    backBtn = (
      <NavLink to="/" className={Styles.backButton}>
        back
      </NavLink>
    );
  }
  return (
    <div className={Styles.aboutMainDiv}>
      <div className={Styles.summaryDiv}>
        <h2 className={Styles.title}>About</h2>
        <h2 className={Styles.summaryTitle}>Summary</h2>
        <p className={Styles.summaryText}>
          This app is basically a fullStack project with a great UI in which
          users can create life goals with help of amazing vision board images
          and also share goals with other users. Users can also save, edit and
          delete goals. Users have permission to add new pictures in the vision
          board which help to create more focused goals. The purpose of this
          project is to improve learning skills and to show my abilities to
          recruiter industries. How I designed this project and which
          technologies I used in this project. It can be understood with the
          help of a full architecture block diagram.
        </p>
      </div>
      <div className={Styles.MainFeatureDiv}>
        <div className={Styles.featureBox}>
          <div className={Styles.textBoxLeftSide}>
            <h2 className={Styles.featureTitle}>Technical Architecture</h2>
            <ul className={Styles.listDesign}>
              <li>
                In architecture diagram user can see the frontend and backend
                technologies and how they work together.
              </li>
              <li>
                In the frontend technolgies I used react.js for making main
                structure of app UI and redux.js for managing and centralizing
                application state.
              </li>
              <li>
                Chart.js is used for visualizing data for the three charts shown
                in the dashboard.
              </li>
              <li>
                Passport.js is used for user authentication and Mysql is used to
                store user and app data.
              </li>
            </ul>
          </div>
          <div className={Styles.boxRightSide}>
            <div className={Styles.boxBg}></div>
            <div className={Styles.boxImg}>
              <img
                onClick={hideModalHandler}
                className={Styles.diagramImage}
                src={require("../../../assets/images/ViziPlan_FullStructureDiagram.png")}
                alt="ViziPlaning"
              ></img>
            </div>
          </div>
        </div>

        <div className={Styles.featureBox}>
          <div className={Styles.textBoxRightSide}>
            <h2 className={Styles.featureTitle}>Create Your Visionboard</h2>
            <ul className={Styles.listDesign}>
              <li>
                In visionboard users can see more than <b>50 random images</b>{" "}
                and more than <b>30 quotes images</b> also have permission to
                add new custom images and quotes.
              </li>
              <li>
                Select your favourite images and quotes images to create more
                focused goals
              </li>
            </ul>
          </div>
          <div className={Styles.boxLeftSide}>
            <div className={Styles.boxBg}></div>
            <div className={Styles.boxImg}>
              <img
                className={Styles.imageStyle}
                src={require("../../../assets/images/visionboard.gif")}
                alt="ViziPlaning"
              ></img>
            </div>
          </div>
        </div>

        <div className={Styles.featureBox}>
          <div className={Styles.textBoxLeftSide}>
            <h2 className={Styles.featureTitle}>Create Your Goals</h2>
            <ul className={Styles.listDesign}>
              <li>Using your visionboard you can get more goals ideas.</li>
              <li>
                In create goals user can add heading, custom image address(url),
                select goal category from <b>drop down list</b>, add goal
                description.
              </li>
              <li>
                User can share goals with other users using <b>private</b> and
                <b> public</b> toggle switch option.
              </li>
              <li>
                In the saved <b>goals list</b> users can update, delete and
                complete the goals.
              </li>
              <li>
                In the saved <b>completed goals list</b> users can only delete
                the goals.
              </li>
            </ul>
          </div>

          <div className={Styles.boxRightSide}>
            <div className={Styles.boxBg}></div>
            <div className={Styles.boxImg}>
              <img
                className={Styles.imageStyle}
                src={require("../../../assets/images/addGoalsGif.gif")}
                alt="ViziPlaning"
              ></img>
            </div>
          </div>
        </div>

        <div className={Styles.featureBox}>
          <div className={Styles.textBoxRightSide}>
            <h2 className={Styles.featureTitle}>Dashboard</h2>
            <ul className={Styles.listDesign}>
              <li>
                <b>Custom navigation bar</b> built with a stylish UI to match
                application design.
              </li>
              <li>
                In <b>community updates</b> users can see the other users goals.
              </li>
              <li>
                In <b>goals analytics</b> feature users can see total goals,
                <b>completed</b>
                and <b>incompleted</b> goals information in <b>bar chart</b>,
                goals category by percentage in <b>pie chart</b> and goals
                information by month for the current year in
                <b>vertical bar chart.</b>
              </li>
              <li>
                User can see <b>all user</b> completed and created goals by
                month in Verticle bar chart
              </li>
              <li>
                Create more goals and check your <b>recent goals history</b>{" "}
                with date time.
              </li>
            </ul>
          </div>

          <div className={Styles.boxLeftSide}>
            <div className={Styles.boxBg}></div>
            <div className={Styles.boxImg}>
              <img
                className={Styles.imageStyle}
                src={require("../../../assets/images/dashboard.gif")}
                alt="ViziPlaning"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.featureBox}>
        <div className={Styles.textBoxLeftSide}>
          <h2 className={Styles.featureTitle}>Secure Account</h2>
          <ul className={Styles.listDesign}>
            <li>Form validation applied for login, signup and add goals.</li>
            <li>Custom form built with a stylish input fields.</li>
            <li>
              Invalid input field shows error to guide user for valide input
              requirements
            </li>
          </ul>
        </div>

        <div className={Styles.boxRightSide}>
          <div className={Styles.boxBg}></div>
          <div className={Styles.boxImg}>
            <img
              className={Styles.imageStyle}
              src={require("../../../assets/images/loginSignup.gif")}
              alt="ViziPlaning"
            ></img>
          </div>
        </div>
      </div>

      <div className={Styles.footerContent}>
        <TechDiagram showModal={showDiagram} hideModal={hideModalHandler} />
        {backBtn}
        <div className={Styles.gitLinkedin}>
          <a href="https://github.com/atiftariq786">
            <FontAwesomeIcon
              className={Styles.github}
              icon={faGithub}
              size="2x"
            />
          </a>
          <a href="https://www.linkedin.com/in/atif-tariq-5b00b089/">
            <FontAwesomeIcon
              className={Styles.linkedin}
              icon={faLinkedin}
              size="2x"
            />
          </a>
        </div>
      </div>
      <div className={Styles.webDiv}>
        <a className={Styles.websiteLink} href="https://atiftariq.net/">
          www.atiftariq.net
        </a>
      </div>
    </div>
  );
};
export default About;
