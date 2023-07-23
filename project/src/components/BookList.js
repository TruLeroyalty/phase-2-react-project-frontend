import React from 'react';

const BookList = ({ books, removeSavedBook }) => {
    return (
        <div>
            <h2 className= "card text-center">Saved Books</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <div className='card text-center' style={{width: "18rem" }}>
                            <div className='card-body'>
                                <h5 className='title'>
                                    <strong>Title: {book.title}</strong>
                                </h5>
                                <p className='card-text'>
                                    Author: {book.author}
                                </p>
                                <p className='card-text'>
                                    Reason To Check It Out: <br />
                                </p>
                                <p className='card-text'>
                                    {book.description}
                                </p>

                            </div>

                        </div>
                    </li>
            </ul>
        </div>
    )
}