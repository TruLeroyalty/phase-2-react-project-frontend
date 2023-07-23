import './App.css';
import React from 'react';
import Home from "./components/Home";



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
              <Link to="/">Add Book</Link>
            </li>
            <li>
            <Link to="/">Saved Books</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route>
            path="/" element={<Home books={books} onRemoveBook={saveBook} />}
          </Route>
        </Routes>
      </Router>

    

     
     
     
     <Home />
    </div>
  );
}


export default App;
