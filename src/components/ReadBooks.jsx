import { useEffect, useState } from "react";
import { getReadBooks } from "../Utilities";
import SavedBookCard from "./SavedBookCard";

const ReadBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const savedReadBooks = getReadBooks();
    setBooks(savedReadBooks);
  }, []);
  return (
    <div>
      {books.map((book) => (
        <SavedBookCard key={book.bookId}></SavedBookCard>
      ))}
    </div>
  );
};

export default ReadBooks;
