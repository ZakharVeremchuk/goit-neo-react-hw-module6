import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Neeed to have 9 number")
    .max(50, "Neeed to have 9 number")
    .required("Required")
});

const ContactForm = ({onAdd}) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number
    })
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      vaidationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>Name:</label>
        <Field className={css.field} id={nameFieldId} type="text" name="name"/>
        <label className={css.label} htmlFor={numberFieldId}>Number:</label>
        <Field className={css.field} id={numberFieldId} type="text" name="number" />
        <button className={css.button} type="submit">
            Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
