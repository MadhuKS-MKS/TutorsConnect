import React, { Component } from "react";

import "../CSS/Home.css";
import "../CSS/animate.css";
import "../CSS/App.css";

import Home from "../publics/Home";
import Navbar from "../publics/Navbar";

import Contact from "../publics/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Forgotpasswrd from "../Forgotpsswrd";
import Registration from "./Registration";

export default class All extends Component {
  state = {
    users: [],
    products: [],
  };

  render() {
    return (
      <Router>
        <div className=''>
          <Switch>
            {" "}
            <Route path={"/reset"} component={Forgotpasswrd} />
            <Route path={"/signup/:role"} component={Registration} />
          </Switch>
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/Contact"} component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}
