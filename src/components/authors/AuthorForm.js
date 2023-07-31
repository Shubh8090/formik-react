import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { myContext } from '../Data/data';
import { useNavigate } from 'react-router-dom';
import './AuthorForm.css'; 

const AuthorForm = () => {
  const { addAuthor } = useContext(myContext);
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    birthDate: '',
    biography: '',
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.birthDate) {
      errors.birthDate = 'Birth Date is required';
    }

    if (!values.biography) {
      errors.biography = 'Biography is required';
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    addAuthor(values);
    resetForm();
    navigate('/authors');
  };

  return (
    <div >
      <h2 className="form-title">Add Author</h2>
      <div className='author-form-container'>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />

            <label htmlFor="birthDate">Birth Date</label>
            <Field type="date" name="birthDate" />
            <ErrorMessage name="birthDate" />

            <label htmlFor="biography">Biography</label>
            <Field as="textarea" name="biography" />
            <ErrorMessage name="biography" />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </Form>
      </Formik>
      </div>
    </div>
  );
};

export default AuthorForm;