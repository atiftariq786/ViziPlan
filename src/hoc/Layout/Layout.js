import React, { Fragment } from "react";
import Toolbar from "../../container/Navigation/Toolbar";
//import VerticleNavbar from "../../components/Nav/Nav";
import Styles from "./Layout.module.css";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const loggedIn = useSelector((state) => state.authentication.isLoggedin);

  // let showToolbar = "";
  // if (loggedIn) {
  //   showToolbar = <Toolbar />;
  // }
  return (
    <Fragment>
      <main className={Styles.content}>
        {loggedIn && (
          <div className={Styles.sideNavBar}>
            <Toolbar />
          </div>
        )}
        <div
          className={
            loggedIn ? Styles.childrenDivWithToolbar : Styles.childrenDiv
          }
        >
          {props.children}
        </div>
      </main>
    </Fragment>
  );
};
export default Layout;
