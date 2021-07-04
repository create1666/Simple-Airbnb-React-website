import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { DateRangePicker } from "react-date-range";
import "./Search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const Search = () => {
  const history = useHistory()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <div className="search ">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      
        <h2>
          Number of guests
          <PeopleAltIcon />
        </h2>
       <input min={0} defaultValue={5} type='number'/>
       <Button onClick={() => history.push('/search')}>Search AirB</Button>
     
    </div>
  );
};

export default Search;
