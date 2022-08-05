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
          This <b>app is a Fullstack project</b> with a great UI through which
          users can create an amazing vision board for their life, create life
          goals, and also share goals with other users. Users can build their
          vision board as like by adding new pictures to their vision board that
          help to create more focused goals. In their dashboard users can assess
          the progress they are making on completing their goals and view public
          goals shared by other users.
          <br />
          <p></p>This project is for learning purposes and also to{" "}
          <b>showcase my abilities to recruiters.</b> How I designed this
          project and the technologies used in the architecture diagram shown
          below.
        </p>
      </div>
      <div className={Styles.MainFeatureDiv}>
        <div className={Styles.featureBox}>
          <div className={Styles.textBoxLeftSide}>
            <h2 className={Styles.featureTitle}>Technical Architecture</h2>
            <ul className={Styles.listDesign}>
              <li>
                The <b>architecture diagram</b> demonstrates the components used
                to build the <b>Frontend</b> and <b>Backend</b> and how both
                systems interact.
              </li>
              <li>
                For the Frontend, <b>React</b> is used for creating main app UI
                along with React-Bootstrap. <b>Redux</b> is used for managing
                and centralizing application state.
              </li>
              <li>
                The Backend is built using
                <b>
                  {" "}
                  Node.js, Express, Sequelize, Passport.js, MySQL, and SQL.
                </b>
                <b> Passport.js</b> is used for user authentication and MySQL is
                used to store user and app data.
              </li>
              <li>
                <b>Chart.js</b> is used for visualizing data for the three
                charts shown in the dashboard.
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
            <h2 className={Styles.featureTitle}>Create Your Vision board</h2>
            <ul className={Styles.listDesign}>
              <li>
                To create their vision board users are initially provided with{" "}
                <b>50 high quality images</b> and more than <b>30 quotes.</b>{" "}
                They can also add their own images and quotes.
              </li>
              <li>
                Users select their favorite images and quotes to create more
                focused goals and a more focused life.
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
              <li>Using the vision board users can develop more goal ideas.</li>
              <li>
                Users can create goals with a heading, custom image
                address(url), goal category, and add a goal description.
              </li>
              <li>
                User can share goals with other users using the <b>private</b>{" "}
                and
                <b> public</b> toggle.
              </li>
              <li>
                Users can <b>update, delete</b> and <b>complete</b> existing
                goals.
              </li>
              <li>
                Users can <b>view</b> and <b>delete</b> completed goals.
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
                This app includes a <b>custom navigation bar</b> built with a
                stylish design to match the application needs.
              </li>
              <li>
                <b>Community Updates</b> shows users goals shared by other
                users.
              </li>
              <li>
                Users are provided with <b>goals analytics</b> so they can see
                total goals, compare completed and incomplete goals, view goals
                by category, and see a goals breakdown by month for themselves
                and all users.
              </li>
              <li>
                Through the dashboard users can create more goals and check
                their <b>recent goals</b> history.
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
            <li>Users create a secure account with a username and password.</li>
            <li>
              The login and signup forms are <b>custom built</b> with stylish
              input fields.
            </li>
            <li>
              <b>Form validation</b> is applied for login, signup and add goals
              to prevent bad user input and guide the user.
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
