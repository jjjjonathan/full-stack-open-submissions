import React, { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <header>
        <h1>give feedback</h1>
      </header>
      <main>
        <p>buttons here</p>
        <h2>statistics</h2>
        <p>good 6</p>
      </main>
    </div>
  );
};

export default App;
