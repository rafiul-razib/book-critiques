import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const Books = () => {
  const allBooks = useLoaderData();

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mt-10 mb-4">Books</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {allBooks.map((item) => (
          <BookCard key={item.bookId} item={item}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
