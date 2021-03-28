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

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <div>
      <h2>statistics</h2>
      <Status type="good" count={good} />
      <Status type="neutral" count={neutral} />
      <Status type="bad" count={bad} />
      <Status type="all" count={total} />
      <Status type="average" count={(good - bad) / total} />
      <Status type="positive" count={(good / total) * 100 + "%"} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

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
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </main>
  );
};

export default App;
