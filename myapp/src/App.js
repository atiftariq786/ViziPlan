import React from "react";
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
import VisionBoard from "./container/FeaturePages/VisionBoard/VisionBoard";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "./App.css";

function App() {
  const loggedInStatus = useSelector(
    (state) => state.authentication.isLoggedin
  );

  return (
    <Layout>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/about" component={About} />
      <Route path="/appdemo" component={AppDemo} />
      <Route path="/future-dev" component={FutureDev} />
      {/*========================== Restricted routes ===============================*/}
      <Route exact path="/visionboard">
        {loggedInStatus ? <VisionBoard /> : <Redirect to="/" />}
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
