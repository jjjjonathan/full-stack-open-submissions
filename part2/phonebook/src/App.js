import React, { useEffect, useState } from "react";
import personsService from "./services/persons";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import Add from "./components/Add";

const App = () => {
  const [persons, setPersons] = useState([]);
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
      const newEntry = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      personsService.create(newEntry).then((response) => {
        console.log(response.data);
        setPersons([...persons, newEntry]);
      });

      setNewName("");
      setNewNumber("");
    }
  };

  useEffect(() => {
    personsService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

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
