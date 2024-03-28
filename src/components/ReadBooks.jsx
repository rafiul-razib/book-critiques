import { useContext, useEffect, useState } from "react";
import { getReadBooks } from "../Utilities";
import SavedBookCard from "./SavedBookCard";
import { SortContext } from "../pages/ListedBooks";

const ReadBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const savedReadBooks = getReadBooks();
    setBooks(savedReadBooks);
  }, []);
  const handlers = useContext(SortContext);
  const { handleSOrtByRating, handleSOrtByPages, handleSOrtByYear } = handlers;
  handleSOrtByRating(books);
  handleSOrtByPages(books);
  handleSOrtByYear(books);
  return (
    <div>
      {books.map((book) => (
        <SavedBookCard key={book.bookId} book={book}></SavedBookCard>
      ))}
    </div>
  );
};

export default ReadBooks;
