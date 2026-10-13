import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Admissions.css";

const admissionSteps = [
  {
    number: "01",
    title: "Enquiry",
    description: "Tell us a little about your child and the year group you are exploring.",
    detail: "Start online or arrange a campus visit.",
  },
  {
    number: "02",
    title: "Application",
    description: "Complete the application form and share the required documents.",
    detail: "Our admissions team will guide you through each item.",
  },
  {
    number: "03",
    title: "Interaction / Assessment",
    description: "Meet our team so we can understand your child's learning needs.",
    detail: "Age-appropriate and designed to help each child feel at ease.",
  },
  {
    number: "04",
    title: "Selection",
    description: "The admissions team reviews the application and next steps.",
    detail: "Families are contacted directly with an update.",
  },
  {
    number: "05",
    title: "Enrollment",
    description: "Confirm your place and get ready for the first day at EAK.",
    detail: "We will share the joining information and school essentials.",
  },
];

const eligibility = [
  {
    year: "Early Years",
    age: "Age-appropriate readiness",
    note: "Placement is based on the child's age and developmental readiness.",
  },
  {
    year: "Primary",
    age: "Previous year completed",
    note: "Applicants should have completed the preceding grade level.",
  },
  {
    year: "Middle School",
    age: "Previous grade completed",
    note: "Previous school records help us understand learning continuity.",
  },
];

const documentList = [
  "Completed student application form",
  "Student's birth certificate or passport copy",
  "Recent student photograph",
  "Previous school reports (if applicable)",
  "Transfer or leaving certificate (where applicable)",
  "Parent or guardian identification and contact details",
];

const admissionDates = [
  { date: "Now open", title: "Enquiry window", status: "Open" },
  { date: "15 Nov 2026", title: "Priority application review", status: "Upcoming" },
  { date: "Jan–Mar 2027", title: "Family interactions and assessments", status: "Upcoming" },
  { date: "Apr 2027", title: "Enrollment confirmations", status: "Upcoming" },
];

const faqs = [
  {
    question: "How do I begin the admission process?",
    answer:
      "Start with the enquiry form on this page or contact our admissions team. We will help you choose the right year group, arrange a visit, and explain the next steps.",
  },
  {
    question: "Can we visit the campus before applying?",
    answer:
      "Yes. Families are welcome to request a campus visit. Submit an enquiry and mention your preferred visit time so the team can coordinate with you.",
  },
  {
    question: "What happens during the interaction or assessment?",
    answer:
      "It is an age-appropriate conversation and learning activity. The aim is to understand your child's strengths and support needs, not to create unnecessary pressure.",
  },
  {
    question: "Are the admission dates final?",
    answer:
      "The dates shown are planning dates for the 2027–28 intake and are illustrative until confirmed by the school. Please contact admissions for the latest schedule.",
  },
  {
    question: "Does submitting this website form confirm admission?",
    answer:
      "No. This is a frontend enquiry form only. It displays a confirmation on this page and does not send or save your information. Admission is confirmed by the school after its official review.",
  },
];

