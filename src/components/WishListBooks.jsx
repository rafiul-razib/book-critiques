import { useEffect, useState } from "react";
import { getWishedBooks } from "../Utilities";
import SavedBookCard from "./SavedBookCard";

const WishListBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const savedReadBooks = getWishedBooks();
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

export default WishListBooks;
