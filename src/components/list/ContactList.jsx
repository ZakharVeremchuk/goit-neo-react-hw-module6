import Contact from "../contact/Contact";
import { useSelector } from 'react-redux';
import css from "./Contact.module.css";
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const vscontacts = filter
    ? contacts.filter((c) => c.name.toLowerCase().includes(filter.toLowerCase()))
    : contacts;

  return (
    <div className={css.contacts}>
      <ul className={css.list}>
        {vscontacts.map((contact) => (
          <li className={css.listElement} key={contact.id}>
            <Contact id={contact.id} name={contact.name} number={contact.number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
