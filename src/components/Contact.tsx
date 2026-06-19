import { useRef, useState, type FormEvent } from 'react';
import { hero, socialLinks } from '../data/portfolio';
import './Contact.css';

type FormStatus = 'idle' | 'sending' | 'sent';

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== 'idle') return;

    setStatus('sending');
    window.setTimeout(() => {
      setStatus('sent');
      window.setTimeout(() => {
        setStatus('idle');
        formRef.current?.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-intro">
            <h2 id="contact-title" className="font-serif contact-title">
              Let&apos;s Connect
            </h2>
            <p className="contact-desc">
              Open to ML engineering roles, research collaborations, and full-stack intelligent system
              projects. Reach out for demos, internships, or project inquiries.
            </p>

            <div className="contact-cards">
              <a href={`mailto:${hero.email}`} className="contact-card neu-convex">
                <div className="contact-card-icon neu-concave">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="label-mono contact-card-label">Email</p>
                  <p className="contact-card-value">{hero.email}</p>
                </div>
              </a>

              <a href={`tel:${hero.phone.replace(/\s/g, '')}`} className="contact-card neu-convex">
                <div className="contact-card-icon neu-concave">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="label-mono contact-card-label">Phone</p>
                  <p className="contact-card-value">{hero.phone}</p>
                </div>
              </a>

              <a
                href={hero.linkedinUrl}
                className="contact-card neu-convex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-card-icon neu-concave">
                  <span className="material-symbols-outlined">link</span>
                </div>
                <div>
                  <p className="label-mono contact-card-label">LinkedIn</p>
                  <p className="contact-card-value">sravani-nanubala</p>
                </div>
              </a>
            </div>

            <p className="contact-location">
              <span className="material-symbols-outlined">location_on</span>
              {hero.location}
            </p>
          </div>

          <div className="contact-form-wrap neu-flat">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="label-mono form-label" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="form-input neu-concave"
                />
              </div>

              <div className="form-group">
                <label className="label-mono form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="form-input neu-concave"
                />
              </div>

              <div className="form-group">
                <label className="label-mono form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we collaborate?"
                  className="form-input neu-concave form-textarea"
                />
              </div>

              <button
                type="submit"
                className={`contact-submit neu-button-primary ${status === 'sent' ? 'is-sent' : ''}`}
                disabled={status !== 'idle'}
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <span className="material-symbols-outlined spin">sync</span>
                    Sending...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <span className="material-symbols-outlined">check_circle</span>
                    Message Sent!
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <footer className="contact-footer">
          <div className="contact-social">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="contact-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
          <p className="contact-copy">
            © {new Date().getFullYear()} Nanubala Sravani · Built with React
          </p>
        </footer>
      </div>
    </section>
  );
}
