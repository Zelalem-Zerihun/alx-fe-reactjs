import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {" "}
      {/* Use class for styling */}
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/services" className="nav-link">
        Services
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
