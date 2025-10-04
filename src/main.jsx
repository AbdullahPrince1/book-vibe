import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Route from "./Route";
import Home from "./Pages/Home";
import Listed from "./Pages/Listed";
import DashBoard from "./Pages/DashBoard";
import Details from "./Pages/Details";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
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

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}></RouterProvider>
);
