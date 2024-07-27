import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tan!</h1>
        <p className={styles.description}>
          I am an experienced mid-level frontend developer proficient in Vue.js
          and RESTful API integration, with a passion for creating dynamic and
          responsive user interfaces. I am dedicated to delivering high-quality
          solutions and continuously expanding my skills in frontend
          development. I would love the opportunity to contribute to innovative
          projects as part of your team.
        </p>
        <a href="mailto:tanthaipotong@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
