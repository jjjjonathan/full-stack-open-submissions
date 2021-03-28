import React, { useState } from "react";

const Button = ({ type, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {type}
    </button>
  );
};

const Status = ({ type, count }) => {
  return (
    <p>
      {type} {count}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <main>
      <h1>give feedback</h1>
      <Button type="good" onClick={handleGoodClick} />
      <Button type="neutral" onClick={handleNeutralClick} />
      <Button type="bad" onClick={handleBadClick} />
      <h2>statistics</h2>
      <Status type="good" count={good} />
      <Status type="neutral" count={neutral} />
      <Status type="bad" count={bad} />
    </main>
  );
};

export default App;
