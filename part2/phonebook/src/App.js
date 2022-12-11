import { useState } from 'react'

const Filter = ({filter, handleFilter}) => {

  return (
    <div>
      filter contacts matching: <input value={filter} onChange={handleFilter} />
    </div>
  );
}

const NewConcatcForm = ({onSubmit, newContact, handleNewName, handleNewNumber}) => {

  return (
    <form onSubmit={onSubmit} >
      <div>
        name: <input value={newContact.name} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newContact.number} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

const ContactList = ({persons, filter}) => {
  return (
    persons
        .filter(person => person.name.includes(filter))
        .map(person => <p key={person.id} >{person.name}: {person.number}</p>)
  );
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [filter, setFilter] = useState('')
  const [newContact, setNewContact] = useState({
    name: '',
    number: '',
  })

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(p => p.name === newContact.name)){
      alert(`${newContact.name} already exists in your phonebook`)
      return ;
    }
    setPersons(persons.concat({...newContact, id: persons.length + 1}))
    setNewContact({
      name: '',
      number: '',
    })
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleNewName = (event) => {
    setNewContact({...newContact, name: event.target.value})
  }

  const handleNewNumber = (event) => {
    setNewContact({...newContact, number: event.target.value})
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter={filter} 
        handleFilter={handleFilter} />
      <h2>add a new</h2>
      <NewConcatcForm 
        onSubmit={addName} 
        newContact={newContact} 
        handleNewName={handleNewName} 
        handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <ContactList 
        persons={persons}
        filter={filter} />
    </div>
  )
}

export default App