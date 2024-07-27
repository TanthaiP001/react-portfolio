import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tanthai!</h1>
        <p className={styles.description}>
          I’m a mid-level frontend developer skilled in Vue.js, React and RESTful API
          integration, passionate about crafting dynamic, responsive user
          interfaces. I’m committed to high-quality solutions and eager to
          contribute to innovative projects as part of your team.
        </p>
        <a href="mailto:tanthaipotong@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile3.jpg")}
        alt="hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
