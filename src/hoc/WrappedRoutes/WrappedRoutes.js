import React, { useEffect, Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { goalActions } from "../../store/goals-slice";
import Layout from "../Layout/Layout";
import Login from "../../container/Login/Login";
import Signup from "../../container/Signup/Signup";
import About from "../../components/Pages/About/About";
import LandingPage from "../../components/Pages/Landing/LandingPage";
import Dashboard from "../../container/FeaturePages/Dashboard/Dashboard";
import Goals from "../../container/FeaturePages/Goals/Goals";
import AddGoal from "../../container/FeaturePages/Goals/AddGoal/AddGoal";
import VisionBoard from "../../container/FeaturePages/VisionBoard/VisionBoard";
import { useSelector, useDispatch } from "react-redux";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import API from "../../services/utils/API";
import { selectedImageActions } from "../../store/selectedImage-slice";

function WrappedRoutes() {
  const dispatch = useDispatch();
  const loggedInStatus = useSelector(
    (state) => state.authentication.isLoggedin
  );
  useEffect(() => {
    if (loggedInStatus) {
      API.savedGoal("allGoals").then((result) => {
        dispatch(goalActions.totalGoals(result.data));
      });

      API.getSelectedImages().then((response) => {
        // console.log(response.data, "Get Saved Selected Images from backend");
        dispatch(selectedImageActions.savedImages(response.data));
      });
    }
  }, []);
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route exact path="/login">
            {loggedInStatus ? <Redirect to="/visionboard" /> : <Login />}
          </Route>
          <Route path="/signup">
            {loggedInStatus ? <Redirect to="/dashboard" /> : <Signup />}
          </Route>
          <Route path="/about" component={About} />
          {/*========================== Restricted routes ===============================*/}
          <Route exact path="/">
            {loggedInStatus ? <Dashboard /> : <LandingPage />}
          </Route>
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
        </Switch>
      </Layout>
    </Fragment>
  );
}
export default WrappedRoutes;
