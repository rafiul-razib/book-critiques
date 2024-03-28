import { MdOutlinePlace } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { IoDocumentsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SavedBookCard = ({ book }) => {
  const {
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    image,
    bookId,
  } = book;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-5">
      <div className="flex justify-center items-center py-5 px-10 bg-[#1313130D] m-6 rounded-2xl">
        <figure className="w-24">
          <img className="w-full" src={image} alt="Album" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
        <p>By : {author}</p>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 text-sm">
          <div>
            <span className="font-bold">Tags -</span>
            {tags.slice(0, 2).map((tag) => (
              <div
                className="badge bg-[#23BE0A0D] text-primary p-3 m-2"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <MdOutlinePlace className="font-thin" /> Year of Publishing :{" "}
            {yearOfPublishing}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-start gap-2 lg:gap-5 text-sm">
          <div className="flex items-center gap-1">
            <BsPeople className=" font-thin" /> Publisher : {""}
            {publisher}
          </div>
          <div className="flex items-center gap-1">
            <IoDocumentsOutline className=" font-thin" /> Pages : {totalPages}
          </div>
        </div>
        <div className="divider my-0"></div>

        <div className="card-actions justify-start flex gap-3">
          <div className="badge bg-[#23BE0A0D] text-secondary p-4">
            <span>Category : {category} </span>
          </div>
          <div className="badge bg-[#23BE0A0D] text-orange-400 p-4">
            <span>Rating : {rating} </span>
          </div>
          <Link
            to={`/book/${bookId}`}
            className="badge bg-primary text-white p-4"
          >
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SavedBookCard;
