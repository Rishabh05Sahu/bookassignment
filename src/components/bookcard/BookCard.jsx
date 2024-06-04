
import React from 'react';
import "../bookcard/BookCard.css"

const BookCard = ({ book, addToBookshelf }) => (
  <div className="book-card">
    <h3><span>Book Title:</span> {book.title}</h3>
    <p><span>Edition Count:</span> {book.edition_count}</p>
    <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
  </div>
);

export default BookCard;
