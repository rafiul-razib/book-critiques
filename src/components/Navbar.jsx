import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold border-2 bg-transparent px-4 border-primary"
              : "bg-transparent hover:bg-transparent"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold border-2 bg-transparent px-4 border-primary"
              : "bg-transparent hover:bg-transparent"
          }
          to="/listed-books"
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold border-2 bg-transparent px-4 border-primary "
              : "bg-transparent hover:bg-transparent"
          }
          to="/pages-to-read"
        >
          Page to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-center mb-28">
      <div className="navbar lg:max-w-[82%] bg-base-100 mx-auto fixed -mt-28 lg:mt-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 bg-white shadow-md"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg:text-4xl pl-0 font-extrabold">
            Book Critiques
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2">{links}</ul>
        </div>
        <div className="navbar-end flex gap-1 lg:gap-4">
          <a className="btn bg-primary text-white px-3 lg:px-6">Sign In</a>
          <a className="btn bg-secondary text-white px-3 lg:px-6">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
