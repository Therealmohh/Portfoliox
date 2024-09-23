import React from "react";
import styles from "../components/Works.module.css";
import worksImg1 from "../Images/worksImg1.png";
import worksImg2 from "../Images/worksImg2.png";
import worksImg3 from "../Images/worksImg3.png";
const Works = () => {
  return (
    <div className={styles.worksContainer}>
      <article>
        <h1>Designing Dashboards with usability in mind</h1>
        <div className={styles.date}>
          <p className={styles.dateStyles}>2020</p>
          <p className={styles.textStyle1}>Dashboard, User Experience Design</p>
        </div>
        <p className={styles.textStyle2}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia <br /> consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </article>
      <div className={styles.imgStyles}>
        <img src={worksImg1} alt="" />
      </div>
      <div className={styles.headingContainer}></div>
      <div className={styles.heading1}>
        <h1>Heading1</h1>
        <h3>Heading 2</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia <br />
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet.
        </p>
      </div>
      <div className={styles.imgStyles}>
        <img src={worksImg2} alt="" />
      </div>
      <div className={styles.imgStyles}>
        <img src={worksImg3} alt="" />
      </div>
    </div>
  );
};

export default Works;
