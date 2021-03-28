import React, { useState } from "react";

const Winner = ({ anecdote, votes }) => {
  return (
    <div>
      <h1>Highest-rated anecdote</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(6).fill(0));

  const vote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const highestVote = Math.max(...votes);
  const highestVoteIndex = [...votes].findIndex((e) => e === highestVote);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={randomAnecdote}>next anecdote</button>
      <Winner anecdote={anecdotes[highestVoteIndex]} votes={highestVote} />
    </div>
  );
};

export default App;
