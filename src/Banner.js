import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Banner.css";
import './Search.css'

import Search from "./Search";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory()
  const [showDateSearch, setSearchDate] = useState(false);

  const handleClick = () => {
    setSearchDate(!showDateSearch);
  };
  console.log("date----", showDateSearch);

  return (
    <div className="banner">
      <div className="banner__search">
      { showDateSearch && <Search />}

        <Button
          onClick={handleClick}
          variant="outline"
          className="banner__searchButton"
        >
          {showDateSearch ? `Hide Date` : `Search Date`}
        </Button>

      </div>
      <div className="banner__info">
        <h1>Doubts kills more dreams than ever - just do it!</h1>
        <h5>
          No better experience than here - Enjoy new level of decision breeze
        </h5>
        <Button variant="outline" onClick={() => history.push('/search')}> Explore Nearby </Button>
      </div>
    </div>
  );
};

export default Banner;
