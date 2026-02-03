import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills & Technologies</h2>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.title} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt="" />
            </div>
            <p className={styles.skillTitle}>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
