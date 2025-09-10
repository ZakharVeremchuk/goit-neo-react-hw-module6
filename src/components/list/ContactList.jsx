import Contact from "../contact/Contact";
import css from "./Contact.module.css";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.contacts}>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li className={css.listElement} key={contact.id}>
            <Contact id={contact.id} name={contact.name} number={contact.number} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
