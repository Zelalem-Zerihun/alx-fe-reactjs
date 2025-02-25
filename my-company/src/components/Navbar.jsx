import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "#f0f0f0",
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
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
