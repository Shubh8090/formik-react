import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Data from './components/Data/data';
import BookList from './components/books/BookList';
import BookForm from './components/books/BookForm';
import AuthorForm from './components/authors/AuthorForm';
import AuthorList from './components/authors/AuthorList';
import BookDetail from './components/books/BookDetail';
import AuthorDetail from './components/authors/AuthorDetail';
import { myContext } from './components/Data/data';
import './App.css'



function App() {
  return (
    <Router>
      <Data>
        <div>
          <nav >
            <div className='nav-container'>
              <div> <Link to="/books">Books</Link></div>

              <div><Link to="/authors">Authors</Link></div>
            </div>
          </nav>

          <Routes>
            <Route path="/books/*" element={<BooksRoutes />} />
            <Route path="/authors/*" element={<AuthorRoutes />} />
          </Routes>
        </div>
      </Data>
    </Router>
  );
}

function BooksRoutes() {
  return (
    <div>
      <nav>
        <div className='bookroutes-container'>
          <Link to="/books">Books</Link>
          <Link to="/books/add">Add Book</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<BookForm />} />
        <Route path=":id" element={<BookDetail />} />

      </Routes>
    </div>
  );
}

function AuthorRoutes() {
  const { addAuthor } = useContext(myContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className='authorroutes-container'>
          <Link to="/authors">Authors</Link>
          <Link to="/authors/add">Add Author</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<AuthorList />} />
        <Route path="/add"
          element={<AuthorForm onSubmit={(values) => {
            addAuthor(values);
            navigate('/authors');
          }} />}
        />
        <Route path=":id" element={<AuthorDetail />} />

      </Routes>
    </div>
  );
}

export default App;