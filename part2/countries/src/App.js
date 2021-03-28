import React, { useState } from "react";
import Filter from "./components/Filter";
import Results from "./components/Results";

function App() {
  const [filterQuery, setFilterQuery] = useState("");

  const handleFilterQueryChange = (event) => {
    setFilterQuery(event.target.value);
  };

  return (
    <main>
      <h1>Country search</h1>
      <Filter
        filterQuery={filterQuery}
        onFilterQueryChange={handleFilterQueryChange}
      />
      <Results filterQuery={filterQuery} />
    </main>
  );
}

export default App;
