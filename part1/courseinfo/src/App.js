import React from "react";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

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
        <Part title={part1.name} number={part1.exercises} />
        <Part title={part2.name} number={part2.exercises} />
        <Part title={part3.name} number={part3.exercises} />
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
      <Total number={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
