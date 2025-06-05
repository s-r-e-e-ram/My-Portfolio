import React, { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const imgRef = useRef(null);
  const [gradient, setGradient] = useState(
    "linear-gradient(180deg, #576cbc 0%, #132a53 100%)"
  );

  useEffect(() => {
    const img = imgRef.current;
    const colorThief = new ColorThief();

    if (img.complete) {
      handleColors();
    } else {
      img.addEventListener("load", handleColors);
      return () => img.removeEventListener("load", handleColors);
    }

    function handleColors() {
      try {
        const palette = colorThief.getPalette(img, 2);
        if (palette.length >= 2) {
          const startColor = `rgb(${palette[0].join(",")})`;
          const endColor = `rgb(${palette[1].join(",")})`;
          setGradient(`linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`);
        }
      } catch {
        // fallback gradient if extraction fails
        setGradient("linear-gradient(180deg, #576cbc 0%, #132a53 100%)");
      }
    }
  }, [imageSrc]);

  return (
    <div className={styles.container} style={{ background: gradient }}>
      {/* Hidden image for color extraction */}
      <img
        ref={imgRef}
        src={getImageUrl(imageSrc)}
        alt={`Hidden ${title}`}
        crossOrigin="anonymous"
        style={{ display: "none" }}
      />
      {/* Visible content */}
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noreferrer">
          See More
        </a>
        <a href={source} className={styles.link} target="_blank" rel="noreferrer">
          Source
        </a>
      </div>
    </div>
  );
};
