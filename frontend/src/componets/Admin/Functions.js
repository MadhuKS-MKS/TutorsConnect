import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminHome from "./AdminHome";
// import fRegistration from "./Registration";
import AdminNavbar from "./AdminNavbar";
import addDonors from "./addDonors";
import showDonors from "./ShowDonors";

function App() {
  return (
    <Router>
      <div className=''>
        <AdminNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/tutor/Home"} component={AdminHome} />
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          <Route path={"/tutor/addDonors"} component={addDonors} />
          <Route path={"/tutor/showDonors"} component={showDonors} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
