import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>we are sorry, page not found</h2>
          <p>
            the page your are looking for might have been removed had its name
            changed or is temporarily unavailable
          </p>
          <Link to="/">Back to Home Page</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
