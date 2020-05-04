import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/donor.css";
import Category from "./Category";
import axios from "axios";

class CompanyHome extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
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
      console.log(res.data.data);
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  onDeleteCategory = async (category, e) => {
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
      await axios.delete(
        `http://localhost:5001/api/v1/category/${category}`,
        config
      );

      alert("Category Deleted");
    } catch (err) {
      console.log("Can't load the items");
    }
  };
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
                className='col-lg-12 text-center animated fadeInUp wow animated'
                data-aos='fade-up'
                data-aos-delay='600'
              >
                <div>
                  <div className='row'>
                    <div className=' col-lg-12 mb-50'>
                      <h2> List of Category</h2>
                      <div className='row mt-5' id='category'>
                        <div className='col-md-12'>
                          <div className='card'>
                            <div className='card-body'>
                              <h4 className='card-title'>Category</h4>{" "}
                              <div className='pull-right mb-2'>
                                <div className='text-center'>
                                  <a
                                    type='button'
                                    className='btn btn-primary'
                                    href='/main/category'
                                  >
                                    <i className='fa fa-plus fa-1x'>
                                      Add Category
                                    </i>
                                  </a>
                                </div>
                              </div>
                              <div className='table-responsive '>
                                <table className='table'>
                                  <thead>
                                    <tr>
                                      <th> No. </th>
                                      <th> Name </th>

                                      <th> Action </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {this.state.categories.map(
                                      (category, index) => (
                                        <tr key={category._id}>
                                          <td>{index + 1} </td>
                                          <td>{category.catname} </td>

                                          <td className='actions' data-th=''>
                                            <button
                                              className='btn btn-danger btn-sm'
                                              onClick={(e) =>
                                                this.onDeleteCategory(
                                                  category._id,
                                                  e
                                                )
                                              }
                                            >
                                              <i className='fa fa-trash-o'></i>
                                            </button>
                                          </td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default CompanyHome;
