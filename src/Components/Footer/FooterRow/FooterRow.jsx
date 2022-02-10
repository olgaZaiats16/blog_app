import React from "react";
import "./FooterRow.css"

const FooterRow = () => {
  return (
    <div>
      <div className="row">
        <div className="footer_width single-footer-widget">
          <h4>About us</h4>
          <p>
            "Heaven fruitful doesn`t over the lesser days appear cree pink
            seasons so behold bea Place likeness female form. Lesser Was green
            image lights fowl"
          </p>
        </div>
        <div className="footer_width single-footer-widget">
          <h4>Contact info</h4>
          <ul>
            <li>
              <p>Address: Your address</p>
            </li>
            <li>
              <p>Phone: +380985746968</p>
            </li>
            <li>
              <p>Email: zaiats.olga16@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="footer_width single-footer-widget">
          <h4>Newsletter</h4>
          <p>
            "Heaven fruitful doesn`t over the lesser days appear cree pink
            seasons so behold bea Place likeness female form. Lesser Was green
            image lights fowl"
          </p>
          <div className="form-wrap">
            <form action="" className="form-inline">
              <input
                type="text"
                name="EMAIL"
                className="form-control"
                placeholder="Your Email Address"
              />
              <button className="click-btn btn btn-default text-uppercase">
                <i className="ti-arrow-right"></i>
              </button>
              <div className="">
                <input type="text" />
              </div>
              <div className="info"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterRow;
