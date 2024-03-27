import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="max-w-[82%] mx-auto">
      <div className="bg-[#1313130D] h-36  flex justify-center items-center">
        <h1 className="text-5xl font-bold">Books</h1>
      </div>

      <div className="flex items-center my-6 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
        <Link
          to={``}
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-gray-400 text-black ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
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
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-gray-400 text-black ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
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
          <span>Wishlist Books</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
