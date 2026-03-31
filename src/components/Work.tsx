import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "CODEEX-AI",
    category: "A ChatGPT Clone",
    tools: "Angular, Next.js, NodeJS, firebase",
    image: "/images/Slidox.png",
    directAnswer: "CODEEX-AI is a full-stack AI platform built with Angular, Next.js, Node.js, and Firebase, featuring multi-provider AI integration and high-performance PWA capabilities for scalable chat applications.",
    objective: "To create an accessible AI chat platform that democratizes advanced AI technology for users worldwide.",
    approach: "Utilized Angular for frontend, Next.js for SSR, Node.js for backend APIs, Firebase for authentication and database, implementing multi-provider AI orchestration with intelligent routing.",
    outcome: "Launched SOHAM with 26+ AI models, reaching 100+ countries, 1000+ daily users, and achieving 99.9% uptime.",
  },
  {
    title: "CODEEX-FOCUS",
    category: "A time management app",
    tools: "Angular, Next.js, nodejs, firebase",
    image: "/images/radix.png",
    directAnswer: "CODEEX-FOCUS is a productivity app developed using Angular, Next.js, Node.js, and Firebase, designed for efficient time management with PWA features and mobile-first responsive design.",
    objective: "To develop a user-friendly time management tool that helps individuals optimize their productivity and focus.",
    approach: "Built with Angular for dynamic UI, Next.js for performance, Node.js for server-side logic, Firebase for real-time data sync, focusing on PWA standards for offline functionality.",
    outcome: "Delivered a high-performance app with seamless user experience, integrating advanced features for task tracking and productivity enhancement.",
  },

];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-direct-answer">{project.directAnswer}</p>
                        <h5>Objective</h5>
                        <p>{project.objective}</p>
                        <h5>Approach</h5>
                        <p>{project.approach}</p>
                        <h5>Outcome</h5>
                        <p>{project.outcome}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={`${project.title} - ${project.category} built with ${project.tools}, showcasing full-stack AI development and PWA features`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
