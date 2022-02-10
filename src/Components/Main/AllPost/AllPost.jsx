import React from "react";
import "../../../App.css"
import "./AllPost.css";

import "../../../img/post/post_12.png";

const AllPost = () => {
  const post1 = require("../../../img/post/post_12.png");
  const post2 = require("../../../img/post/post_18.png");
  const post3 = require("../../../img/post/post_19.png");
  const post4 = require("../../../img/post/post_20.png");
  const post5 = require("../../../img/post/post_21.png");
  const post6 = require("../../../img/post/post_22.png");
  const post7 = require("../../../img/post/post_23.png");
  const post8 = require("../../../img/post/post_24.png");
  const post9 = require("../../../img/post/post_25.png");
  const post_sidebar_1 = require("../../../img/sidebar/sidebar_1.png");
  const post_sidebar_2 = require("../../../img/sidebar/sidebar_2.png");
  const post_sidebar_3 = require("../../../img/sidebar/sidebar_3.png");
  

  return (
    <div>
      <section className="all_post section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 all_posts_container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="single_post post_1 feature_post">
                    <div className="single_post_img">
                      <img src={post1} alt="" />
                    </div>
                    <div className="single_post_text text-center">
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
                <div className="col-lg-6 col-sm-6">
                  <div className="single_post post_1 ">
                    <div className="single_post_img">
                      <img src={post2} alt="" />
                    </div>
                    <div className="single_post_text text-center post_text">
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
                <div className="col-lg-6 col-sm-6">
                  <div className="single_post post_1">
                    <div className="single_post_img">
                      <img src={post3} alt="" />
                    </div>
                    <div className="single_post_text text-center post_text">
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
                <div className="col-lg-6 col-sm-6">
                  <div className="single_post post_1">
                    <div className="single_post_img">
                      <img src={post4} alt="" />
                    </div>
                    <div className="single_post_text text-center post_text">
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
                <div className="col-lg-6 col-sm-6">
                  <div className="single_post post_1">
                    <div className="single_post_img">
                      <img src={post5} alt="" />
                    </div>
                    <div className="single_post_text text-center post_text">
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
                <div className="col-lg-6 col-sm-6">
                  <div className="single_post post_1">
                    <div className="single_post_img">
                      <img src={post6} alt="" />
                    </div>
                    <div className="single_post_text text-center post_text">
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
                <div className="col-lg-6 col-sm-6">
                  <div className="single_post post_1">
                    <div className="single_post_img">
                      <img src={post7} alt="" />
                    </div>
                    <div className="single_post_text text-center post_text">
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
                <div className="col-lg-6 col-sm-6">
                  <div className="single_post post_1">
                    <div className="single_post_img">
                      <img src={post8} alt="" />
                    </div>
                    <div className="single_post_text text-center post_text">
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
                <div className="col-lg-6 col-sm-6">
                  <div className="single_post post_1">
                    <div className="single_post_img">
                      <img src={post9} alt="" />
                    </div>
                    <div className="single_post_text text-center post_text">
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
              
              <div className="page-pagination">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a href="" className="page-link">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar_widget">
                <div className="single_sidebar_widget search_form_widget">
                  <form action="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Keyword"
                        onFocus="this.placeholder = ''"
                        onBlur="this.placeholder = 'Search Keyword'"
                      />
                      <div className="btn_1">search</div>
                    </div>
                  </form>
                </div>
                <div className="single_sidebar_widget">
                  <div className="sidebar_tittle">
                    <h3>Categories</h3>
                  </div>
                  <div className="single-category-item category">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Culture</a>
                        <span>(15)</span>
                      </li>
                      <li>
                        <a href="#">Creative Design</a>
                        <span>(15)</span>
                      </li>
                      <li>
                        <a href="#">Illustration</a>
                        <span>(15)</span>
                      </li>
                      <li>
                        <a href="#">Production</a>
                        <span>(15)</span>
                      </li>
                      <li>
                        <a href="#">Management</a>
                        <span>(15)</span>
                      </li>
                      <li>
                        <a href="#">Branding</a>
                        <span>(15)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single_sidebar_widget">
                  <div className="sidebar_tittle">
                    <h3>Popular Feeds</h3>
                  </div>
                  <div className="single_category_post post_2">
                    <div className="category_post_img">
                      <img src={post_sidebar_1} alt="" />
                    </div>
                    <div className="post_text_1 pr_30">
                      <a href="">
                        <h3>
                          Subdue lesser beast winget bearing meat tree one
                        </h3>
                      </a>
                      <p>
                        <span>By Michal</span> / March 30
                      </p>
                    </div>
                  </div>
                  <div className="single_category_post post_2">
                    <div className="category_post_img">
                      <img src={post_sidebar_2} alt="" />
                    </div>
                    <div className="post_text_1 pr_30">
                      <a href="">
                        <h3>
                          Subdue lesser beast winget bearing meat tree one
                        </h3>
                      </a>
                      <p>
                        <span>By Michal</span> / March 30
                      </p>
                    </div>
                  </div>
                  <div className="single_category_post post_2">
                    <div className="category_post_img">
                      <img src={post_sidebar_3} alt="" />
                    </div>
                    <div className="post_text_1 pr_30">
                      <a href="">
                        <h3>
                          Subdue lesser beast winget bearing meat tree one
                        </h3>
                      </a>
                      <p>
                        <span>By Michal</span> / March 30
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single_sidebar_widget">
                  <div className="sidebar_tittle">
                    <h3>Share this post</h3>
                  </div>
                  <div className="social_share_icon tags">
                    <ul className="list-unstyled social-list">
                      <li>
                        <a>
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="ti-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="ti-instagram"></i>
                        </a>
                      </li>
                    </ul>
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

export default AllPost;