const Admissions = () => {
  const pageRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const revealItems = pageRef.current?.querySelectorAll(".admission-reveal");
    if (!revealItems) return undefined;

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -28px 0px" },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--admission-delay", `${(index % 4) * 65}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <Navbar />
      <main className="admissions-page" ref={pageRef}>
        <section className="admissions-hero">
          <div className="admissions-hero-image" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=90"
              alt=""
              fetchPriority="high"
            />
          </div>
          <div className="admissions-hero-inner">
            <div className="admissions-hero-copy">
              <p className="admissions-kicker">
                <span aria-hidden="true">✳</span> Admissions at EAK
              </p>
              <h1>
                A bright beginning
                <span>starts right here.</span>
              </h1>
              <p>
                We make joining EAK a clear, welcoming journey — with guidance
                for your family at every step.
              </p>
              <div className="admissions-hero-actions">
                <a href="#enquiry-form" className="admissions-button">
                  Start an enquiry <span aria-hidden="true">↗</span>
                </a>
                <a href="#admission-process" className="admissions-text-link">
                  See how it works <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="admissions-hero-caption">
                <span className="admissions-caption-mark" aria-hidden="true">01</span>
                <span>
                  <strong>Every learner has a place to grow.</strong>
                  <small>Discover the EAK difference</small>
                </span>
              </div>
            </div>
          </div>
          <span className="admissions-hero-index" aria-hidden="true">EAK / 2027</span>
        </section>

        <section className="admission-process-section" id="admission-process">
          <div className="admission-section-heading admission-reveal">
            <p className="admissions-kicker">Your journey, made simple</p>
            <h2>
              Five thoughtful steps.
              <span>One exciting new chapter.</span>
            </h2>
            <p>
              Our admissions team is here to make every step clear and
              comfortable for your family.
            </p>
          </div>
          <div className="admission-steps">
            {admissionSteps.map((step, index) => (
              <article className="admission-step admission-reveal" key={step.number}>
                <div className="step-number-wrap">
                  <span className="step-number">{step.number}</span>
                  {index < admissionSteps.length - 1 && (
                    <span className="step-connector" aria-hidden="true" />
                  )}
                </div>
                <div className="step-copy">
                  <p className="step-overline">Step {step.number}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <small>{step.detail}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="admission-fit-section">
          <div className="admission-fit-image admission-reveal">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=85"
              alt="A young student enjoying a classroom activity"
              loading="lazy"
              decoding="async"
            />
            <div className="fit-image-note">
              <strong>Every child is unique.</strong>
              <span>We look beyond a checklist.</span>
            </div>
          </div>
          <div className="admission-fit-copy admission-reveal">
            <p className="admissions-kicker">Finding the right fit</p>
            <h2>
              A thoughtful start
              <span>for every learner.</span>
            </h2>
            <p>
              Placement is considered with care. We look at age, previous
              learning, readiness, and the support that will help each student
              settle in and thrive.
            </p>
            <div className="eligibility-list">
              {eligibility.map((item) => (
                <article className="eligibility-item" key={item.year}>
                  <span className="eligibility-icon" aria-hidden="true">✓</span>
                  <div>
                    <h3>{item.year}</h3>
                    <strong>{item.age}</strong>
                    <p>{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="eligibility-note">
              Exact age cut-offs and available year groups are confirmed by the
              admissions team for each intake.
            </p>
          </div>
        </section>

        <section className="admission-documents-section">
          <div className="documents-copy admission-reveal">
            <p className="admissions-kicker">A little preparation</p>
            <h2>
              Documents to have
              <span>ready when you apply.</span>
            </h2>
            <p>
              You can begin with an enquiry even if you do not have every
              document to hand. The admissions team will let you know what is
              needed for your child's year group.
            </p>
            <div className="documents-checklist">
              {documentList.map((document) => (
                <label className="document-check-item" key={document}>
                  <input type="checkbox" />
                  <span className="custom-check" aria-hidden="true">✓</span>
                  <span>{document}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="documents-photo admission-reveal">
            <img
              src="https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=1100&q=85"
              alt="Books and school supplies prepared for a new term"
              loading="lazy"
              decoding="async"
            />
            <div className="documents-photo-card">
              <span>Helpful reminder</span>
              <strong>Our team can guide you through the paperwork.</strong>
            </div>
          </div>
        </section>

        <section className="admission-dates-section">
          <div className="admission-dates-heading admission-reveal">
            <div>
              <p className="admissions-kicker">Plan ahead</p>
              <h2>
                Important dates
                <span>for the next intake.</span>
              </h2>
            </div>
            <p className="dates-disclaimer">
              Planning dates for 2027–28 intake. Dates are illustrative until
              confirmed by EAK International School.
            </p>
          </div>
          <div className="admission-timeline">
            {admissionDates.map((item, index) => (
              <article className="date-card admission-reveal" key={item.title}>
                <span className="date-index">0{index + 1}</span>
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <span className={`date-status ${index === 0 ? "is-open" : ""}`}>
                  <span aria-hidden="true" /> {item.status}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="admission-faq-section">
          <div className="faq-intro admission-reveal">
            <p className="admissions-kicker">Good to know</p>
            <h2>
              Questions families
              <span>often ask.</span>
            </h2>
            <p>
              Can't find your answer? Send us an enquiry and our team will be
              happy to help.
            </p>
            <Link to="/contact" className="faq-contact-link">
              Contact admissions <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item admission-reveal" key={faq.question}>
                <summary>
                  <span className="faq-question-number">0{index + 1}</span>
                  <span>{faq.question}</span>
                  <span className="faq-toggle" aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="admission-enquiry-section" id="enquiry-form">
          <div className="enquiry-image admission-reveal">
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1100&q=85"
              alt="Students welcoming a classmate at school"
              loading="lazy"
              decoding="async"
            />
            <div className="enquiry-image-overlay">
              <p>We would love to meet your family.</p>
              <span>Let's begin with a conversation.</span>
            </div>
          </div>
          <div className="enquiry-form-panel admission-reveal">
            <p className="admissions-kicker">Start a conversation</p>
            <h2>
              Tell us a little
              <span>about your family.</span>
            </h2>
            <p className="enquiry-intro">
              Leave your details and the year group you're interested in.
            </p>
            {submitted && (
              <div className="form-success" role="status">
                <strong>Thank you for your enquiry.</strong>
                <span>This demo form does not send or save information. Please contact EAK directly to continue.</span>
              </div>
            )}
            <form className="admission-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="guardian-name">Parent / guardian name</label>
                <input
                  id="guardian-name"
                  name="guardianName"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="guardian-email">Email address</label>
                  <input
                    id="guardian-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="guardian-phone">Phone number</label>
                  <input
                    id="guardian-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 555 000 0000"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="student-name">Student name</label>
                  <input
                    id="student-name"
                    name="studentName"
                    type="text"
                    placeholder="Student's full name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="year-group">Year group of interest</label>
                  <select id="year-group" name="yearGroup" defaultValue="" required>
                    <option value="" disabled>Select a year group</option>
                    <option>Early Years</option>
                    <option>Primary</option>
                    <option>Middle School</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="family-message">Anything you'd like us to know? <span>Optional</span></label>
                <textarea
                  id="family-message"
                  name="message"
                  rows="3"
                  placeholder="Preferred visit date, questions, or support needs"
                />
              </div>
              <button className="admissions-button form-submit" type="submit">
                Send enquiry <span aria-hidden="true">↗</span>
              </button>
              <small className="form-disclaimer">
                Frontend demo only — details are not transmitted or stored.
              </small>
            </form>
          </div>
        </section>

        <section className="admission-final-cta">
          <div className="admission-final-copy">
            <p className="admissions-kicker">Your next chapter</p>
            <h2>We’re here to help you take the first step.</h2>
            <p>Ask a question, plan a visit, or start an application enquiry today.</p>
          </div>
          <a href="#enquiry-form" className="admissions-button">
            Apply Now <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <footer className="admissions-footer">
        <span>© 2026 EAK International School</span>
        <Link to="/">Back to home <span aria-hidden="true">↑</span></Link>
      </footer>
    </>
  );
};

export default Admissions;
