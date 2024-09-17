import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../Images/HeroImg.png";
const HeroSection = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutInfo}>
          <h1>
            Hi, I am John, <br /> <span>Creative</span> Technologist
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button>Download Resume</button>
        </div>
        <div className={styles.img}>
          <img src={HeroImg} alt="./HeroImg" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
