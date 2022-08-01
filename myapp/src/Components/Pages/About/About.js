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
      <div className={Styles.descriptionDiv}>
        <h2 style={{ textAlign: "center" }}>About</h2>
        <h5>The App</h5>
        <p>
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
        <div>
          <img
            style={{ width: "500px", height: "400px" }}
            src={require("../../../assets/images/viziPlan.gif")}
            alt="ViziPlaning"
          ></img>
        </div>

        <h5>Feature</h5>
        <p>
          I applied user authentication using passport.js Form validation
          applied for login, signup and add goals. Users can see the frontend
          and backend structure of the app in the architecture diagram. Users
          can watch the app demo video in the “watch demo” and “information”
          option. Custom navigation bar built with a stylish UI to match
          application design. In visionboard users can see more than 50 random
          images and more than 30 quotes images also have permission to add new
          custom images and quotes. In community updates users can see the other
          users goals. In add goals users can add information through the input
          field and be able to select categories from the drop down list and
          also have the option to set goals to public and private with toggle
          switch. In goals analytics feature users can see total goals,
          completed and incompleted goals information in bar chart, goals
          category by percentage in pie chart and goals information by month for
          the current year in vertical bar chart. In the saved goals feature,
          users can update, delete and complete the goals. In the saved
          completed goals list users can only delete the goals.
        </p>
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
      <div className={Styles.aboutImage}>
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
