import React from "react";

const Numbers = ({ persons, query }) => {
  const filteredPersons = query
    ? persons.filter((person) => {
        return person.name.toLowerCase().includes(query.toLowerCase());
      })
    : persons;

  return (
    <ul>
      {filteredPersons.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Numbers;
