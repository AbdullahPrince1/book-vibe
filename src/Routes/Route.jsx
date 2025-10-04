import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Listed from "../Pages/Listed";
import Details from "../Pages/Details";
import DashBoard from "../Pages/DashBoard";
import Root from "../Pages/Root/Root";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <img
        className="h-[100dvh] w-full"
        src="https://colibriwp.com/blog/wp-content/uploads/2019/07/2488756.jpg"
      ></img>
    ),
    children: [
      {
        path: "",
        Component: Home,
        loader: () => fetch("/data/booksData.json"),
      },
      {
        path: "/listed",
        Component: Listed,
      },
      {
        path: "/details/:bookId",
        loader: async ({ params }) => {
          const res = await fetch("/data/booksData.json");
          const data = await res.json();
          const book = data.find((b) => b.bookId === Number(params.bookId));
          return book;
        },

        Component: Details,
      },
      {
        path: "/dashboard",
        Component: DashBoard,
      },
    ],
  },
]);
