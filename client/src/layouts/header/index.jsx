import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="left">
              <img
                src="https://preview.colorlib.com/theme/plumber/img/logo.png"
                alt=""
              />
            </div>
            <div className="right">
              <ul>
                <li>
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                  <NavLink to="/">SERVICES</NavLink>
                </li>
                <li>
                  <NavLink to="/">FEATURES</NavLink>
                </li>
                <li>
                  <NavLink to="/">TESTIMONAIL</NavLink>
                </li>
                <li>
                  <NavLink to="/">CONTACT</NavLink>
                </li>
                <li>
                  <NavLink to="/">PAGES</NavLink>
                </li>
                <li>
                  <NavLink to="/add-cards">ADD</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
