import React, { useEffect, useRef } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, name, subtitle, languages, webLink, githubLink }) => {
  const cardRef = useRef(null);

  const getLanguageClass = (language) => {
    switch (language.toLowerCase()) {
      case 'javascript':
        return 'language-javascript';
      case 'react':
        return 'language-react';
      case 'next.js':
        return 'language-nextjs';
      case 'tailwind css':
        return 'language-tailwind';
      case 'python':
        return 'language-python';
      case 'material-ui':
        return 'language-mui';
      case 'flask':
        return 'language-flask';
      case 'bootstrap 5':
        return 'language-bootstrap';
      case 'pytorch':
        return 'language-pytorch';
      default:
        return '';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="project-card fade-in-card" ref={cardRef}>
      <img src={image} alt={`${name} project`} className="project-image" />
      <div className="project-info">
        <h3 className="project-name">{name}</h3>
        {subtitle && <p className="project-subtitle">{subtitle}</p>}
        <div className="project-languages">
          {languages.map((language, index) => (
            <span key={index} className={`language-badge ${getLanguageClass(language)}`}>
              {language}
            </span>
          ))}
        </div>
        <hr className="separator" />
        <div className="project-links">
          {webLink && <a href={webLink} target="_blank" rel="noopener noreferrer" className="project-link">Website</a>}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
              <img src="/github.svg" alt="github-icon" className="github-icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;