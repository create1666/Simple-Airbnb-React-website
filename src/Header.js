import React from "react";
import {Link} from 'react-router-dom'
import "./Header.css";
import { SiAirbnb } from "react-icons/si";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { Avatar } from "@material-ui/core";

const Header = (props) => {
  return (
    <div className="headerSection">
      {/* logo_iconSection starts here */}

      <Link to="/" className="logo__link">
        {" "}
        <div className="headerSection__iconContainer">
          <SiAirbnb className="iconContainer__logo" />
          <span>airB</span>
        </div>
      </Link>

      {/* logo_iconSection ends here */}

      {/************************************************************/}

      {/* input_iconSearch begins here */}
      <div className="headerSection__inputCenter">
        <input type="text" />
        <SearchIcon className="search-icon" />
      </div>
      {/* input_iconSearch ends here */}

      {/************************************************************/}

      {/* headerRightSection starts here */}
      <div className="headerSection__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreRoundedIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
