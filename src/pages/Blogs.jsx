import React from "react";
import styles from "../components/Blogs.module.css";
const Blogs = () => {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.aboutBlog}>
        <h2>UI Interactions of the week</h2>
        <div className={styles.date}>
          <p>12 Feb 2019</p>
          <p> |</p>
          <p className={styles.about}>Express, Handlebars</p>
        </div>
        <p className={styles.text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className={styles.aboutBlog}>
        <h2>UI Interactions of the week</h2>
        <div className={styles.date}>
          <p>12 Feb 2019</p>
          <p> |</p>
          <p className={styles.about}>Express, Handlebars</p>
        </div>
        <p className={styles.text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className={styles.aboutBlog}>
        <h2>UI Interactions of the week</h2>
        <div className={styles.date}>
          <p>12 Feb 2019</p>
          <p> |</p>
          <p className={styles.about}>Express, Handlebars</p>
        </div>
        <p className={styles.text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className={styles.aboutBlog}>
        <h2>UI Interactions of the week</h2>
        <div className={styles.date}>
          <p>12 Feb 2019</p>
          <p> |</p>
          <p className={styles.about}>Express, Handlebars</p>
        </div>
        <p className={styles.text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
