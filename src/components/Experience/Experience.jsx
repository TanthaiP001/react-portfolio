import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles.timeline}>
        {history.map((item) => (
          <article key={`${item.organisation}-${item.startDate}`} className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
              <img
                src={getImageUrl(item.imageSrc)}
                alt=""
                className={styles.timelineLogo}
              />
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.timelinePeriod}>
                {item.startDate} – {item.endDate}
              </div>
              <h3 className={styles.timelineRole}>{item.role}</h3>
              <p className={styles.timelineCompany}>{item.organisation}</p>
              {item.location && (
                <p className={styles.timelineLocation}>{item.location}</p>
              )}
              <ul className={styles.timelineList}>
                {item.experiences.map((exp) => (
                  <li key={exp}>{exp}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
