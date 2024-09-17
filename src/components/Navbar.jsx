import { useRef } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#Works">Works</a>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        <button className={styles.closeBtn} onClick={showNavbar}>
          <FaTimes />
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
