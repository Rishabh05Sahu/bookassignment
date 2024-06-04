
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from '../src/Pages/SearchPage';
import BookshelfPage from '../src/Pages/BookShelfPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/bookshelf" element={<BookshelfPage />} />
    </Routes>
  </Router>
);

export default App;
