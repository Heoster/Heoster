import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Real Name</h4>
            <p>Harsh</p>
            <h4>Alias/Handle</h4>
            <p>Heoster</p>
            <h4>Age</h4>
            <p>16</p>
            <h4>Location</h4>
            <p>Khatauli, Uttar Pradesh, India</p>
            <h4>Education</h4>
            <p>Maples Academy, Class 12th — PCM stream (2026–2027)</p>
            <h4>Professional</h4>
            <p>Founder & Lead Developer, CODEEX-AI (founded 2024)</p>
          </div>
          <div className="contact-box">
            <h4>Contact</h4>
            <p>
              <a href="mailto:codeex@email.com" data-cursor="disable">
                codeex@email.com
              </a>
            </p>
            <h4>Social</h4>
            <a
              href="https://github.com/heoster"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/codeex-heoster"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://x.com/The_Heoster_"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/heoster_official"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Testimonials</h4>
            <blockquote>"Harsh's work on SOHAM is impressive. The multi-provider AI integration and 99.9% uptime demonstrate true engineering excellence." - AI Community Member</blockquote>
            <blockquote>"As a user of CODEEX-AI, the platform's accessibility and performance have been outstanding." - Global User</blockquote>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>HARSH</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
