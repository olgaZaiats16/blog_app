import React from "react";
import Copyright from "./FooterCopiright/Copyright";
import FooterRow from "./FooterRow/FooterRow";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer-area">
        <div className="container">
          <FooterRow/>
          <Copyright/>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
