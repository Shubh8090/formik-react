import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../Data/data';
import './AuthorList.css'; 

const AuthorList = () => {
  const { authors, deleteAuthor } = useContext(myContext);

  return (
    <div className="author-list-container">
      <h2 className="list-title">Author List</h2>
      <ul className="list">
        {authors.map((author) => (
          <li key={author.id} className="list-item">
            <Link to={`/authors/${author.id}`} className="author-link">
              {author.name}
            </Link>
            <button className="delete-button" onClick={() => deleteAuthor(author.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;