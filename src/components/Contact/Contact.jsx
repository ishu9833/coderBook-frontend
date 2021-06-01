import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <div className="head-area">
          <div className="container">
            <div className="row ">
              <div className="col-md-4 small-card d-flex justify-content-center align-items-center">
                <img src="" alt="" />
                <div className="contact-info-content">
                  <div className="contact-info-title">
                    <b>Phone</b>
                  </div>
                  <div className="contact-info-text">+88 01 864-154 939</div>
                </div>
              </div>

              <div className="col-md-4 small-card d-flex justify-content-center align-items-center">
                <img src="" alt="" />
                <div className="contact-info-content">
                  <div className="contact-info-title">
                    <b>Email</b>
                  </div>
                  <div className="contact-info-text">+88 01 864-154 939</div>
                </div>
              </div>

              <div className="col-md-4  small-card d-flex justify-content-center align-items-center">
                <img src="" alt="" />
                <div className="contact-info-content">
                  <div className="contact-info-title">
                    <b>Address</b>
                  </div>
                  <div className="contact-info-text">+88 01 864-154 939</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <h2>Get In Touch</h2>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <input type="text" placeholder="Your Name" required />
                </div>

                <div className="col-md-4">
                  <input type="text" placeholder="Email" required />
                </div>

                <div className="col-md-4">
                  <input type="text" placeholder="Phone" required />
                </div>
              </div>
              <br />
              <textarea
                placeholder="Message"
                name="message"
                id=""
                cols="75"
                rows="10"
              ></textarea>
              <br />
              <br />
              <input
                className="btn button"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
