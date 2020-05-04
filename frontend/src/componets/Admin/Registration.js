import React, { Component } from "react";
// import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

class Registration extends Component {
  state = {
    // name={},
  };

  render() {
    return (
      <div className="container mt-5 mtop ">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="" id="login-second">
            <div class="page-wrapper p-t-50 p-b-50">
              <div class="wrapper wrapper--w900">
                <div class="card cardH card-6 ">
                  <div class="card-heading">
                    <h2 class="title text-dark ">&nbsp;&nbsp;&nbsp;&nbsp;Registration</h2>
                  </div>
                  <div class="card-body  text-light">
                    <form method="POST">
                      <div class="form-row">
                        <div class="name">Tutor name</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Subject</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Tutor Location</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Experience</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Email address</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder="example@email.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Password</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Re-Password</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                  
                    </form>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn--radius-2 btn-success" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;
