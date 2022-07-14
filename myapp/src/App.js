import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import API from "./services/utils/API";
import { authActions } from "./store/auth-slice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    API.isUserLoggedin().then((response) => {
      console.log(response, "App.js isloggedin");

      if (response.data.state === "success") {
        console.log("is success");
        dispatch(
          authActions.isLoggedInUser({
            isSignedin: true,
            loggedInUsername: response.data.user.firstname,
          })
        );
      }
    });
  }, []);

  const loggedInStatus = useSelector(
    (state) => state.authentication.isLoggedin
  );

  console.log(loggedInStatus, "loggedInStatus");
  return (
    <Layout>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login">
        {loggedInStatus ? <Redirect to="/visionboard" /> : <Login />}
      </Route>

      <Route path="/signup" component={Signup} />
      <Route path="/about" component={About} />
      <Route path="/appdemo" component={AppDemo} />
      <Route path="/future-dev" component={FutureDev} />
      {/*========================== Restricted routes ===============================*/}
      <Route exact path="/visionboard">
        {loggedInStatus ? <VisionBoard /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/addGoal">
        {loggedInStatus ? <AddGoal /> : <Redirect to="/" />}
      </Route>
      <PrivateRoute
        exact
        path="/dashboard"
        loggedInStatus={loggedInStatus}
        component={Dashboard}
      />
      <PrivateRoute
        exact
        path="/goals"
        loggedInStatus={loggedInStatus}
        component={Goals}
      />
    </Layout>
  );
}
export default App;
