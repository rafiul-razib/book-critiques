import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const BookCard = ({ item }) => {
  const { bookName, author, image, rating, category, tags, bookId } = item;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 shadow-xl border-2 border-[#1313130D]">
        <div className="flex justify-center items-center p-8 bg-[#1313130D] m-6 rounded-2xl h-56 mb-0 ">
          <figure className="w-24">
            <img className="w-full" src={image} alt="Book" />
          </figure>
        </div>
        <div className="card-body text-start flex gap-2">
          <div className="flex gap-2 text-sm">
            {tags.slice(0, 2).map((tag) => (
              <div className="badge bg-[#23BE0A0D] text-primary p-3" key={tag}>
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="divider my-0"></div>
          <div className="card-actions justify-between">
            <div className="">{category}</div>
            <div className="flex gap-2 items-center">
              {rating} <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
