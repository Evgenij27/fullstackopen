import { useState, useEffect } from "react";
import personService from "./services/personService";

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

const FilteredList = ({ persons, query, personsSetter }) => {
  if (query !== "") {
    persons = persons.filter((p) => p.name.includes(query));
  }

  const handlePersonDelete = (id) => {
    if (confirm(`Are you sure you want to delete?`)) {
      console.log(`Deleting person with id = ${id}`);
      personService.deletePerson(id).then((resp) => {
        console.log(resp);
        if (persons.length >= 1) {
          personsSetter(persons.filter((p) => p.id !== id));
        }
      });
    }
  };

  return (
    <ul>
      {persons.map((p) => (
        <li key={p.id}>
          {p.name} {p.phone}
          <button onClick={() => handlePersonDelete(p.id)}>delete</button>
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
    personService.all().then((initalPersons) => setPersons(initalPersons));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setSearchQuery={setSearchQuery} />
      <PersonForm persons={persons} personsSetter={setPersons} />
      <h2>Numbers</h2>
      <FilteredList
        persons={persons}
        query={searchQuery}
        personsSetter={setPersons}
      />
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

    let index = persons.findIndex((p) => p.name === newName);
    let storedPerson = persons[index];
    if (index > -1) {
      if (
        confirm(
          `${newName} is already in the phonebook, replace old number with a new one?`,
        )
      ) {
        let changedPerson = { ...storedPerson };
        changedPerson["phone"] = phone;
        personService.update(changedPerson).then((updatedPerson) => {
          personsSetter(
            persons.map((p) => (p.id === updatedPerson.id ? updatedPerson : p)),
          );
        });
      }
      return;
    }

    const newPerson = {
      id: persons.length.toString(),
      name: newName,
      phone: phone,
    };

    personService.create(newPerson).then((createdPerson) => {
      personsSetter(persons.concat(createdPerson));
      setNewName("");
      setPhone("");
    });
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
