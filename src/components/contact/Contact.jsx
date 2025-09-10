import css from "./Contact.module.css";
import {useDispatch} from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.insideSection}>
      <div>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <div>
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
