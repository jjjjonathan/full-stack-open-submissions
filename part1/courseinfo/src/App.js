import React from "react";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Part = (props) => {
    return (
      <p>
        {props.title} {props.number}
      </p>
    );
  };

  const Content = (props) => {
    return (
      <div>
        <Part title={part2} number={exercises2} />
        <Part title={part1} number={exercises1} />
        <Part title={part3} number={exercises3} />
      </div>
    );
  };

  const Total = (props) => {
    return <p>Number of exercises {props.number}</p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total number={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
