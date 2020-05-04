import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainHome from "./MainHome";
// import fRegistration from "./Registration";
import MainNavbar from "./MainNavbar";
import ShowTutors from "./ShowTutors";
import ShowStudents from "./ShowStudents";
import addDonors from "./addDonors";
import Category from "./Category";
import addUser from "./addUser";

function App() {
  return (
    <Router>
      <div className=''>
        <MainNavbar />

        <Switch>
          <Route exact path={"/main/Home"} component={MainHome} />

          <Route path={"/main/ShowTutors"} component={ShowTutors} />
          <Route path={"/main/ShowStudents"} component={ShowStudents} />
          <Route path={"/main/category"} component={Category} />
          <Route path={"/main/addTutors"} component={addDonors} />
          <Route path={"/main/addUser"} component={addUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
