import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navigation">
      <h1 className="mainName">Quiz App</h1>
      <ul className="navList">
        <li className="navItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/about">About</Link>
        </li>
        <li className="navItem">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
