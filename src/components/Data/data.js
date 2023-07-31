import React, { createContext, useState } from 'react';

export const myContext = createContext();

const Data = ({ children }) => {
  const [books, setBooks] = useState([
    {
        id:1,
        title:"Book1",
        author:"Author1",
        isbn:"9087654321",
        publicationDate:"26-07-2023"

    },
    {
        id:2,
        title:"Book2",
        author:"Author2",
        isbn:"1029384756",
        publicationDate:"26-01-2023"

    },
    {
        id:3,
        title:"Book3",
        author:"Author3",
        isbn:"6758493021",
        publicationDate:"03-10-2022"

    },
    {
        id:4,
        title:"Book4",
        author:"Author4",
        isbn:"8907564231",
        publicationDate:"23-05-2021"

    }
]); 
  const [authors, setAuthors] = useState([
    {
        id:1,
        name:"Author1",
        birthDate:"01-01-1995",
        biography:"biography of author1"
    },
    {
        id:2,
        name:"Author2",
        birthDate:"21-10-1990",
        biography:"biography of author2"
    },
    {
        id:3,
        name:"Author3",
        birthDate:"12-07-1993",
        biography:"biography of author3"
    },
    {
        id:4,
        name:"Author4",
        birthDate:"03-02-1996",
        biography:"biography of author4"
    }

]); 

  const addBook = (book) => {
    book.id = Date.now();
    setBooks([...books, book]);
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const addAuthor = (author) => {
    author.id = Date.now();
    setAuthors([...authors, author]);
  };

  const deleteAuthor = (id) => {
    const updatedAuthors = authors.filter((author) => author.id !== id);
    setAuthors(updatedAuthors);
  };

  return (
    <div>
      <myContext.Provider
        value={{ books, authors, addBook, deleteBook, addAuthor, deleteAuthor }}
      >
        {children}
      </myContext.Provider>
    </div>
  );
};

export default Data;