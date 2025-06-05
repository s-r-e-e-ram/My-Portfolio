import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const scrollToFooter = (e) => {
    e.preventDefault();
    const section = document.querySelector("#contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sreeram</h1>
        <p className={styles.description}>
          I'm a full-stack developer using React and NodeJS.
          Reach out if you'd like to learn more!
        </p>

        <div className={styles.buttonRow}>
          <a href="#contact" className={styles.btn} onClick={scrollToFooter}>
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1pRP-DkwCVu5uxhbpiw0FxfFDEGJLdYjt/view?usp=drive_link"
            className={styles.btn2}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
