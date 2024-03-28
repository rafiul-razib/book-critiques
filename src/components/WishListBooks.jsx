import { useContext, useEffect, useState } from "react";
import { getWishedBooks } from "../Utilities";
import SavedBookCard from "./SavedBookCard";
import { SortContext } from "../pages/ListedBooks";

const WishListBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const savedReadBooks = getWishedBooks();
    setBooks(savedReadBooks);
  }, []);

  const sortHandlers = useContext(SortContext);

  const { sortedBooks } = sortHandlers;

  return (
    <div>
      {sortedBooks.length
        ? sortedBooks.map((book) => (
            <SavedBookCard key={book.bookId} book={book}></SavedBookCard>
          ))
        : books.map((book) => (
            <SavedBookCard key={book.bookId} book={book}></SavedBookCard>
          ))}
    </div>
  );
};

export default WishListBooks;
