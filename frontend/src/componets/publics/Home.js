import React, { Component, Fragment } from "react";
// import "../CSS/Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        
    
  
<div class="banner">
  <div>
  <section id="section1" className="" style={{ marginTop: 80 + "px" }}>
         
          
          <div className="rightside rollIn animated wow animated">
            <div className="container ">
           
            <h4> Welcome To Our Studio!</h4>
              <h1>IT'S NICE TO MEET YOU</h1>
           
              <a href="/Home#product" className="btn btn-success welcome">
              Tell Me More
              </a>
             
            </div>
          </div>
          <div className="leftside">
            
            <img
              src="https://previews.123rf.com/images/tudmeak/tudmeak1805/tudmeak180500020/100814967-online-training-courses-vector-illustration-distance-learning-business-education-concept-internet-st.jpg"
              alt=""
            />
          </div>
        </section>
  </div>

</div>
 {/*  */}
 <section id="service">
          <div className="container">
            <h2>About Us</h2>
            <div className="service_area">
              <div className="row">
              <div className="col-lg-12">
                  <div className="service_block">
              
                    <p className="animated zoomIn wow animated">
                    Charitable giving is the act of giving money, goods or time to the unfortunate, either directly or by means of a charitable trust or other worthy cause.[9] Charitable giving as a religious act or duty is referred to as almsgiving or alms. The name stems from the most obvious expression of the virtue of charity; giving the recipients of it the means they need to survive. The impoverished, particularly those widowed or orphaned, and the ailing or injured, are generally regarded as the proper recipients of charity. The people who cannot support themselves and lack outside means of support sometimes become "beggars", directly soliciting aid from strangers encountered in public.

Some groups regard charity as being distributed towards other members from within their particular group. Although giving to those nearly connected to oneself is sometimes called charity—as in the saying "Charity begins at home"—normally charity denotes giving to those not related, with filial piety and like terms for supporting one's family and friends. Indeed, treating those related to the giver as if they were strangers in need of charity has led to the figure of speech "as cold as charity"—providing for one's relatives as if they were strangers, without affection.[10]

Most forms of charity are concerned with providing basic necessities such as food, water, clothing, healthcare and shelter, but other actions may be performed as charity: visiting the imprisoned or the homebound, ransoming captives, educating orphans, even social movements. Donations to causes that benefit the unfortunate indirectly, such as donations to fund cancer research, are also charity
                    </p>
                  </div>
                </div>
              
             
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/*  */}
        {/*  */}

      

        <section >
        <div className="row">
              <div className="col-lg-6 wow fadeInLeft animated">
              
                <div className=" address clearfix address1">
                  <h1>Address</h1>
                  <p className="address1">
                    We are trying to connect small and large farmers to sell
                    their quality product to the diffent places.
                  </p>
                  <p className="address1">If any suggestions or tips let us know</p>
                </div>
                <ul className="social-link">
                  <li >
                    <a href="(0)">
                      <i className="fa fa-twitter "></i>
                    </a>
                  </li>
                  <li className="facebook animated bounceIn wow delay-03s animated">
                    <a href="(0)">
                      <i className="fa fa-facebook "></i>
                    </a>
                  </li>
                  <li className="pinterest animated bounceIn wow delay-04s animated">
                    <a href="(0)">
                      <i className="fa fa-pinterest "></i>
                    </a>
                  </li>
                  <li className="dribbble animated bounceIn wow delay-06s animated">
                    <a href="(0)">
                      <i className="fa fa-instagram "></i>
                    </a>
                  </li>
               
                
                </ul>
              </div>
              <div className="col-lg-6 wow fadeInUp delay-06s animated">
                <div className="form">
                <h1 className="address2">Contact Us</h1>
                  <div id="sendmessage" className="address2">
                    Sent Message Thank you!
                  </div>
                  <div id="errormessage"></div>
                  <form
                    action=""
                    method="post"
                    role="form"
                    className="contactForm"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control input-text"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control input-text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div className="validation"></div>
                    </div>

                    <button type="submit" className="btn input-btn">
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
              
            </div>
      
        </section>
     
        {/*  */}
        {/*  */}
        {/*  */}

        <section className="subscribe-section">
  <div className="subscribe-form">
  <form action="#" className="subscribe-form">
    <label for="text"className="clr" >Join our exclusive newsletter</label>
    <input type="email" name="email" className="clr" placeholder="Enter your email address"/>
    <span className="submit">
      <input type="submit" value="subscribe"/> <a  className="clr" >Subscribe</a>
    </span> 
  </form>
</div>
</section>
        {/*  */}
        {/*  */}
      </Fragment>
    );
  }
}

export default Home;
