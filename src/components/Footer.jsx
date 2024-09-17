import React from "react";
import insta from "../Images/insta.png";
import fb from "../Images/fb.png";
import Linkedin from "../Images/Linkedin.png";
import Group from "../Images/Group.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <img src={insta} alt="Instagram icon" />
        <img src={fb} alt="Facebook icon" />
        <img src={Group} alt="Group icon" />
        <img src={Linkedin} alt="LinkedIn icon" />
      </div>

      <div className={styles.footerLinks}>
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms">Terms of Service</a>
          </li>
        </ul>
      </div>

      <div className={styles.footerText}>
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
