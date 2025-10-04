import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { route } from "./Routes/Route";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}></RouterProvider>
);
