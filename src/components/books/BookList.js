import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../Data/data';
import './BookList.css'; 

const BookList = () => {
  const { books, deleteBook } = useContext(myContext);

  return (
    <div className="book-list-container">
      <h2 className="list-title">Book List</h2>
      <ul className="list">
        {books.map((book) => (
          <li key={book.id} className="list-item">
            <Link to={`/books/${book.id}`} className="book-link">
              {book.title}
            </Link>
            <button className="delete-button" onClick={() => deleteBook(book.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;