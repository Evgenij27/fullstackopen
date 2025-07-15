import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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
    setPersons(persons.concat(newPerson));
    setNewName("");
    setPhone("");
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter: <input onChange={handleSearchQuery} />
      </div>
      <form onSubmit={handleNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
          phone: <input value={phone} onChange={handlePhone} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {searchQuery === ""
          ? persons.map((p) => (
              <li key={p.id}>
                {p.name} {p.phone}
              </li>
            ))
          : persons
              .filter((p) => p.name.includes(searchQuery))
              .map((p) => (
                <li key={p.id}>
                  {p.name} {p.phone}
                </li>
              ))}
      </ul>
    </div>
  );
};

export default App;
