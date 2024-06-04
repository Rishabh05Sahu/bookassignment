
import React from 'react';
import Bookshelf from '../components/bookshelf/Bookshelf';

const BookshelfPage = () => {
  const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

  return (
    <div>
      <h1>My Bookshelf</h1>
      <Bookshelf books={bookshelf} />
    </div>
  );
};

export default BookshelfPage;
