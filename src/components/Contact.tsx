import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:codeex@email.com" data-cursor="disable">
                codeex@email.com
              </a>
            </p>
            <h4>HEOSTER</h4>
            <p>Founder & Lead Developer at CODEEX-AI.<br />
             Expert in Full-Stack AI, React/Next.js, and multi-provider orchestration. </p>
         
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/heoster"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/codeex-heoster"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/The_Heoster"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/codeex._.heoster"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Heoster</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Heoster. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
