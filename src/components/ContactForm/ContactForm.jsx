import module from "./ContactForm.module.css";

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addContact } from "../../redux/contactsOps";

const INITIAL_VALUES = {
    id: "",
    name: "",
    number: ""
}

const phoneNumberRegex = /^.{3,50}$/;

const AddContactFormShema = Yup.object({
    name: Yup.string().required("Name is required field").matches(phoneNumberRegex, "from 3 to 50 characters"),
    number: Yup.string().required("Number is required field").matches(phoneNumberRegex, "from 3 to 50 characters")
})

const ContactForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values))
        actions.resetForm();
    }

    return (
        <Formik initialValues={INITIAL_VALUES} validationSchema={AddContactFormShema} onSubmit={handleSubmit}>
            <Form className={module.form}>
                <label className={module.label}>
                    <span className={module.span}>Name</span>
                    <Field type="text" name="name" className={module.field} />
                    <ErrorMessage className={module.error} name="name" component="span" />
                </label>
                <label className={module.label}>
                    <span className={module.span}>Number</span>
                    <Field type="text" name="number" className={module.field} />
                    <ErrorMessage className={module.error} name="number" component="span" />
                </label>
                <button type="submit" className={module.btn}>Add contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm