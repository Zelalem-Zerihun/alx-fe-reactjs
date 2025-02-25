 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css"; // Import the CSS file

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
      <Link
        to="/"
        style={{ margin: "0 10px", textDecoration: "none", color: "#333" }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ margin: "0 10px", textDecoration: "none", color: "#333" }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{ margin: "0 10px", textDecoration: "none", color: "#333" }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{ margin: "0 10px", textDecoration: "none", color: "#333" }}
      >
        Contact
      </Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {" "}
        {/* Wrap with a container div */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
