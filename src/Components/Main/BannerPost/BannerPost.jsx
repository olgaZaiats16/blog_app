import React from "react";
import "../../../App.css"
import "./BannerPost.css"

const BannerPost = () => {
  return (
    <div>
      <section className="banner_post">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="banner_post_1 banner_post_bg_1">
              <div className="banner_post_iner text_center">
                <a href="#">
                  <h5>Fashion / Lifestyle</h5>
                </a>
                <a href="#">
                  <h2>All said replanish years void kind say void</h2>
                </a>
                <p>Posted on April 19, 2021</p>
              </div>
            </div>
            <div className="banner_post_1 banner_post_bg_2">
              <div className="banner_post_iner text_center">
                <a href="#">
                  <h5>Fashion / Lifestyle</h5>
                </a>
                <a href="#">
                  <h2>All said replanish years void kind say void</h2>
                </a>
                <p>Posted on April 19, 2021</p>
              </div>
            </div>
            <div className="banner_post_1 banner_post_bg_3">
              <div className="banner_post_iner text_center">
                <a href="#">
                  <h5>Fashion / Lifestyle</h5>
                </a>
                <a href="#">
                  <h2>All said replanish years void kind say void</h2>
                </a>
                <p>Posted on April 19, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerPost;
