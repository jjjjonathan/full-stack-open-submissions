import React, { useState } from "react";

const Button = ({ type, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {type}
    </button>
  );
};

const Statistic = ({ type, count }) => {
  return (
    <p>
      {type}: {count}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback yet - be the first!</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Statistics</h2>
      <Statistic type="good" count={good} />
      <Statistic type="neutral" count={neutral} />
      <Statistic type="bad" count={bad} />
      <Statistic type="all" count={total} />
      <Statistic type="average" count={(good - bad) / total} />
      <Statistic type="positive" count={(good / total) * 100 + "%"} />
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
