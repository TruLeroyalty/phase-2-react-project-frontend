import './App.css';
import React from 'react';
import Home from "./components/Home";



function App() {
  return (
    <div className="App">
      const [books,setBooks] = useState([]);
      
      const addBook = (newBook) ={'>'} {
        setBooks([...books, newBook]);
};

    const [savedBooks,setSavedBooks] = useState([]);

    const saveBook = (bookId) ={'>'} {
      const bookToSave = books.find((book) ={'>'} book.id === bookId);
      if (bookToSave) {
        setSavedBooks([...savedBooks, bookToSave]);
        setBooks(books.filter((book) ={'>'} book.id !== bookId));
      }
    };

    

     
     
     
     <Home />
    </div>
  );
}

export default App;
