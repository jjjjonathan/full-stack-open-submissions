import React, { useState } from "react";

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

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "555-554-3498" },
    { name: "Jonny the Dog", number: "bark bark" },
    { name: "teddy reooszlevy", number: "19482-23-123" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState("");

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  };

  const handleQueryInput = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      filter: <input value={query} onChange={handleQueryInput} />
      <h2>add new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons} query={query} />
    </div>
  );
};

export default App;
