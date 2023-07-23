import React, {useState} from 'react';

const BookForm = ({onAddBook}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');