import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";

const Header = () => {

  const[{basket}] = useStateValue();

  console.log(basket);

  return (
    <nav className="header">
      {/* logo on the left img */}
      <Link to="/">
        <img
          className="header_logo"
          alt=""
          src="https://wallpaperaccess.com/full/1383587.jpg"
        />
      </Link>
      {/* searchbox */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 3 links, Basket icon with number */}
      <div className="headerNav">
        {/* 1st link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello Shubham</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            {/* Shopping basket icon */}
            <ShoppingBasketIcon />
            {/* Numbers of item in basket */}
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
