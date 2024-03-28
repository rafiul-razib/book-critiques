import { useLoaderData, useParams } from "react-router-dom";
import {
  getReadBooks,
  saveAsRead,
  getWishedBooks,
  saveAsWished,
} from "../Utilities";

const BookDetails = () => {
  const books = useLoaderData();
  let { id } = useParams();
  const book = books.find((book) => book.bookId == id);

  const handleReadBooks = (book) => {
    getReadBooks();
    saveAsRead(book);
    // console.log("handle read clicked");
  };

  const handleWishedBooks = (book) => {
    getWishedBooks();
    saveAsWished(book);
  };

  // console.log(readBooks);

  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    bookId,
    review,
    yearOfPublishing,
    totalPages,
    publisher,
  } = book;
  return (
    <div className="card lg:card-side max-w-[82%] mx-auto mb-4">
      <div className="bg-[#1313130D] w-full p-6 lg:w-[40%] rounded-2xl flex items-center justify-center">
        <figure className="px-14 w-[500px]">
          <img src={image} className="w-full" alt="Book Image" />
        </figure>
      </div>
      <div className="card-body p-2 lg:p-8">
        <h2 className="card-title text-2xl lg:text-5xl font-bold">
          {bookName}
        </h2>
        <p>By : {author}</p>
        <div className="divider my-0"></div>
        <h1 className="">{category}</h1>
        <div className="divider my-0"></div>
        <h2>
          <span className="font-bold">Review</span> : {review}
        </h2>

        <div className="flex gap-2 items-center">
          <span className="font-bold">Tags</span> -{" "}
          <div className="flex">
            {tags.map((tag) => (
              <div
                className="badge bg-[#23BE0A0D] text-primary text-xs lg:text-base px-3 py-5 lg:py-3 mr-1 lg:mr-2"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="overflow-x-auto">
            <table className="table w-full text-xs lg:text-base">
              {/* head */}

              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Number of Pages</td>
                  <td className="font-bold">{totalPages}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Publisher</td>
                  <td className="font-bold">{publisher}</td>
                </tr>

                <tr>
                  <td>Year of Publishing</td>
                  <td className="font-bold">{yearOfPublishing}</td>
                </tr>

                <tr>
                  <td>rating</td>
                  <td className="font-bold">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-actions justify-center lg:justify-start flex gap-3">
          <button
            onClick={() => handleReadBooks(book)}
            className="btn bg-transparent border-2 border-secondary font-bold hover:bg-primary hover:text-white"
          >
            Read
          </button>
          <button
            onClick={() => handleWishedBooks(book)}
            className="btn bg-secondary text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
