import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from '../../redux/operations';
import { getFilter } from 'redux/selectors';
import { BsFillFileEarmarkExcelFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactsList({ items }) {
  const [deleteContact] = useDeleteContactMutation();
  const [contacts, setContacts] = useState([]);
  const value = useSelector(getFilter);

  useEffect(() => {
    const normalizedFilter = value.toLowerCase();

    setContacts(
      items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter)),
    );
  }, [items, value]);

  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, phone }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name}:</p>
          <span>{phone}</span>
          <button className={s.button} onClick={() => deleteContact(id)}>
            <BsFillFileEarmarkExcelFill className={s.button} />
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeleteContact: PropTypes.func,
};
