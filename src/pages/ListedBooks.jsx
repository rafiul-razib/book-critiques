import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
  const [myTabIndex, setMyTabIndex] = useState(0);
  return (
    <div className="max-w-[82%] mx-auto">
      <div className="bg-[#1313130D] h-36 rounded-xl flex justify-center items-center">
        <h1 className="text-5xl font-bold">Books</h1>
      </div>

      <div className="flex justify-center mt-4">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-primary text-white"
          >
            Sort By <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center my-6 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
        <Link
          to={``}
          onClick={() => setMyTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-gray-400 text-black ${
            myTabIndex === 0 ? "border border-b-0" : "border-b"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>

          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setMyTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-gray-400 text-black ${
            myTabIndex === 1 ? "border border-b-0" : "border-b"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>

          <span>Wishlist Books</span>
        </Link>
        <div className="py-6 border-gray-400 border-b w-full"></div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
