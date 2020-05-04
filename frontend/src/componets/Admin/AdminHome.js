import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/donor.css";

class AdminHome extends Component {
  render() {
    return (
      <Fragment>
        {/* {/* End of Navbar */}

        {/* <section id="sectionF1">
          <div className="row container-fluid m-5 ">
            <div className="col-md-3">
              <div className="card p-3">
                <div className="card text-center">
                  <img className="card-img-top" src={logo} alt="" /> 
                  <i className="fa fa-book fa-5x "></i>
                  <div className="card-body">
                    <h4 className="card-title">Products</h4>
                    <p className="card-text">lists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}
        <section className='counts section-bg mt-5'>
          <div className='container mt-5'>
            <div className='row'>
              <div
                className='col-lg-3 col-md-6 text-center  animated fadeInUp wow animated'
                data-aos='fade-up'
              >
                <div className='count-box counter-up animated swing'>
                  <i
                    className='fa fa-smile-o fa-5x'
                    style={{ color: "#20b38e" }}
                  ></i>
                  <p>
                    <span className='counter-up animated swing'>{}</span>
                  </p>
                  <p>Students</p>
                </div>
              </div>

              <div
                className='col-lg-3 col-md-6 text-center animated fadeInUp wow animated'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <div className='count-box counter-up animated swing'>
                  <i
                    className='fa fa-medkit fa-5x'
                    style={{ color: "#c042ff" }}
                  ></i>
                  <p>
                    <span className='counter-up animated swing'></span>
                  </p>
                  <p>Tuitions</p>
                </div>
              </div>

              <div
                className='col-lg-3 col-md-6 text-center animated fadeInUp wow animated'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                <div className='count-box counter-up animated swing'>
                  <i
                    className='fa fa-comments fa-5x'
                    style={{ color: "#46d1ff" }}
                  ></i>
                  <p>
                    <span className='counter-up animated swing'>
                      <i></i>
                    </span>
                  </p>
                  <p>Communication</p>
                </div>
              </div>

              <div
                className='col-lg-3 col-md-6 text-center animated fadeInUp wow animated'
                data-aos='fade-up'
                data-aos-delay='600'
              >
                <div className='count-box counter-up animated swing'>
                  <i
                    className='fa fa-users fa-5x'
                    style={{ color: "#ffb459" }}
                  ></i>
                  <p>
                    {" "}
                    <span className='counter-up animated swing'></span>
                  </p>
                  <p>Services</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default AdminHome;
