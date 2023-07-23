import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, {useState} from 'react';
import Home from "./components/Home";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";



const App = () => {
    
      const [books,setBooks] = useState([]);
      
      const addBook = (newBook) => {
        setBooks([...books, newBook]);
      };


    const [savedBooks,setSavedBooks] = useState([]);

    const saveBook = (bookId) => {
      const bookToSave = books.find((book) => book.id === bookId);
      if (bookToSave) {
        setSavedBooks([...savedBooks, bookToSave]);
        setBooks(books.filter((book) => book.id !== bookId));
      }
    };

    const removeSavedBook = (bookId) => {
      const bookToRemove = savedBooks.find((book) => book.id === bookId);
      if (bookToRemove) {
        setSavedBooks(savedBooks.filter((book) => book.id !== bookId));
      }
    };

    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-book">Add Book</Link>
            </li>
            <li>
            <Link to="/book-list">Saved Books</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/" element={<Home books={books} onRemoveBook={saveBook} />}
            />
            <Route path="/add-book" element={<BookForm onAddBook={addBook} />} />
            <Route path="/book-list" element={<BookList books={savedBooks} removeSavedBook={removeSavedBook} />
            }
            />
          </Routes>
      </Router>
      );

    <Home />
          };
  


export default App;
