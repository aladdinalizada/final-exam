import axios from "axios";
import React, { useEffect } from "react";
import "./index.scss";
const SendMessageAndLocation = () => {
  const handlesubmit = () => {
    const name = document.getElementsByClassName("name");
    const email = document.getElementsByClassName("email");
    const message = document.getElementsByClassName("message");

    const postDatabody = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    // const postData = axios
    //   .post("http://localhost:3000/cards", postDatabody)
    //   .then(function (response) {
    //     console.log(response);
    //   });

    // postData();
  };
  return (
    <div style={{ marginTop: "180px" }}>
      <div className="sendmessageandlocation">
        <div className="container">
          <div className="content">
            <div className="left">
              <div>
                <iframe
                  width={370}
                  height={400}
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=520&height=400&hl=en&q=%20+(Brookleyn)&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                />
              </div>
            </div>
            <div className="right">
              <form onSubmit={handlesubmit()}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="name"
                />
                <input
                  type="text"
                  placeholder="Enter email adress"
                  className="email"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="message"
                ></textarea>
                <button type="submit" onClick={() => handlesubmit()}>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessageAndLocation;
