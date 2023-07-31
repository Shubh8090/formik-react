import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { myContext } from '../Data/data';
import './BookDetail.css'; 

function BookDetail() {
  const { id } = useParams();
  const { books } = useContext(myContext);
  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h2>Book Detail</h2>
      <div className='book-container'>
      <div className="book-detail-container">
      <div>
      <p>ID: {book.id}</p>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Publication Date: {book.publicationDate}</p>
      </div>
    </div>
      </div>
    
    </div>
    
  );
}

export default BookDetail;