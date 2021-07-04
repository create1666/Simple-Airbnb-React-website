import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import {
  cardObj1,
  cardObj2,
  cardObj3,
  cardObj4,
  cardObj5,
  cardObj6,
} from "./SearchResultData";

function SearchPage() {
  return (
    <div className="SearchPage">
      <div className="searPage__info">
        <p>56 stays . 2 July to 26 July . 9 guests</p>
        <h1>Nearby Searches</h1>
        <Button variant="outlined"> Cancellation </Button>
        <Button variant="outlined"> Price</Button>
        <Button variant="outlined"> Rooms and beds</Button>
        <Button variant="outlined"> Type of place</Button>
        <Button variant="outlined"> More</Button>
      </div>
      <SearchResult {...cardObj1} />
      <SearchResult {...cardObj2} />
      <SearchResult {...cardObj3} />
      <SearchResult {...cardObj4} />
      <SearchResult {...cardObj5} />
      <SearchResult {...cardObj6} />
    </div>
  );
}

export default SearchPage;
