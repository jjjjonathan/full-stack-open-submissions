import React, { useState } from "react";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import Add from "./components/Add";

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
      setNewNumber("");
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter query={query} onChange={handleQueryInput} />
      <h2>add new</h2>
      <Add
        onFormSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        onNameChange={handleNameInput}
        onNumberChange={handleNumberInput}
      />

      <h2>Numbers</h2>
      <Numbers persons={persons} query={query} />
    </div>
  );
};

export default App;
