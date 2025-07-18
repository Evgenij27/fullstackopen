import { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ setSearchQuery }) => {
  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      Filter: <input onChange={handleSearchQuery} />
    </div>
  );
};

const FilteredList = ({ persons, query }) => {
  if (query !== "") {
    persons = persons.filter((p) => p.name.includes(query));
  }
  return (
    <ul>
      {persons.map((p) => (
        <li key={p.id}>
          {p.name} {p.phone}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log("getting data...");
    axios.get("http://localhost:3001/persons").then((resp) => {
      setPersons(resp.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setSearchQuery={setSearchQuery} />
      <PersonForm persons={persons} personsSetter={setPersons} />
      <h2>Numbers</h2>
      <FilteredList persons={persons} query={searchQuery} />
    </div>
  );
};

const PersonForm = ({ persons, personsSetter }) => {
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleNewPerson = (event) => {
    event.preventDefault();

    if (persons.findIndex((p) => p.name === newName) > -1) {
      alert(`${newName} is already in the phonebook`);
      return;
    }

    const newPerson = {
      id: persons.length,
      name: newName,
      phone: phone,
    };
    personsSetter(persons.concat(newPerson));
    setNewName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleNewPerson}>
      <div>
        Name: <input value={newName} onChange={handleNewName} />
        Phone: <input value={phone} onChange={handlePhone} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default App;
