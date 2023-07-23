import React from 'react';

const Home = () => {
  return ( 
     <div>
        <h1>
            <strong>
                Welcome to your Favorite Library
            </strong>
            <br />
        </h1>
        <p>
            <h2>
                Go ahead and browse around or add some suggestions!
            </h2>
        </p>
        <div>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                      <div className="card text-center" style={{ width: "18rem" }}>
                        <div class
                    
            </ul>
        </div>
    </div>
)
}


export default Home;
