import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-4xl font-bold text-pink-600">Oops...</h2>
      <h2 className="text-6xl font-bold my-7 text-red-500">
        Page not found : 404
      </h2>
      <Link to="/">
        <button className="btn bg-primary text-white m-3">
          Go back to home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
