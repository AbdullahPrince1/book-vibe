import { Outlet } from "react-router";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";

export default function Route() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
