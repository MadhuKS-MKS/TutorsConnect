import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";

export default class ShowTutors extends Component {
  constructor(props) {
    super(props);

    // this.getUser = this.getUser;
    this.state = {
      tutors: [],
    };
    // this.onLogout = this.onLogout.bind(this);
  }
  componentDidMount = async () => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5001/api/v1/users/tutors`,
        config
      );
      this.setState({
        tutors: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  onDeleteUser = async (user, e) => {
    e.preventDefault();
    // console.log(user);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.delete(`http://localhost:5001/api/v1/users/${user}`, config);

      alert("User Deleted");
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <div>
        <section>
          <div id='portfolio'>
            <div className='container showtop  login-second '>
              <div className='page-title text-center'>
                <h1 className='text-dark'>Tutors</h1>

                <hr className='pg-titl-bdr-btm' />
              </div>
              <div className='row'>
                <div className='col-lg-12 '>{/* categotize */}</div>
              </div>

              <div className='row' id='' style={{ opacity: 1 }}>
                {/*  */}
                <div className='container pt-4'>
                  <div className=' tabletrans '>
                    <div className='well'>
                      <div className='row mb-5'>
                        <div className='col-md-6'>
                          <div className='pull-right'>
                            <a
                              href='/main/addTutors'
                              className='btn btn-info btn-sm p-2'
                            >
                              Add Tutors
                            </a>
                          </div>
                        </div>

                        <div className='pull-left'>
                          <a
                            href='/main/Home'
                            className='btn btn-info btn-sm p-2'
                          >
                            Back to Home
                          </a>
                        </div>
                      </div>
                      <table className='table table-hover'>
                        <tr>
                          <th>
                            <label className='text-dark'>Img</label>
                          </th>
                          <th>
                            {" "}
                            <label className='text-dark'>Doctor Name</label>
                          </th>
                          <th>
                            {" "}
                            <label className='text-dark'>Location</label>
                          </th>
                          <th>
                            {" "}
                            <label className='text-dark'>Email</label>
                          </th>

                          <th>
                            {" "}
                            <label className='d-flex justify-content-center text-dark'>
                              Actions
                            </label>
                          </th>
                        </tr>
                        {this.state.tutors.map((doc) => (
                          <tr>
                            <td className='tbld'>
                              <img
                                src={`data:image/png;base64,${doc.img}`}
                                alt=''
                                width='150px'
                                height='100px'
                              ></img>
                            </td>
                            <td className='tbld text-dark'>{doc.name}</td>
                            <td className='tbld text-dark'>{doc.address}</td>
                            <td className='tbld text-dark'>{doc.email}</td>

                            <td className='d-flex justify-content-center tbld'>
                              <div className='btn-group '>
                                <a
                                  href=''
                                  className='btn btn-danger btn-md mr-5'
                                  value={doc._id}
                                  onClick={(e) => this.onDeleteUser(doc._id, e)}
                                >
                                  <i className='fa fa-trash-o'></i>
                                </a>

                                {/* <a href="" className="btn btn-info btn-md">
                                  <i className="fa fa-edit"></i>
                                </a> */}
                              </div>
                            </td>
                          </tr>
                        ))}
                        {/*                      <tr>
                        <td className="tbld">
                          <img
                            src="data:image/png;base64,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"
                            alt=""
                            width="150px"
                            height="100px"
                          ></img>
                        </td>
                        <td className="tbld text-dark">2</td>
                        <td className="tbld text-dark">3</td>
                        <td className="tbld text-dark">g</td>

                        <td className="d-flex justify-content-center tbld">
                          <div className="btn-group ">
                            <a href="" className="btn btn-danger btn-md mr-5">
                              <i className="fa fa-trash-o"></i>
                            </a>

                            <a href="" className="btn btn-info btn-md">
                              <i className="fa fa-edit"></i>
                            </a>
                          </div>
                        </td>
                      </tr>


                      <tr>
                        <td className="tbld">
                          <img
                            src="data:image/png;base64,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"
                            alt=""
                            width="150px"
                            height="100px"
                          ></img>
                        </td>
                        <td className="tbld text-dark">2</td>
                        <td className="tbld text-dark">3</td>
                        <td className="tbld text-dark">g</td>

                        <td className="d-flex justify-content-center tbld">
                          <div className="btn-group ">
                            <a href="" className="btn btn-danger btn-md mr-5">
                              <i className="fa fa-trash-o"></i>
                            </a>

                            <a href="" className="btn btn-info btn-md">
                              <i className="fa fa-edit"></i>
                            </a>
                          </div>
                        </td>
                      </tr> */}

                        {/* <tr>
                        <td className="tbld">
                          <img
                            src="data:image/png;base64,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"
                            alt=""
                            width="150px"
                            height="100px"
                          ></img>
                        </td>
                        <td className="tbld text-dark">2</td>
                        <td className="tbld text-dark">3</td>
                        <td className="tbld text-dark">g</td>

                        <td className="d-flex justify-content-center tbld">
                          <div className="btn-group ">
                            <a href="" className="btn btn-danger btn-md mr-5">
                              <i className="fa fa-trash-o"></i>
                            </a>

                            <a href="" className="btn btn-info btn-md">
                              <i className="fa fa-edit"></i>
                            </a>
                          </div>
                        </td>
                      </tr> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
