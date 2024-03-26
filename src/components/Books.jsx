import BookCard from "./BookCard";

const Books = (props) => {
  const books = props.items;
  return (
    <div className="max-w-[82%] text-center mx-auto">
      <h2 className="text-4xl font-bold mt-10 mb-4">Books</h2>

      <div className="grid grid-cols-3 gap-6">
        {books.map((item) => (
          <BookCard key={item.bookId} item={item}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
