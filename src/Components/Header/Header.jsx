import React from "react";
import {Link} from "react-router-dom";
import Menu from "./Menu/Menu";
import SocialIcon from "./SocialIcon/SocialIcon";
import './Header.css'
import "../../App.css"
import '../../img/logo.png'

const Header = () => {

const logo = require('../../img/logo.png')

  return (
    <>
      <header className="main_menu menu_fixed">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navbar navbar-expand-lg  navbar-light">
                
                <Link to="/">
                  <img src={logo} alt="logo" className="logo"/>
                </Link>
                  
               
                <button className="navbar-toggler">
                  <span className="navbar-toggler-icon"></span>
                </button>

                  <Menu/>

                  <SocialIcon/>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
