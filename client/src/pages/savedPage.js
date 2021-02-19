import React, { Component, useEffect, useState } from 'react';
import Form from '../component/Form';
import api from '../utils/api';
import usedCard from '../component/savedCard';
import SavedCard from '../component/savedCard';

function SavedPage() {
  const [books, setBooks] = useState([]);
  useEffect(async () => {
    const res = await api.getSaveBook();
    setBooks(res.data);
  }, []);

  return (
    <main>
      {books && books.length > 0 ? (
        books.map((book) => 
        <SavedCard key={book.id} book={book} />)
      ) : (
        <h1>No books to display!</h1>
      )}
    </main>
  );
}

export default SavedPage;
