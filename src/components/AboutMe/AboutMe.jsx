import React, { useEffect } from "react";
import "./About.css";
import profile from '../../assets/image/ishtiaque.jpg'
import { useHistory } from "react-router";
const AboutMe = () => {
  const history = useHistory();
  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method:"GET",
        headers: {
          Accept:"application/json",
          "Content-Type": "application/json"
        },
        credentials:"include"
      }) 

      const data = await res.json()
      console.log(data);

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      history.push('/login')
      console.log(error)
    }
  }

  useEffect(() => {
    callAboutPage()
  })
  return (
    <>
      <div className="about-me">
        <div className="about-me-in-details">
          <form method="GET">
            <div className="row">
              <div className="col-md-4">
                <img className="profile-pic" src={profile} alt="" />
              </div>
              <div className="col-md-6">
                <h4>Ishtiaque</h4>
                <h6>Web Developer</h6>
                <p className="profile-rating">
                    RANKING: <span> 1/10 </span>
                  </p>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active about-btn"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
              </div>
              <div className="col-md-2">
                <input className="btn profile-btn" type="submit" value="Edit Profile" />
              </div>
            </div>

            <div className="row part-two">
              <div className="col-md-4">
                <div className="profile-work">
                  <p className="pt-3"><b>WORK LINK</b></p>
                  <i className="fab fa-youtube"></i>
                  <a 
                    href="https://www.youtube.com/channel/UCM9YYxKoOAGxIg21qIwabwQ"
                    target="_ishtiaque"
                  >
                    YouTube
                  </a>
                  <br />
                  <i className="fab fa-instagram"></i>
                  <a
                    href="https://www.youtube.com/channel/UCM9YYxKoOAGxIg21qIwabwQ"
                    target="_ishtiaque"
                  >
                    Instagram
                  </a>
                  <br />
                  <i className="fab fa-github"></i>
                  <a
                    href="https://www.youtube.com/channel/UCM9YYxKoOAGxIg21qIwabwQ"
                    target="_ishtiaque"
                  >
                    Github
                  </a>
                  <br />
                  <i className="fab fa-linkedin-in"></i>
                  <a
                    href="https://www.youtube.com/channel/UCM9YYxKoOAGxIg21qIwabwQ"
                    target="_ishtiaque"
                  >
                    Linkedin
                  </a>
                  <br />
                  <i className="fas fa-globe"></i>
                  <a
                    href="https://www.youtube.com/channel/UCM9YYxKoOAGxIg21qIwabwQ"
                    target="_ishtiaque"
                  >
                    Portfolio
                  </a>
                </div>
              </div>

              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content" id="pills-tabContent">

                    {/* about profile */}
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User ID</label>
                      </div>
                      <div className="col-md-6">
                        <p>7747728377988</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Kazi Md. Arif Ishtiaque</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>arifistiak.133@gmail.com</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>+88 01747-109833</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>Web Developer</p>
                      </div>
                    </div>
                  </div>
                  {/* timeline profile */}


                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">
                        <p>45</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div className="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
