import React, { useState } from "react";

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new book object
    const newBook = {
      title: title,
      author: author,
      description: description,
      
    };

    fetch("http://localhost:5000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Book added successfully:", data);
          // Call the function passed from the parent component to update the books list
          onAddBook(data);
        })
        .catch((error) => {
          console.error("Error adding book:", error);
        });
  

    // Call the onAddBook function passed from the parent component (App.js)
    onAddBook(newBook);

    // Clear the form fields
    setTitle("");
    setAuthor("");
    setDescription("");
  };

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <h2>Add Your Favorite Book</h2>
      <br />
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <label htmlFor="description">What does it consist of? </label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;

