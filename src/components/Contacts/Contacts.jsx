import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contacts = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contact}>
      <div className={css.text}>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contacts;
