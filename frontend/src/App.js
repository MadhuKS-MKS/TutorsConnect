import React, { Fragment } from "react";
import Login from "./componets/Login";
import fRegistration from "./componets/Admin/Registration";
import "./componets/CSS/Home.css";

import Footer from "./componets/publics/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Functions from "./componets/Admin/Functions";
import AdminNavbar from "./componets/Admin/AdminNavbar";

import All from "./componets/publics/All";
// import Alert from "./componets/publics/Alert";
import UFunctions from "./componets/Company/UFunctions";
import CompanyNavbar from "./componets/Company/CompanyNavbar";
import MFunctions from "./componets/MainAdmin/MFunctions";
import MainNavbar from "./componets/MainAdmin/MainNavbar";
import UserHome from "./componets/UserAdmin/UserHome";
import PrivateRoute from "./componets/utils/PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className=''>
          {/* <Alert alert={this.state.alert} />
          <Navbar /> */}
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}
          <Switch>
            <Route exact path={"/Login/:type"} component={Login} />
          </Switch>
          <AdminNavbar />
          <CompanyNavbar />
          <MainNavbar />

          <Switch>
            <PrivateRoute role='tutor' path={"/tutor/"} component={Functions} />
            <PrivateRoute role='user' path={"/user/"} component={UFunctions} />
            <PrivateRoute path={"/main/"} component={MFunctions} />

            <All></All>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
