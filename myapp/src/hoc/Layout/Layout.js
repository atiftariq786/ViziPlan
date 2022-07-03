import React, { Fragment } from "react";
import Toolbar from "../../container/Navigation/Toolbar";
//import TempModel from "../../components/Model/AddImage/temp";
import Styles from "./Layout.module.css";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const loggedIn = useSelector((state) => state.authentication.isLoggedin);

  let showToolbar = "";
  if (loggedIn) {
    showToolbar = <Toolbar />;
  }
  return (
    <Fragment>
      {showToolbar}

      <main className={Styles.content}>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
