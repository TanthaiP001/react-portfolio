import React from "react";
import { getImageUrl } from "../../util";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/aboutImage.png"
          alt="sitting"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/cursorIcon.png" alt="sitting" />
            <div className={styles.aboutItemsText}>
              <h3>Frontend Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                quaerat aut eius. Fugit fugiat optio accusantium corrupti, totam
                quibusdam ratione, expedita non quod illo ipsa tempore
                voluptatibus delectus eius ex?
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon.png" alt="sitting" />
            <div className={styles.aboutItemsText}>
              <h3>Frontend Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                quaerat aut eius. Fugit fugiat optio accusantium corrupti, totam
                quibusdam ratione, expedita non quod illo ipsa tempore
                voluptatibus delectus eius ex?
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/uiIcon.png" alt="sitting" />
            <div className={styles.aboutItemsText}>
              <h3>Frontend Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                quaerat aut eius. Fugit fugiat optio accusantium corrupti, totam
                quibusdam ratione, expedita non quod illo ipsa tempore
                voluptatibus delectus eius ex?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
