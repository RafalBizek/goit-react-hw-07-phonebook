import { useSelector } from 'react-redux';
import { selectFiltersContacts } from 'redux/selectors';
import { Contact } from 'redux/contact';

export const ContactList = () => {
  const filterContacts = useSelector(selectFiltersContacts);

  return (
    <div>
      <ul>
        {filterContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};
