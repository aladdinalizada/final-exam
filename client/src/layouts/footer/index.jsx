import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <div>
      <div className="footer" style={{ marginTop: "130px" }}>
        <div className="container">
          <div className="content">
            <div className="about-us">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
              <p>
                Copyright ©2023 All rights reserved | This template is made with
                <i class="fa-regular fa-heart"></i> by <a href="#">Colorib</a>
              </p>
            </div>
            <div className="newsletter">
              <h3>Newsletter</h3>
              <p>Stay update with our latest</p>
              <div className="sendmail">
                <input type="text" placeholder="Enter Email" />
                <button>
                  <i class="fa-solid fa-right-long"></i>
                </button>
              </div>
            </div>
            <div className="follow-us">
              <h3>Follow Us</h3>
              <p>Let us be social</p>
              <div className="icons">
                <ul>
                  <li>
                    <i class="fa-brands fa-facebook-f"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-basketball"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-behance"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
