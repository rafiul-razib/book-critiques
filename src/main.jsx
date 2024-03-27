import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import ListedBooks from "./pages/ListedBooks.jsx";
import PagesToRead from "./pages/PagesToRead.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import ReadBooks from "./components/ReadBooks.jsx";
import WishListBooks from "./components/WishListBooks.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://rafiul-razib.github.io/testJsonBooksData/books.json"),
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () =>
          fetch("https://rafiul-razib.github.io/testJsonBooksData/books.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlist",
            element: <WishListBooks></WishListBooks>,
          },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>
);
