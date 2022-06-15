import React from "react";
import { Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Login from "./container/Login/Login";
import About from "./components/InfoPages/About";
import AppDemo from "./components/InfoPages/Demo";
import FutureDev from "./components/InfoPages/FutureDev";
import "./App.css";

function App() {
  return (
    <Layout>
      <Route path="/" component={Login} />
      <Route path="/about/" component={About} />
      <Route path="/appdemo/" component={AppDemo} />
      <Route path="/future-dev/" component={FutureDev} />
    </Layout>
  );
}

export default App;
