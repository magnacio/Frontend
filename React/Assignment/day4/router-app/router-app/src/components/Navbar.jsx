import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        About
      </NavLink>
      <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Services
      </NavLink>
      <NavLink to="/courses" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Courses
      </NavLink>
      <NavLink to="/gallery" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Gallery
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Contact
      </NavLink>
      <NavLink to="/help" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Help
      </NavLink>
    </nav>
  );
};

export default Navbar;
