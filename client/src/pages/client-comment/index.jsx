import React from "react";

import "./index.scss";
import Slider from "react-slick";
const CommentClient = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="comments">
        <div className="container">
          <div className="content">
            <div className="head">
              <h2>What our Client’s Say about us</h2>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className="body">
              <div className="slider">
                <Slider {...settings}>
                  <div className="slide-cards">
                    <div className="1">
                      <img
                        src="https://preview.colorlib.com/theme/plumber/img/t1.png"
                        alt=""
                      />
                      <p>
                        Accessories Here you can find the best computer
                        accessory for your laptop, monitor, printer, scanner,
                        speaker, projector, hardware and more. laptop accessory
                      </p>
                      <h4>Mark Alviro Wiens</h4>
                      <p>CEO at Google</p>
                    </div>
                    <div className="1">
                      <img
                        src="https://preview.colorlib.com/theme/plumber/img/t2.png"
                        alt=""
                      />
                      <p>
                        Accessories Here you can find the best computer
                        accessory for your laptop, monitor, printer, scanner,
                        speaker, projector, hardware and more. laptop accessory
                      </p>
                      <h4>Mark Alviro Wiens</h4>
                      <p>CEO at Google</p>
                    </div>
                    <div className="1">
                      <img
                        src="https://preview.colorlib.com/theme/plumber/img/t3.png"
                        alt=""
                      />
                      <p>
                        Accessories Here you can find the best computer
                        accessory for your laptop, monitor, printer, scanner,
                        speaker, projector, hardware and more. laptop accessory
                      </p>
                      <h4>Mark Alviro Wiens</h4>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                  <div className="slide-cards">
                    <div className="1">
                      <img
                        src="https://preview.colorlib.com/theme/plumber/img/t1.png"
                        alt=""
                      />
                      <p>
                        Accessories Here you can find the best computer
                        accessory for your laptop, monitor, printer, scanner,
                        speaker, projector, hardware and more. laptop accessory
                      </p>
                      <h4>Mark Alviro Wiens</h4>
                      <p>CEO at Google</p>
                    </div>
                    <div className="1">
                      <img
                        src="https://preview.colorlib.com/theme/plumber/img/t2.png"
                        alt=""
                      />
                      <p>
                        Accessories Here you can find the best computer
                        accessory for your laptop, monitor, printer, scanner,
                        speaker, projector, hardware and more. laptop accessory
                      </p>
                      <h4>Mark Alviro Wiens</h4>
                      <p>CEO at Google</p>
                    </div>
                    <div className="1">
                      <img
                        src="https://preview.colorlib.com/theme/plumber/img/t3.png"
                        alt=""
                      />
                      <p>
                        Accessories Here you can find the best computer
                        accessory for your laptop, monitor, printer, scanner,
                        speaker, projector, hardware and more. laptop accessory
                      </p>
                      <h4>Mark Alviro Wiens</h4>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                  <div className="slide-cards">
                    <div className="1">
                      <img
                        src="https://preview.colorlib.com/theme/plumber/img/t1.png"
                        alt=""
                      />
                      <p>
                        Accessories Here you can find the best computer
                        accessory for your laptop, monitor, printer, scanner,
                        speaker, projector, hardware and more. laptop accessory
                      </p>
                      <h4>Mark Alviro Wiens</h4>
                      <p>CEO at Google</p>
                    </div>
                    <div className="1">
                      <img
                        src="https://preview.colorlib.com/theme/plumber/img/t2.png"
                        alt=""
                      />
                      <p>
                        Accessories Here you can find the best computer
                        accessory for your laptop, monitor, printer, scanner,
                        speaker, projector, hardware and more. laptop accessory
                      </p>
                      <h4>Mark Alviro Wiens</h4>
                      <p>CEO at Google</p>
                    </div>
                    <div className="1">
                      <img
                        src="https://preview.colorlib.com/theme/plumber/img/t3.png"
                        alt=""
                      />
                      <p>
                        Accessories Here you can find the best computer
                        accessory for your laptop, monitor, printer, scanner,
                        speaker, projector, hardware and more. laptop accessory
                      </p>
                      <h4>Mark Alviro Wiens</h4>
                      <p>CEO at Google</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentClient;
