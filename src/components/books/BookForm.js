import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { myContext } from '../Data/data';
import { useNavigate } from 'react-router-dom';
import './BookForm.css';

const BookForm = () => {
  const { addBook } = useContext(myContext);
  const navigate = useNavigate();

  const initialValues = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Title is required';
    }

    if (!values.author) {
      errors.author = 'Author is required';
    }

    if (!values.isbn) {
      errors.isbn = 'ISBN is required';
    }

    if (!values.publicationDate) {
      errors.publicationDate = 'Publication Date is required';
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    addBook(values);
    resetForm();
    navigate('/books');
  };

  return (
    <div >
      <h2 className="form-title">Add Book</h2>
      <div className="book-form-container">
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" className="error-message" />

            <label htmlFor="author">Author</label>
            <Field type="text" name="author" />
            <ErrorMessage name="author" component="div" className="error-message" />

            <label htmlFor="isbn">ISBN Number</label>
            <Field type="text" name="isbn" />
            <ErrorMessage name="isbn" component="div" className="error-message" />

            <label htmlFor="publicationDate">Publication Date</label>
            <Field type="date" name="publicationDate" />
            <ErrorMessage
              name="publicationDate"
              component="div"
              className="error-message"
            />
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

export default BookForm;