import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";

export default class ShowDonors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutor: {},
      subject: {},
    };
  }
  componentDidMount = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.get(
        `http://localhost:5001/api/v1/tutor/me`,

        config
      );
      this.setState({
        tutor: result.data.data,
        subject: result.data.data.subject,
      });
      console.log(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      schoolName,
      name,
      // specialization,
      // catname,
      fees,
      classes,
      email,
      contact,
      image,
    } = this.state.tutor;
    return (
      <div className='container itmtop'>
        <div className=''>
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className='' id='login-second'>
            <div class='page-wrapper p-t-50 p-b-50'>
              <div class='wrapper wrapper--w900 '>
                <div class='card cardH card-6 '>
                  <div class='card-heading m-4'>
                    <h2 class='title text-dark'>Show Qualification</h2>
                  </div>
                  <div class='card-body'>
                    <form encType='multipart/form-data'>
                      <img src={`${image}`} className='img1' alt='' />
                      <div class='form-row frow'>
                        <div class='name'>Tutor name:</div>
                        <div class='value'>
                          <input
                            class='input--style-6'
                            type='text'
                            name='name'
                            value={name}
                          />
                        </div>
                      </div>

                      <div class='form-row frow'>
                        <div class='name'>Subject</div>
                        <div class='value'>
                          <input
                            class='input--style-6'
                            type='text'
                            name='name'
                            value={this.state.subject.catname}
                          />
                        </div>
                      </div>
                      <div class='form-row frow'>
                        <div class='name'>Grades/Class</div>
                        <div class='value'>
                          <div class='input-group'>
                            <input
                              class='input--style-6'
                              type='text'
                              name='classes'
                              placeholder=''
                              value={classes}
                            />
                          </div>
                        </div>
                      </div>

                      <div class='form-row frow'>
                        <div class='name'>School name</div>
                        <div class='value'>
                          <div class='input-group'>
                            <input
                              class='input--style-6'
                              type='text'
                              name='schoolName'
                              placeholder=''
                              value={schoolName}
                            />
                          </div>
                        </div>
                      </div>
                      <div class='form-row frow'>
                        <div class='name'>Email</div>
                        <div class='value'>
                          <div class='input-group'>
                            <input
                              class='input--style-6'
                              type='email'
                              name='email'
                              placeholder=''
                              value={email}
                            />
                          </div>
                        </div>
                      </div>
                      <div class='form-row frow'>
                        <div class='name'>Contact</div>
                        <div class='value'>
                          <div class='input-group'>
                            <input
                              class='input--style-6'
                              type='text'
                              name='contact'
                              placeholder=''
                              value={contact}
                            />
                          </div>
                        </div>
                      </div>
                      <div class='form-row frow'>
                        <div class='name'>Fees/Monthly</div>
                        <div class='value'>
                          <div class='input-group'>
                            <input
                              class='input--style-6'
                              type='text'
                              name='fees'
                              placeholder=''
                              value={fees}
                            />
                          </div>
                        </div>
                      </div>

                      <div class='card-footer'>
                        <button
                          class='btn btn--radius-2 btn-gray'
                          type='submit'
                          href='/tutor/edit'
                        >
                          Edit
                        </button>
                      </div>
                    </form>
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
