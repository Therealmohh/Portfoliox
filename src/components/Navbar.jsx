import { useRef } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };
  return (
    <nav className={styles.navContainer}>
      <button className={styles.openBtn} onClick={showNavbar}>
        <FaBars />
      </button>
      <ul ref={navRef} className={styles.listContainer}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
            exact="true"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Works"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
            exact="true"
          >
            Works
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
            exact="true"
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
            exact="true"
          >
            Contact
          </NavLink>
        </li>
        <button className={styles.closeBtn} onClick={showNavbar}>
          <FaTimes />
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
