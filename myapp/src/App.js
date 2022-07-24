import React, { Fragment, useEffect, useState } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { goalActions } from "./store/goals-slice";
import Layout from "./hoc/Layout/Layout";
import Login from "./container/Login/Login";
import Signup from "./container/Signup/Signup";
import About from "./components/Pages/About/About";
import AppDemo from "./components/Pages/Demo/Demo";
import FutureDev from "./components/Pages/FutureDev/FutureDev";
import LandingPage from "./components/Pages/Landing/LandingPage";
import Dashboard from "./container/FeaturePages/Dashboard/Dashboard";
import Goals from "./container/FeaturePages/Goals/Goals";
import AddGoal from "./container/FeaturePages/Goals/AddGoal/AddGoal";
import VisionBoard from "./container/FeaturePages/VisionBoard/VisionBoard";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import API from "./services/utils/API";
import { selectedImageActions } from "./store/selectedImage-slice";
import { authActions } from "./store/auth-slice";
import WrappedRoutes from "./WrappedRoutes";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [queryIsDone, setQueryStatus] = useState(false);

  useEffect(() => {
    API.isUserLoggedin()
      .then((response) => {
        console.log(response, "App.js isloggedin");
        setQueryStatus(true);

        if (response.data.state === "success") {
          console.log("is success");
          dispatch(
            authActions.isLoggedInUser({
              isSignedin: true,
              loggedInUsername: response.data.user.firstname,
            })
          );
        }
      })
      .catch(() => {
        setQueryStatus(true);
      });
  }, []);

  return (
    <Fragment>
      {!queryIsDone && (
        <div
          style={{
            margin: "25% 50% 0 50%",
            position: "relative",
          }}
        >
          <Spinner animation="border" variant="info" />
        </div>
      )}
      {queryIsDone && <WrappedRoutes />}
    </Fragment>
  );
}
export default App;
