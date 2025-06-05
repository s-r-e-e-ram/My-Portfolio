import React, { useState, useEffect } from "react";
import './Certificate.css';

const certificates = [
  {
    title: 'React Developer Certification',
    imageUrl: '/assets/cimages/C1.jpeg',
  },
  {
    title: 'JavaScript Mastery',
    imageUrl: '/assets/cimages/C2.jpeg',
  },
  {
    title: 'Web Accessibility',
    imageUrl: '/assets/cimages/C3.jpeg',
  },
  {
    title: 'Responsive Design',
    imageUrl: '/assets/cimages/C4.jpeg',
  },
];

const Certificate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length
    );
  };

  // Uncomment below to enable automatic sliding every 3 seconds
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
 

  const getPositionClass = (index) => {
    const total = certificates.length;
    if (index === currentIndex) return 'center';
    if (index === (currentIndex + 1) % total) return 'next';
    if (index === (currentIndex - 1 + total) % total) return 'prev';
    return 'hidden';
  };

  return (
    <section className="certificate-section">
      <h2 className="certificate-heading">Certifications</h2>
      <div className="carousel-container">
        <button className="nav-btn left" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-rotator">
          {certificates.map((cert, index) => (
            <div
              className={`certificate-card ${getPositionClass(index)}`}
              key={index}
            >
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="certificate-image"
              />
              <div className="certificate-title">{cert.title}</div>
            </div>
          ))}
        </div>
        <button className="nav-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Certificate;
