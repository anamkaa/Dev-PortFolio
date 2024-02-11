import "../../src/App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navigation container">
        <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <Link to="/" className="link link-active">
              Home
            </Link>
          </li>
          <li className="list-item-inline">
            <Link to="/projects" className="link link-active">
              Projects
            </Link>
          </li>
          <li className="list-item-inline">
            <Link to="/blogs" className="link link-active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
