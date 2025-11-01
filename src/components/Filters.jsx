import React, { useState, useRef, useEffect } from "react";
import "./Filters.css";

const Filters = ({
  itemsCount = 0,
  categories = [],
  selectedCategory,
  onFilter,
  sortOptions = ["RECOMMENDED", "NEWEST", "PRICE: LOW TO HIGH", "PRICE: HIGH TO LOW"],
  selectedSort,
  onSortChange
}) => {
  
  const [showFilter, setShowFilter] = useState(true);
  const sortRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) ;
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="filter-sort-bar">
      <div className="item-filter-container">
        <div className="items-count">
          <strong>3425 ITEMS</strong>
          {/* Show/Hide toggle button */}
          <button
            className="toggle-filter-btn"
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>

        {/* Conditionally render filters list */}
        {showFilter && (
          <ul className="filters-list">
            {categories.map((category) => (
              <li key={category}>
                <label className={`filter-label ${selectedCategory === category ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={() => onFilter(category)}
                    className="filter-radio"
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="sort-dropdown">
        <select
          className="sort-select"
          value={selectedSort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          {sortOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
