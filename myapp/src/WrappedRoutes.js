import React, { Fragment, useEffect } from "react";
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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import API from "./services/utils/API";
import { selectedImageActions } from "./store/selectedImage-slice";
import { authActions } from "./store/auth-slice";
import "./App.css";

function WrappedRoutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    API.savedGoal("allGoals").then((result) => {
      dispatch(goalActions.totalGoals(result.data));
    });

    API.getSelectedImages().then((response) => {
      // console.log(response.data, "Get Saved Selected Images from backend");
      dispatch(selectedImageActions.savedImages(response.data));
    });
  }, []);

  const loggedInStatus = useSelector(
    (state) => state.authentication.isLoggedin
  );

  console.log(loggedInStatus, "loggedInStatus");
  return (
    <Fragment>
      <Layout>
        <Switch>
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
          <Route exact path="/editGoal">
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
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Layout>
    </Fragment>
  );
}
export default WrappedRoutes;
