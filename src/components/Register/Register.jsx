import React, { useState } from "react";
import "./Register.css";
import img from "../../assets/image/login.svg";
import { Link, useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory()
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    
    
    setUser({...user, [name]:value})
  }

  const postUser = async(e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch('/register', {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
    const data = await res.json()

    if(data.status === 422 || !data){
      window.alert("Invalid registration")
    }else{
      window.alert("Registration successful")
      history.push('/login')
    }
  }
  return (
    <>
      <div className="register-page">
        <div className="register-form">
          <h2>Registration Form</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-5 register-col">
                <img className="register-img" src={img} alt="" />
              </div>
              <div className="col-md-2 register-form-col"></div>
              <div className="col-md-5">
                <form method="POST">
                
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="Phone No."
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="Profession"
                    name="work"
                    value={user.work}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="cpassword"
                    value={user.cpassword}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <br />
                  <input
                    className="btn register-btn"
                    type="submit"
                    onClick={postUser}
                    value="Sign Up"
                  />
                  <div className="text-center">
                    <p>
                      or <br />
                      <Link to="login">already have an account?</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
