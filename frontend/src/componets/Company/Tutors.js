import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/donor.css";
import ShowItems from "./showItems";
import axios from "axios";
import QuickModel from "./QuickModel";

class CompanyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   cat: "",
      tutors: [],
      //   specialization: "",
    };
    // this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount = async () => {
    console.log(this.props.location.state.cat);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5001/api/v1/category/${this.props.location.state.cat}/tutors`,
        config
      );
      this.setState({
        tutors: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  onClickHandler = (e) => {
    // this.setState({ category: e.target.value });
    console.log(e.target.name);
  };

  render() {
    console.log(this.props);
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
          <div className=' container-fluid mt-5' id='product'>
            <h2> List Of Tutors</h2>

            <div className='row'>
              {/* {(!this.state.doctors)(
                <div>
                  <h2>No Doctors</h2>
                </div>
              )} */}
              {this.state.tutors.map((doc) => (
                <ShowItems
                  key={doc._id}
                  tutor={doc}
                  subject={doc.subject.catname}
                ></ShowItems>
              ))}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default CompanyHome;
