import React from "react";

const Numbers = ({ persons, query, onDeleteClick }) => {
  const filteredPersons = query
    ? persons.filter((person) => {
        return person.name.toLowerCase().includes(query.toLowerCase());
      })
    : persons;

  return (
    <ul>
      {filteredPersons.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}{" "}
          <button type="button" onClick={onDeleteClick} />
        </li>
      ))}
    </ul>
  );
};

export default Numbers;
