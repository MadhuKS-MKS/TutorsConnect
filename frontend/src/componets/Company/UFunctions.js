import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CompanyHome from "./CompanyHome";
// import fRegistration from "./Registration";
import CompanyNavbar from "./CompanyNavbar";
import Category from "./Category";
import Tutors from "./Tutors";
import axios from "axios";
import QuickModel from "./QuickModel";

export default class All extends Component {
  state = {
    users: [],
    tutors: [],
    category: [],
  };

  getCategory = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5001/api/v1/category/",
        config
      );
      this.setState({
        category: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  getTutors = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5001/api/v1/tutor`,
        config
      );
      this.setState({
        tutors: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <Router>
        <div className=''>
          <CompanyNavbar />

          <Switch>
            <Route
              exact
              path={"/user/Home"}
              render={(props) => (
                <CompanyHome
                  {...props}
                  user={this.state.user}
                  getTutors={this.getTutors}
                  // getCategory={this.getCategory}
                  tutors={this.state.tutors}
                  // category={this.state.category}
                />
              )}
            />
            {/* <Route exact path={"/user/Home"} component={CompanyHome} /> */}
            <Route
              exact
              path={"/user/Category"}
              render={(props) => (
                <Category
                  user={this.state.user}
                  getTutors={this.getTutors}
                  getCategory={this.getCategory}
                  tutors={this.state.tutors}
                  category={this.state.category}
                />
              )}
            />
            <Route path={"/user/tutors"} component={Tutors} />
            <Route path={"/user/ShowTutors"} component={QuickModel} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;
