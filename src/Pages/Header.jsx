import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <nav className="mt-7">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <Link to="/" className="font-bold text-2xl">
              Book Vibe
            </Link>
          </div>
          <div className="space-x-10">
            <NavLink className={"font-medium text-xl text-neutral-400"} to="/">
              Home
            </NavLink>
            <NavLink
              className={"font-medium text-xl text-neutral-400"}
              to="/listed"
            >
              Listed
            </NavLink>
            <NavLink
              className={"font-medium text-xl text-neutral-400"}
              to="/dashBoard"
            >
              DashBoard
            </NavLink>
          </div>
          <div className="space-x-4">
            <button className="bg-green-500 font-semibold text-lg text-white px-4 py-2 rounded-lg">
              Log In
            </button>
            <button className="bg-blue-500 font-semibold text-lg text-white px-4 py-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
