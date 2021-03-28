import React, { useState } from "react";
import Filter from "./components/Filter";
import Results from "./components/Results";

function App() {
  const [filterQuery, setFilterQuery] = useState("");

  const handleFilterQueryChange = (event) => {
    setFilterQuery(event.target.value);
  };

  const handleShowClick = (event) => {
    const newCountry = event.target.parentNode.dataset.country;
    setFilterQuery(newCountry);
  };

  return (
    <main>
      <h1>Country search</h1>
      <Filter
        filterQuery={filterQuery}
        onFilterQueryChange={handleFilterQueryChange}
      />
      <Results filterQuery={filterQuery} onShowClick={handleShowClick} />
    </main>
  );
}

export default App;
