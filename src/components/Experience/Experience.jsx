import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
<div className={styles.carousel}>
  <div className={styles.track}>
    {[...skills, ...skills].map((skill, id) => ( // duplicated list for seamless loop
      <div key={id} className={styles.skill}>
        <div className={styles.skillImageContainer}>
          <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
        </div>
        <p>{skill.title}</p>
      </div>
    ))}
  </div>


        <ul className={styles.history}>
  <h2 className={styles.title}>Experience</h2>
  {history.map((historyItem, id) => {
    return (
      <a
        key={id}
        href={historyItem.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.historyLink} // optional for styling
      >
        <li className={styles.historyItem}>
          <img
            src={getImageUrl(historyItem.imageSrc)}
            alt={`${historyItem.organisation} Logo`}
          />
          <div className={styles.historyItemDetails}>
            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
            <ul>
              {historyItem.experiences.map((experience, index) => (
                <li key={index}>{experience}</li>
              ))}
            </ul>
          </div>
        </li>
      </a>
    );
  })}
</ul>

      </div>
    </section>
  );
};
