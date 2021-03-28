import React from "react";

const Filter = ({ filterQuery, onFilterQueryChange }) => {
  return (
    <div>
      Find countries:{" "}
      <input value={filterQuery} onChange={onFilterQueryChange} />
    </div>
  );
};

export default Filter;
