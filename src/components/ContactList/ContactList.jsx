import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.listItem}>
          {contact.name}: {contact.phone}
          <button
            onClick={() => handleDeleteContact(contact.id)}
            className={styles.deleteButton}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
