import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../filtersSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const filterValue = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Пошук за ім'ям"
      value={filterValue}
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default Filter;
