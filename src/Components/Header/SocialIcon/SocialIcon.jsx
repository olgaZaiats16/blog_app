import React from "react";
import "../../../App.css"
import "./SocialIcon.css"
import "./themify-icons/themify-icons.css"

const SocialIcon = () => {
  return (
    <div>
      <div className="header-social-icon d-none d-lg-block">
        <ul className="social-icons-list">
          <li>
            <div id="wrap">
              <form action="">
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Search here"
                />
                <span className="ti-search"></span>
              </form>
            </div>
          </li>
          <li>
            <a href="" className="d-none d-lg-block">
              <i className="ti-facebook"></i>
            </a>
          </li>
          <li>
            <a href="" className="d-none d-lg-block">
              <i className="ti-twitter-alt"></i>
            </a>
          </li>
          <li>
            <a href="#" className="d-none d-lg-block">
              <i className="ti-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" className="d-none d-lg-block">
              <i className="ti-skype"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialIcon;
