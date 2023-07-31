import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { myContext } from '../Data/data';
import './AuthorDetail.css'; 

function AuthorDetail() {
  const { id } = useParams();
  const { authors } = useContext(myContext);
  const author = authors.find((author) => author.id === parseInt(id));

  if (!author) {
    return <div>Author not found.</div>;
  }

  return (
    <div>

      <h2>Author Detail</h2>
      <div className='author-container'>
      
      <div className="author-detail-container">
      <div>
      <p>ID: {author.id}</p>
      <p>Name: {author.name}</p>
      <p>Birth Date: {author.birthDate}</p>
      <p>Biography: {author.biography}</p>
      </div>
      </div>
      
    </div>
    </div>
  );
}

export default AuthorDetail;