import React from "react";
import styles from "./Recent.module.css";
const Recent = () => {
  return (
    <div className={styles.recent}>
      <div className={styles.recentPost}>
        <h1>Recent posts</h1>
        <a className={styles.viewAll} href="#">
          View all
        </a>
      </div>
      <div className={styles.recentCard}>
        <div className={styles.card1}>
          <h1>Making a design system from scratch</h1>
          <div className={styles.dateAbout}>
            <p>12 Feb 2020</p>
            <p> | </p>
            <p>Design, Pattern</p>
          </div>
          <p className={styles.card}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className={styles.card1}>
          <h1>Creating pixel perfect icons in Figma</h1>
          <div className={styles.dateAbout}>
            <p>12 Feb 2020</p>
            <p> | </p>
            <p>Figma, Icon Design</p>
          </div>
          <p id="card">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recent;
