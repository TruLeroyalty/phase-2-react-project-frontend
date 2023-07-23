import './App.css';
import React from 'react';
import Home from "./components/Home";



function App() {
  return (
    <div className="App">
      const [books,setBooks] = useState([]);
      
      const addBook = (newBook) => {
        setBooks([...books, newBook]);
};

    const [savedBooks,setSavedBooks] = useState([]);

     
     
     
     <Home />
    </div>
  );
}

export default App;
