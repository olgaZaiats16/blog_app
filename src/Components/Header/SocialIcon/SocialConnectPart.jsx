import React from "react";
import "../../../App.css"
import "./SocialConnectPart.css"

const SocialConnectPart = () => {

  const insta_post_1 = require("../../../img/insta/instagram_1.png");
  const insta_post_2 = require("../../../img/insta/instagram_2.png");
  const insta_post_3 = require("../../../img/insta/instagram_3.png");
  const insta_post_4 = require("../../../img/insta/instagram_4.png");
  const insta_post_5 = require("../../../img/insta/instagram_5.png");
  const insta_post_6 = require("../../../img/insta/instagram_6.png");

  return (
    <div>
      <section className="social_connect_part">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="social_connect">
                <div className="single_social_connect">
                  <div className="social_connect_img">
                    <img src={insta_post_1}/>
                    <div className="social_connect_overlay">
                      <a href="#"></a>
                    </div>
                  </div>
                </div>
                <div className="single_social_connect">
                  <div className="social_connect_img">
                    <img src={insta_post_2}/>
                    <div className="social_connect_overlay">
                      <a href="#"></a>
                    </div>
                  </div>
                </div>
                <div className="single_social_connect">
                  <div className="social_connect_img">
                    <img src={insta_post_3}/>
                    <div className="social_connect_overlay">
                      <a href="#"></a>
                    </div>
                  </div>
                </div>
                <div className="single_social_connect">
                  <div className="social_connect_img">
                    <img src={insta_post_4}/>
                    <div className="social_connect_overlay">
                      <a href="#"></a>
                    </div>
                  </div>
                </div>
                <div className="single_social_connect">
                  <div className="social_connect_img">
                    <img src={insta_post_5}/>
                    <div className="social_connect_overlay">
                      <a href="#"></a>
                    </div>
                  </div>
                </div>
                <div className="single_social_connect">
                  <div className="social_connect_img">
                    <img src={insta_post_6}/>
                    <div className="social_connect_overlay">
                      <a href="#"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialConnectPart;
