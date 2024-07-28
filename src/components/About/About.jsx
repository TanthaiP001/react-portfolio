import React from "react";
import { getImageUrl } from "../../util";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/mensit.png")}
          alt="sitting"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="sitting" />
            <div className={styles.aboutItemsText}>
              <h3>Frontend Developer</h3>
              <p>
                I am an experienced mid-level frontend developer proficient in
                Vue.js and RESTful API integration, with a passion for creating
                dynamic and responsive user interfaces. I am dedicated to
                delivering high-quality solutions and continuously expanding my
                skills in frontend development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="sitting" />
            <div className={styles.aboutItemsText}>
              <h3>Software Developer</h3>
              <p>
                Contributed as a vital team member in the development of web
                applications essential for hospital operations, assuming dual
                responsibilities for both the web and mobile sections of the
                applications, working with microservices that have multiple
                configurations, and collaborating with the backend team.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="sitting" />
            <div className={styles.aboutItemsText}>
              <h3>Self Learner</h3>
              <p>
                A dedicated self-learner, I continuously expand my frontend
                development skills, stay updated with the latest industry
                trends, and explore emerging technologies. I’m committed to
                delivering high-quality solutions and eager to contribute to
                innovative projects as part of your team.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
