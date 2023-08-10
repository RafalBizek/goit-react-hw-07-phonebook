import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/contactform/ContactForm';
import ContactList from 'components/contactlist/ContactList';
import Filter from 'components/filter/Filter';
import { fetchContacts, addContact, deleteContact } from 'redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContactHandler = contact => {
    dispatch(addContact(contact));
  };

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactHandler} />

      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? (
        <ContactList onDeleteContact={deleteContactHandler} />
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default App;
