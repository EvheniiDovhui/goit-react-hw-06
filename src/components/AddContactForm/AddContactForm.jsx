import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../contactsSlice';
import styles from './AddContactForm.module.css';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={e => setName(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Телефон"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.submitButton}>
        Додати контакт
      </button>
    </form>
  );
};

export default AddContactForm;
