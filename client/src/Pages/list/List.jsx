import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import { format } from "date-fns";

import "./List.css";
import { DateRange } from "react-date-range";
import Searchitem from "../../Components/SearchItem/Searchitem";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  console.log(location);
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>

            <div className="lsItem">
              <label>Check-in-Check-out</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="isOptionsItem">
                  <span className="isOptionText">
                    Min Price <small>/per night</small>
                  </span>
                  <input type="number" className="isOptionInput" />
                </div>

                <div className="isOptionsItem">
                  <span className="isOptionText">
                    Max Price <small>/per night</small>
                  </span>
                  <input type="number" className="isOptionInput" />
                </div>

                <div className="isOptionsItem">
                  <span className="isOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="isOptionInput"
                    placeholder={options.adult}
                  />
                </div>

                <div className="isOptionsItem">
                  <span className="isOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="isOptionInput"
                    placeholder={options.children}
                  />
                </div>

                <div className="isOptionsItem">
                  <span className="isOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="isOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;

