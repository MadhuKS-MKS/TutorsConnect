import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";

export default class addDonors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      contact: "",
      email: "",
      classes: "",
      categories: [],
      fees: "",
      schoolName: "",
      category: "",
      file: [],
    };
    // this.onChange = this.onChange.bind(this);
    // this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  componentDidMount = async () => {
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
        categories: res.data.data,
      });
      console.log(this.state.categories);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  // Input on change
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // Dropdown change
  handleDropdownChange = (e) => {
    this.setState({ category: e.target.value });
    console.log(e.target.value);
  };
  // fileupload
  onChangeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
    });
    console.log(this.state.file);
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.file, this.state.file.name);

    console.log(data);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post(
        `http://localhost:5001/api/v1/tutor/photo`,
        data,
        config
      );
      console.log(res.data.data);

      const products = {
        name: this.state.name,
        classes: this.state.classes,
        subject: this.state.category,
        schoolName: this.state.schoolName,

        email: this.state.email,
        contact: this.state.contact,
        fees: this.state.fees,
        image: res.data.data,
      };
      const body = JSON.stringify(products);
      console.log(body);
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.post(
        `http://localhost:5001/api/v1/tutor`,
        body,
        config1
      );
      console.log(result);
      alert(`Tutor Details Added ${result.data.data.name}`);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <div className='container itmtop'>
        <div className=''>
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className='' id='login-second'>
            <div class='page-wrapper p-t-50 p-b-50'>
              <div class='wrapper wrapper--w900 '>
                <div class='card cardH card-6 '>
                  <div class='card-heading m-4'>
                    <h2 class='title text-dark'>Add Qualification</h2>
                  </div>
                  <div class='card-body'>
                    <form
                      onSubmit={this.onSubmit}
                      encType='multipart/form-data'
                    >
                      <div class='form-row frow'>
                        <div class='name'>Tutor name:</div>
                        <div class='value'>
                          <input
                            class='input--style-6'
                            type='text'
                            name='name'
                            value={this.state.name}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>

                      <div className='form-row frow'>
                        <div className='name'>Subject</div>
                        <div className='value'>
                          <select
                            id='dropdown form-control'
                            className='btn bg-light'
                            onChange={this.handleDropdownChange}
                          >
                            <option value='nocat'>Subject</option>
                            {this.state.categories.map((category) => (
                              <option key={category._id} value={category._id}>
                                {category.catname}
                              </option>
                            ))}
                          </select>
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
                              value={this.state.classes}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div class='form-row frow'>
                        <div class='name'>Upload Image:</div>
                        <div class='value'>
                          <div class='input-group js-input-file'>
                            <input
                              class='input-file'
                              type='file'
                              name='file'
                              id='file'
                              onChange={this.onChangeHandler}
                            />
                            <label class='label--file' htmlFor='file'>
                              Choose file
                            </label>
                            <span class='input-file__info'>No file chosen</span>
                          </div>
                          <div class='label--desc'>
                            Upload your Document/Id proff or any other relevant
                            file. Max file size 50 MB
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
                              value={this.state.schoolName}
                              onChange={this.onChange}
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
                              value={this.state.email}
                              onChange={this.onChange}
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
                              value={this.state.contact}
                              onChange={this.onChange}
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
                              value={this.state.fees}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div class='card-footer'>
                        <button
                          class='btn btn--radius-2 btn-gray'
                          type='submit'
                        >
                          ADD
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
