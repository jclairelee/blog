import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__list">
          <Link className="navbar__list__link" to="/?category=home">
            <h6 className="navbar__list__item">HOME DECOR</h6>
          </Link>
          <Link className="navbar__list__link" to="/?category=food">
            <h6 className="navbar__list__item">FOOD</h6>
          </Link>
          <Link className="navbar__list__link" to="/?category=beverage">
            <h6 className="navbar__list__item">BEVERAGE</h6>
          </Link>
          <Link className="navbar__list__link" to="/?category=holidays">
            <h6 className="navbar__list__item">HOLIDAYS</h6>
          </Link>
          <Link className="navbar__list__link" to="/?category=DIY">
            <h6 className="navbar__list__item">DIY/CRAFTING</h6>
          </Link>
          <Link className="navbar__list__link" to="/?category=gardening">
            <h6 className="navbar__list__item">GARDENING</h6>
          </Link>
          <Link className="navbar__list__link" to="/?category=cleaning">
            <h6 className="navbar__list__item">CLEANING</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
