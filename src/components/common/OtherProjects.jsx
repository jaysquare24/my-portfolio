import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";

export const OtherProjects = ({ projects }) => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  const containerRef = useRef(null);

  // Duplicate projects for seamless infinite effect
  const duplicatedProjects = [...projects, ...projects];

  // ✅ Detect real card width dynamically (including gap)
  useEffect(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.children[0];
      if (firstCard) {
        const style = window.getComputedStyle(containerRef.current);
        const gap = parseInt(style.gap) || 0;
        setCardWidth(firstCard.offsetWidth + gap);
      }
    }
  }, [projects]);

  // ✅ Auto scroll (respects pause)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // ✅ Seamless reset logic
  useEffect(() => {
    if (index >= projects.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 600);
    }

    if (index < 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(projects.length - 1);
      }, 600);
    }
  }, [index, projects.length]);

  // ✅ Restore transition after jump
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  const resumeTimeoutRef = useRef(null);

    const handleNext = () => {
        setIsPaused(true);
        setIndex((prev) => prev + 1);

        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 3000);
    };

    const handlePrev = () => {
        setIsPaused(true);
        setIndex((prev) => prev - 1);

        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 3000);
    };

  return (
    <div className="other-projects-wrapper container">
      <div className="header">
        <h2>Other Projects</h2>

        <div className="nav-buttons">
          <button onClick={handlePrev}>←</button>
          <button onClick={handleNext}>→</button>
        </div>
      </div>

      <div
        className="viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={containerRef}
          className="other-project-container"
          style={{
            transform: `translateX(-${index * cardWidth}px)`,
            transition: isTransitioning
              ? "transform 0.6s ease"
              : "none",
          }}
        >
          {duplicatedProjects.map((project, i) => (
            <Link
              to={`/projects/${project.slug}`}
              key={`${project.id}-${i}`}
            >
              <ProjectCard
                title={project.title}
                imgUrl={project.imgUrl}
                bgImageUrl={project.bgImageUrl}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};