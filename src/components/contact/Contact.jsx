import css from "./Contact.module.css";

// {data: {id, text}}
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.insideSection}>
      <div>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
