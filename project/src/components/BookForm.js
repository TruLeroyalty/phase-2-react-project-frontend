import React, {useState} from 'react';

const BookForm = ({onAddBook}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newBook = {
            title: title,
            author: author,
            description:description, 
        };

        fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook), 
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Book added successfully:", data);

                fetchBooks();
            })
            .catch((error) => {
                console.error("Error adding book:", error);
            });

            setTitle('');
            setAuthor('');
            setDescription('');
        };
    };