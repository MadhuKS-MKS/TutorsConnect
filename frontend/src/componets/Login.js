import React, { Component, Fragment } from "react";
import "./CSS/App.css";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      type: "",
      isAuth: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      type: this.props.match.params.type,
    });
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit = async (e) => {
    e.preventDefault();

    const login = {
      email: this.state.email,
      password: this.state.password,
    };

    const body = JSON.stringify(login);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(body);

    try {
      const res = await axios.post(
        "http://localhost:5001/api/v1/auth/login",
        body,
        config
      );
      console.log(res.data.token);
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("isAuth", true);
      this.setState({
        isAuth: true,
      });
    } catch (error) {
      alert("error login");
    }
  };
  render() {
    const type = this.state.type;
    let social = {};
    let signup, login;
    social = "#ffc312";
    signup = <a href={`/signup/${type}`}>Sign Up</a>;

    return (
      <Fragment>
        {this.state.isAuth ? (
          type == "user" ? (
            <Redirect isAuth={this.state.isAuth} to='/user/Home' />
          ) : type == "tutor" ? (
            <Redirect isAuth={this.state.isAuth} to='/tutor/Home' />
          ) : type == "admin" ? (
            <Redirect isAuth={this.state.isAuth} to='/main/Home' />
          ) : (
            <Redirect isAuth={this.state.isAuth} to='/' />
          )
        ) : (
          <div className='container logintop '>
            <div className=''>
              {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
              <div className=' ' id='login-second'>
                <div className='container'>
                  <div className='d-flex justify-content-center'>
                    <div className='card animated bounce' id='login-card'>
                      <div className='card-header'>
                        <h3 className='mt-5'> {type} signin </h3>
                      </div>
                      <div className='card-body'>
                        <form onSubmit={this.onSubmit}>
                          <div className='input-group form-group'>
                            <div className='input-group-prepend'>
                              <span
                                className='input-group-text'
                                style={{ background: social }}
                              >
                                <i className='fa fa-user'></i>
                              </span>
                            </div>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='username'
                              name='email'
                              value={this.state.email}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className='input-group form-group'>
                            <div className='input-group-prepend'>
                              <span
                                className='input-group-text'
                                style={{ background: social }}
                              >
                                <i className='fa fa-key'></i>
                              </span>
                            </div>
                            <input
                              type='password'
                              className='form-control'
                              placeholder='password'
                              name='password'
                              value={this.state.password}
                              onChange={this.onChange}
                            />
                          </div>

                          <div className='form-group '>
                            <button
                              type='submit'
                              value='Login'
                              className='btn float-right login_btn btn-block '
                              style={{
                                backgroundColor: social,
                              }}
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                      <ul className='social-link'>
                        <li>
                          <a href='(0)'>
                            <i className='fa fa-twitter '></i>
                          </a>
                        </li>
                        <li className='facebook animated bounceIn wow delay-03s animated'>
                          <a href='(0)'>
                            <i className='fa fa-facebook '></i>
                          </a>
                        </li>
                        <li className='pinterest animated bounceIn wow delay-04s animated'>
                          <a href='(0)'>
                            <i className='fa fa-pinterest '></i>
                          </a>
                        </li>
                        <li className='dribbble animated bounceIn wow delay-06s animated'>
                          <a href='(0)'>
                            <i className='fa fa-instagram '></i>
                          </a>
                        </li>
                      </ul>
                      <div className='card-footer'>
                        <div className='d-flex justify-content-center links'>
                          Don't have an account?
                          {signup}
                        </div>
                        <div className='d-flex justify-content-center'>
                          <a href='/reset'>Forgot your password?</a>
                          <a href='/main/Home'>Admin</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Login;
