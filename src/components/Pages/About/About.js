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
                {/* <button onClick={hideModalHandler}>View Diagram</button> */}
              </li>

              <li>In the frontend technolgies</li>

              <li>
                In visionboard users can see more than 50 random images and more
                than 30 quotes images also have permission to add new custom
                images and quotes.
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
              <li>In community updates users can see the other users goals.</li>

              <li>
                Custom navigation bar built with a stylish UI to match
                application design.
              </li>
              <li>
                In goals analytics feature users can see total goals, completed
                and incompleted goals information in bar chart, goals category
                by percentage in pie chart and goals information by month for
                the current year in vertical bar chart.
              </li>
              <li>
                In visionboard users can see more than 50 random images and more
                than 30 quotes images also have permission to add new custom
                images and quotes.
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
    </div>
  );
};
export default About;
