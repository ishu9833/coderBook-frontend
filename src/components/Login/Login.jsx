import React, { useState } from "react";
import "./Login.css";
import avatar from "../../assets/image/avatar.svg";
import login from "../../assets/image/login-2.svg";
import { Link, useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials!");
    } else {
      window.alert("Login successful");
      history.push("/");
    }
  };
  return (
    <>
      <div className="login-page">
        <div className="login-form">
          <h2 className="text-center">Login Form</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-5 login-image">
                <img className="login-avatar" src={login} alt="" />
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5 login-form-area">
                <form method="POST">
                  <img className="avatar" src={avatar} alt="" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    required
                  />
                  <br />
                  <br />
                  <input
                    className="btn signin-button"
                    onClick={loginUser}
                    type="submit"
                    value="Sign in"
                  />
                  <p>or</p>
                  <Link to="/signup">
                    <p>Create an account</p>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
