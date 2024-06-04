
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from '../bookcard/BookCard';
import "../BookSearch/BookSearch.css"

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchBooks = async (q) => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
      setResults(response.data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      searchBooks(value);
    } else {
      setResults([]);
    }
  };

  return (
    <div className='BookSearch'>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for books"
      />
      <div className="search-result-container">
      <div className="search-results">
        {results.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default BookSearch;
