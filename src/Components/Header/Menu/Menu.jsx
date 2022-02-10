import React from "react";
import "./Menu.css"
import "../../../App.css"
import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <div>
      <div className="collapse navbar-collapse main-menu-item">
        <ul className="menu">
          <li className="menu-item active">
            <Link to="/" className="menu-link">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/archive" className="menu-link">Archive</Link>
          </li>
          <li className="menu-item">
            <Link to="/category" className="menu-link">Category</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact" className="menu-link">Contact</Link>
          </li>
          <li className="dropdown">
            <Link to="/pages" className="menu-link">Pages</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/pages/singleBlog">Single Blog</Link>
              </li>

              <li>
              <Link to="/pages/elements">Elements</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
