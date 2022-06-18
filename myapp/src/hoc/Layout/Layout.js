import React, { Fragment } from "react";
import Toolbar from "../../container/Navigation/Toolbar";
//import TempModel from "../../components/Model/AddImage/temp";
import Styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Toolbar />

      <main className={Styles.content}>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
