import React from "react";
import "./Copyright.css"

const Copyright = () => {
  return (
    <div>
      <div className="copyright_text">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="copyright-part">
              <div className="footer-text m-0">
                <p>
                  Copyright 2021 All rights reserved
                  <span> | </span>
                  This template is made with <span> </span>
                  <a href="">
                    <i className="ti-heart"> </i>
                  </a>
                   by 
                  <a href=""> Colorlib</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-right">
            <div className="footer-social">
              <a href="">
                <i className="ti-facebook"></i>
              </a>
              <a href="">
                <i className="ti-twitter-alt"></i>
              </a>
              <a href="">
                <i className="ti-instagram"></i>
              </a>
              <a href="">
                <i className="ti-skype"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
