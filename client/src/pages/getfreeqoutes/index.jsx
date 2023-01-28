import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const GetFreeQoutes = () => {
  return (
    <div>
      <div className="getfreeqoutes">
        <div className="container">
          <div className="content">
            <h2>Got Impressed to our features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <button>
              <Link to="/">GET A FREE QUOTE</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetFreeQoutes;
