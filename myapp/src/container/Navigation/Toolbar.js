import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import API from "../../services/utils/API";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import LogoutWarning from "../../components/Modal/Logout/Logout";
import Styles from "../Navigation/Toolbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Toolbar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  const splitlocation = pathname.split("/");
  const [showLogoutWarning, setShowLogoutWarning] = useState(false);

  const [isDashboardHovering, setIsDashboardHovering] = useState(false);
  const [isVisionBoardHovering, setIsVisionBoardHovering] = useState(false);
  const [isGoalsHovering, setIsGoalsHovering] = useState(false);
  const [isInfoHovering, setIsInfoHovering] = useState(false);
  const [isLogoutHovering, setIsLogoutHovering] = useState(false);

  const dashboardHoverOver = () => {
    setIsDashboardHovering(true);
  };

  const dashboardHoverOut = () => {
    setIsDashboardHovering(false);
  };
  const visionBoardHoverOver = () => {
    setIsVisionBoardHovering(true);
  };

  const visionBoardHoverOut = () => {
    setIsVisionBoardHovering(false);
  };
  const goalHoverOver = () => {
    setIsGoalsHovering(true);
  };

  const goalHoverOut = () => {
    setIsGoalsHovering(false);
  };
  const infoHoverOver = () => {
    setIsInfoHovering(true);
  };

  const infoHoverOut = () => {
    setIsInfoHovering(false);
  };

  const logoutHoverOver = () => {
    setIsLogoutHovering(true);
  };

  const logoutHoverOut = () => {
    setIsLogoutHovering(false);
  };
  const showLogoutModalHandler = () => {
    setShowLogoutWarning(!showLogoutWarning);
  };

  const currentUsername = useSelector(
    (state) => state.authentication.currentUser
  );
  const totalGoals = useSelector((state) => state.goals.totalGoalsArray);

  const logoutHandler = () => {
    API.userLogout().then((response) => {
      dispatch(authActions.userLogout(false));
      history.push("/");
    });
  };

  let goalsValid = "/goals";
  if (totalGoals.length === 0) {
    goalsValid = "/addGoal";
  }

  return (
    <div className={Styles.mainDiv}>
      {showLogoutWarning}
      <div className={Styles.contentOne}>
        <div>
          <p className={Styles.logo}>ViziPlan</p>
        </div>

        <div className={Styles.iconArea}>
          <div
            className={
              splitlocation[1] === "dashboard"
                ? Styles.activePage
                : Styles.iconBubble
            }
          >
            <NavLink to="/dashboard">
              <FontAwesomeIcon
                className={Styles.contentOneBtns}
                onMouseOver={dashboardHoverOver}
                onMouseOut={dashboardHoverOut}
                icon={faChartLine}
                size="2x"
              ></FontAwesomeIcon>
            </NavLink>
          </div>
          {isDashboardHovering && <p className={Styles.iconText}>Deshboard</p>}
        </div>
        <div className={Styles.iconArea}>
          <div
            className={
              splitlocation[1] === "visionboard"
                ? Styles.activePage
                : Styles.iconBubble
            }
          >
            <NavLink to="/visionboard">
              <FontAwesomeIcon
                className={Styles.contentOneBtns}
                onMouseOver={visionBoardHoverOver}
                onMouseOut={visionBoardHoverOut}
                icon={faPersonChalkboard}
                size="2x"
              />
            </NavLink>
          </div>
          {isVisionBoardHovering && (
            <p className={Styles.iconText}>Vision Board</p>
          )}
        </div>
        <div className={Styles.iconArea}>
          <div
            className={
              splitlocation[1] === "goals"
                ? Styles.activePage
                : Styles.iconBubble
            }
          >
            <NavLink to={goalsValid}>
              <FontAwesomeIcon
                className={Styles.contentOneBtns}
                onMouseOver={goalHoverOver}
                onMouseOut={goalHoverOut}
                icon={faBullseye}
                size="2x"
              />
            </NavLink>
          </div>
          {isGoalsHovering && <p className={Styles.iconText}>Goals</p>}
        </div>
        <div className={Styles.iconArea}>
          <div
            className={
              splitlocation[1] === "about"
                ? Styles.activePage
                : Styles.iconBubble
            }
          >
            <NavLink to="/about">
              <FontAwesomeIcon
                className={Styles.contentOneBtns}
                onMouseOver={infoHoverOver}
                onMouseOut={infoHoverOut}
                icon={faCircleInfo}
                size="2x"
              />
            </NavLink>
          </div>
          {isInfoHovering && <p className={Styles.iconText}>Information</p>}
        </div>
      </div>

      <div className={Styles.contentTwo}>
        <div className={Styles.visionBoard}>
          <FontAwesomeIcon icon={faUser} size="2x" />
          <p className={Styles.toolbarUserName}>{currentUsername}</p>
        </div>
        <div className={Styles.visionBoard}>
          <button className={Styles.logoutBtn} onClick={showLogoutModalHandler}>
            <FontAwesomeIcon
              className={Styles.logoutIcon}
              onMouseOver={logoutHoverOver}
              onMouseOut={logoutHoverOut}
              icon={faPowerOff}
              size="2x"
            />
          </button>
          {isLogoutHovering && <p className={Styles.iconText}>Logout</p>}
        </div>
      </div>
      <LogoutWarning
        logout={logoutHandler}
        showModal={showLogoutWarning}
        hideModal={showLogoutModalHandler}
      />
    </div>
  );
};
export default Toolbar;
