import React, { useState, useRef } from "react";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import CloseIcon from "@mui/icons-material/Close";
import "./SearchBar.css";
const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const value = e.target.value;
    const filteredData = data.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });

    if (value.length === 0) {
      setFilteredData([]);
    } else {
      setFilteredData(filteredData);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    InputValue.current.value = "";
  };
  const InputValue = useRef(null);

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          ref={InputValue}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length > 0 ? (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          ) : (
            <SavedSearchIcon />
          )}
        </div>
      </div>
      {filteredData.length > 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((item, index) => {
            return (
              <a
                rel="noreferrer"
                className="dataItem"
                key={index}
                href={item.link}
                target="_blank"
              >
                <p> {item.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
