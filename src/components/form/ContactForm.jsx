import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Need to have 9 number")
    .max(50, "Need to have 9 number")
    .required("Required")
});

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    dispatch(addContact({id: nanoid(), ...values}))
    // onAdd({
    //   id: nanoid(),
    //   name: values.name,
    //   number: values.number
    // })
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>Name:</label>
        <Field className={css.field} id={nameFieldId} type="text" name="name"/>
        <ErrorMessage name="name" component="div" className={css.error} />
        <label className={css.label} htmlFor={numberFieldId}>Number:</label>
        <Field className={css.field} id={numberFieldId} type="text" name="number" />
        <ErrorMessage name="number" component="div" className={css.error} />
        <button className={css.button} type="submit">
            Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
