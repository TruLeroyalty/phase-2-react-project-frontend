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