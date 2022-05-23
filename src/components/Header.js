import { Link } from "react-router-dom";

const Header = () => {
//Linking to the different pages
  return (
    <header className="header">
      <nav>
        <ul className="header-list">
          <li className="link">
            <Link to="/">Hem</Link>
          </li>
          <li className="link">
            <Link to="/about">Om</Link>
          </li>
          <li className="link">
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;