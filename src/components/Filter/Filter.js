import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={event =>
          dispatch(contactsActions.changeFilter(event.target.value))
        }
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.func,
  onChange: PropTypes.func,
};
