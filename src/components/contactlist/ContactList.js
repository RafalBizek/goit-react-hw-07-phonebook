import React from 'react';
import { useSelector } from 'react-redux';
import { selectFiltersContacts } from 'redux/selectors';
import { Contact } from 'redux/contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filterContacts = useSelector(selectFiltersContacts);

  return (
    <div className={css.contactListContainer}>
      <ul className={css.contactList}>
        {filterContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};
