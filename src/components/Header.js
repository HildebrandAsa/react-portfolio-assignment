import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="header">
      <nav>
        <ul className="header-list">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/about">About</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;