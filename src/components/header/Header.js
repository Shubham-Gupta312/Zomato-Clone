import React from "react";
import "../header/Header.css";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />

      <div className="header-left">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <HiLocationMarker className="absolute-center location-icon" />
              <div>Delhi</div>
            </div>
            <AiOutlineCaretDown className="absolute-center" />
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <FaSearch className="absolute-center search-icon" />
            <input
              className="search-input"
              placeholder="Search for a resturant or a dish"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="Zomato-profile"
            className="header-profile-image"
          />

          <span className="header-username">Shubham</span>
          <AiOutlineCaretDown className="absolute-center profile-option-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
