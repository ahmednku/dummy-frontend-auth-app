import { Link } from "react-router-dom";
import routes from "../routes";

const Navbar = () => {
  return (
    <>
      <header className="w-full bg-slate-100 rounded mb-10">
        <nav className="px-10">
          <ul className="flex gap-x-10 gap-y-1 py-3">
            {routes[0].children
              .filter((route) => route.title !== undefined)
              .map((route) => (
                <li key={route.title} className="hover:text-blue-900 text-lg">
                  <Link to={route.path}>{route.title}</Link>
                </li>
              ))}
            {/* <li className="hover:text-blue-900 text-lg">
              <Link to={"/"}>Logout</Link>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
