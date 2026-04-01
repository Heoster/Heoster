import { useState } from "react";
import "./styles/HireMe.css";

const HireMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="hire-me-section" id="hire-me">
      <div className="hire-me-wrapper section-container">
        <div className="hire-me-container">
          <div className="hire-me-header">
            <h2>
              Let's Work <span>Together</span>
            </h2>
            <p>Have a project in mind? Let me help bring your ideas to life.</p>
          </div>

          <form onSubmit={handleSubmit} className="hire-me-form">
          <input
            type="hidden"
            name="access_key"
            value="d7d17ba2-37e7-425b-a55d-8b15f2090a77"
          />

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project subject"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows={6}
              required
              disabled={isLoading}
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isLoading || isSubmitted}
          >
            {isLoading ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
          </button>

          {isSubmitted && (
            <p className="success-message">
              Thank you! I'll get back to you soon.
            </p>
          )}
        </form>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
