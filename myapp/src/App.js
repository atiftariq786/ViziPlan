import React from "react";
import { Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Login from "./container/Login/Login";
import About from "./components/Pages/About/About";
import AppDemo from "./components/Pages/Demo/Demo";
import FutureDev from "./components/Pages/FutureDev/FutureDev";
import LandingPage from "./components/Pages/Landing/LandingPage";
import "./App.css";

function App() {
  return (
    <Layout>
      <Route path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/about/" component={About} />
      <Route path="/appdemo/" component={AppDemo} />
      <Route path="/future-dev/" component={FutureDev} />
    </Layout>
  );
}

export default App;
