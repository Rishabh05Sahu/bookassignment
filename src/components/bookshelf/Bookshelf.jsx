
import React from 'react';
import "../bookshelf/Bookshelf.css"

const Bookshelf = ({ books }) => (
  <div className="bookshelf">
    {books.length === 0 ? (
      <p>No books in your bookshelf</p>
    ) : (
      books.map((book, index) => (
        <div key={index} className="book-card">
          <h3>{book.title}</h3>
          <p>{book.edition_count}</p>
        </div>
      ))
    )}
  </div>
);

export default Bookshelf;
