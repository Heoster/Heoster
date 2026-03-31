import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Lead Developer</h4>
                <h5>CODEEX-AI</h5>
              </div>
              <h3>2026-present</h3>
            </div>
            <p>
              Architected and launched SOHAM, a scalable AI platform with 26+ models,
              provider-agnostic routing, developer API and 99.9% uptime at global scale.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Delivered web apps with React, Next.js, TypeScript, Firebase. Focus on
              PWAs, performance, and mobile-first design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>COMPLETE LEARNING</h4>
                <h5>CODEEX-AI</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Master javascript and start working on project. Start Codeex AI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Learning Basics to Advance</h4>
                <h5>START CODING LIFE</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Start learn code By HTML, CSS and javascript .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
