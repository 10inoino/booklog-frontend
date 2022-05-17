import { useEffect, useState } from 'react';
import axios from "axios";

type Book = {
  id: number,
  title: string,
  author: string,
  isbn: string
}

export const App = () => {
  const[books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get<Book[]>("http://127.0.0.1:3000/dev/book").then((res) => {
      setBooks(res.data);
    })
  }, []);

  return (
    <div>
      {books.map(book => (
        <p>ID: {book.id} Title: {book.title} author: {book.author} isbn: {book.isbn}</p>
      ))}
    </div>
  );
}