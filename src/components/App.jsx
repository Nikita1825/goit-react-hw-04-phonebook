
import { FormPhone } from './formPhoneBook/formPhoneBook';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export const App = ()=>{
  
   const defaultContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
    
  
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts
  );
  const [filter, setFilter] = useState('');
   useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts]);
 

  const handleAddContact = (name, number) => {
    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistingContact) {
      return alert(`${name} is already in contact`);
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevState => [...prevState, newContact]);
  };

 const handleDelete = id => {
   setContacts(prevContacts =>
     prevContacts.filter(contact => contact.id !== id)
   );
  };

 const handleFilterChange = e => {
    setFilter(e.target.value);
  };

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
    return (
      <div>
        <FormPhone onAddContact={handleAddContact} />
        <Filter
          onFilterChange={handleFilterChange}
          filter={filter}
        />
        <ContactList contacts={filteredContacts} onDelete={handleDelete} />
      </div>
    );
  
}
