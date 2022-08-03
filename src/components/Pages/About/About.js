import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import Styles from "./About.module.css";

const About = (props) => {
  const loggedInStatus = useSelector(
    (state) => state.authentication.isLoggedin
  );

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
      <div className={Styles.sectionOneDiv}>
        <div className={Styles.summaryDiv}>
          <h2 className={Styles.title}>About</h2>
          <h2 className={Styles.featureTitle}>Summary</h2>
          <p>
            This app is basically a fullStack project with a great UI in which
            users can create life goals with help of amazing vision board images
            and also share goals with other users. Users can also save, edit and
            delete goals. Users have permission to add new pictures in the
            vision board which help to create more focused goals. The purpose of
            this project is to improve learning skills and to show my abilities
            to recruiter industries. How I designed this project and which
            technologies I used in this project. It can be understood with the
            help of a full architecture block diagram.
          </p>
        </div>
        <div className={Styles.MainFeatureDiv}>
          <div className={Styles.subfeatureDivOne}>
            <div className={Styles.videoOneDesc}>
              <h2 className={Styles.featureTitle}>Create Your Visionboard</h2>
              <ul className={Styles.listDesign}>
                <li>
                  In community updates users can see the other users goals.
                </li>
                <li>
                  Custom navigation bar built with a stylish UI to match
                  application design.
                </li>
                <li>
                  In goals analytics feature users can see total goals,
                  completed and incompleted goals information in bar chart,
                  goals category by percentage in pie chart and goals
                  information by month for the current year in vertical bar
                  chart.
                </li>
                <li>
                  In visionboard users can see more than 50 random images and
                  more than 30 quotes images also have permission to add new
                  custom images and quotes.
                </li>
              </ul>
            </div>
            <div className={Styles.backDivOne}></div>
            <div className={Styles.imageOneDiv}>
              <img
                className={Styles.gifImageOne}
                src={require("../../../assets/images/visionboard.gif")}
                alt="ViziPlaning"
              ></img>
            </div>
          </div>

          <div className={Styles.subfeatureDivOne}>
            <div className={Styles.backDivTwo}></div>
            <div className={Styles.imageTwoDiv}>
              <img
                className={Styles.gifImageTwo}
                src={require("../../../assets/images/visionboard.gif")}
                alt="ViziPlaning"
              ></img>
            </div>
            <div className={Styles.videoTwoDesc}>
              <h2 className={Styles.featureTitle}>Create Your Goals</h2>
              <ul className={Styles.listDesign}>
                <li>
                  In community updates users can see the other users goals.
                </li>
                <li>
                  Custom navigation bar built with a stylish UI to match
                  application design.
                </li>
                <li>
                  In goals analytics feature users can see total goals,
                  completed and incompleted goals information in bar chart,
                  goals category by percentage in pie chart and goals
                  information by month for the current year in vertical bar
                  chart.
                </li>
                <li>
                  In visionboard users can see more than 50 random images and
                  more than 30 quotes images also have permission to add new
                  custom images and quotes.
                </li>
              </ul>
            </div>
          </div>
        </div>

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
      <div className={Styles.sectionTwoDiv}>
        <img
          style={{ width: "85%", height: "100vh" }}
          src={require("../../../assets/images/ViziPlan_FullStructureDiagram.png")}
          alt="ViziPlaning"
        ></img>
      </div>
    </div>
  );
};
export default About;
