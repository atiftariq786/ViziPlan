import React from "react";
import { Route } from "react-router-dom";
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
import ImagesList from "./container/FeaturePages/VisionBoard/ImagesList/ImagesList";
import "./App.css";

function App() {
  return (
    <Layout>
      <ImagesList />
      <Route path="/home" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/visionboard" component={VisionBoard} />
      <Route path="/goals" component={Goals} />
      <Route path="/about" component={About} />
      <Route path="/appdemo" component={AppDemo} />
      <Route path="/future-dev" component={FutureDev} />
    </Layout>
  );
}

export default App;
