
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Pages/SearchPage.css"
import BookSearch from '../components/BookSearch/BookSearch'; 

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(() => JSON.parse(localStorage.getItem('bookshelf')) || []);
  const navigate = useNavigate();

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <div  >
      <div className='nav'>
      <h1>Book Search</h1>
      <button onClick={() => navigate('/bookshelf')}>Go to My Bookshelf</button>
      </div>
      <BookSearch addToBookshelf={addToBookshelf} />
    </div>
  );
};

export default SearchPage;
