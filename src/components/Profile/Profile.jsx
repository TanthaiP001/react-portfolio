import React from "react";
import styles from "./Profile.module.css";
import profile from "../../data/profile.json";

export const Profile = () => {
  return (
    <section className={styles.container} id="profile">
      <h2 className={styles.title}>Profile</h2>
      <div className={styles.grid}>
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Core Strengths</h3>
          <ul className={styles.list}>
            {profile.coreStrengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Soft Skills</h3>
          <ul className={styles.list}>
            {profile.softSkills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Languages</h3>
          <ul className={styles.langList}>
            {profile.languages.map((item) => (
              <li key={item.name}>
                <span className={styles.langName}>{item.name}</span>
                <span className={styles.langLevel}>{item.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
