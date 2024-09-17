import React from "react";
import styles from "./FeaturedWorks.module.css";
import Dashboard from "../Images/Dashboard.png";
import Portrait from "../Images/Portrait.png";
import Malayam from "../Images/Malayam.png";

const FeaturedWorks = () => {
  return (
    <div className={styles.FeaturedWorks}>
      <h1 className={styles.h1Text}>Featured works</h1>
      <div className={styles.workContainer}>
        <div className={styles.work}>
          <img src={Dashboard} alt="" />
          <div className={styles.aboutWork}>
            <h1>Designing Dashboards</h1>
            <div className={styles.date}>
              <p className={styles.dateDesign}>2020</p>
              <p className={styles.text}>Dashboard</p>
            </div>
            <p className={styles.text2}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className={styles.work2}>
          <img src={Portrait} alt="" />
          <div className={styles.aboutWork}>
            <h1>Vibrant Portraits of 2020</h1>
            <div className={styles.date}>
              <p className={styles.dateDesign}>2018</p>
              <p className={styles.text}>Illustration</p>
            </div>
            <p className={styles.text2}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className={styles.work3}>
          <img src={Malayam} alt="" />
          <div className={styles.aboutWork}>
            <h1>36 Days of Malayalam type</h1>
            <div className={styles.date}>
              <p className={styles.dateDesign}>2018</p>
              <p className={styles.text}>Typography</p>
            </div>
            <p className={styles.text2}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
