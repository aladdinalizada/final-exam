import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="content">
              <h1>WE’RE YOUR PLUMBER</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim. sed do eiusmod tempor incididunt.
              </p>
              <button>
                <Link to="/">BUY NOW FOR $9.99</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
