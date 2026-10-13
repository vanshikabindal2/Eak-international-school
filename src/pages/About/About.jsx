import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/logo.png";
import "./About.css";

const schoolStatistics = [
  { value: "20+", label: "Years of learning" },
  { value: "18", label: "Student clubs" },
  { value: "95%", label: "Family satisfaction" },
  { value: "12k+", label: "Community members" },
];

const campusImages = [
  {
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=85",
    alt: "Students working together in a bright classroom",
    title: "Learning together",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
    alt: "A teacher leading an engaging classroom lesson",
    title: "Inspired teaching",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85",
    alt: "A group sharing a happy moment together",
    title: "Friendships that grow",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85",
    alt: "Young learners exploring a hands-on science activity",
    title: "Curiosity in action",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=85",
    alt: "Colourful art materials ready for a creative lesson",
    title: "Creativity in every child",
  },
];

const schoolValues = [
  {
    number: "01",
    title: "Curiosity",
    description: "We encourage thoughtful questions, exploration, and a lifelong love of learning.",
  },
  {
    number: "02",
    title: "Kindness",
    description: "We lead with empathy, respect, and care for every member of our community.",
  },
  {
    number: "03",
    title: "Integrity",
    description: "We do what is right and take responsibility for our choices and actions.",
  },
  {
    number: "04",
    title: "Excellence",
    description: "We give our best, celebrate progress, and keep growing together.",
  },
];

const About = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const revealItems = pageRef.current?.querySelectorAll(".about-reveal");
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
      { threshold: 0.14, rootMargin: "0px 0px -30px 0px" },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--about-delay", `${(index % 4) * 70}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="about-page" ref={pageRef}>
        <section className="about-hero">
          <div className="about-hero-inner">
            <div className="about-hero-copy">
              <p className="about-kicker">
                <span aria-hidden="true">✳</span> Our story, our purpose
              </p>
              <h1>
                A school where every child can <span>become.</span>
              </h1>
              <p className="about-hero-description">
                EAK International School is a caring community built around
                meaningful learning, strong values, and the belief that every
                student has a bright future to shape.
              </p>
              <div className="about-hero-actions">
                <Link to="/admissions" className="about-button">
                  Begin your journey <span aria-hidden="true">↗</span>
                </Link>
                <a href="#our-story" className="about-scroll-link">
                  Discover EAK <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="about-hero-image about-reveal">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=90"
                alt="A welcoming school campus with bright learning spaces"
                fetchPriority="high"
                decoding="async"
              />
              <div className="about-hero-note">
                <span className="about-note-icon" aria-hidden="true">✦</span>
                <span>
                  <strong>Learning with purpose</strong>
                  <small>Growing together since 2004</small>
                </span>
              </div>
              <span className="about-image-decoration" aria-hidden="true">EAK</span>
            </div>
          </div>
          <div className="about-hero-bottom">
            <span>Learn with curiosity</span>
            <span aria-hidden="true">✦</span>
            <span>Lead with kindness</span>
            <span aria-hidden="true">✦</span>
            <span>Thrive together</span>
          </div>
        </section>

        <section className="about-story-section" id="our-story">
          <div className="about-story-image about-reveal">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1100&q=85"
              alt="Teacher supporting students as they learn"
              loading="lazy"
              decoding="async"
            />
            <div className="story-photo-inset">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80"
                alt="Student focused on a classroom activity"
                loading="lazy"
                decoding="async"
              />
              <span>Curiosity starts here</span>
            </div>
            <div className="story-image-label">
              <strong>Since 2004</strong>
              <span>Growing through learning</span>
            </div>
          </div>
          <div className="about-story-copy about-reveal">
            <p className="about-kicker">A little about us</p>
            <h2>
              Rooted in care.
              <span>Inspired by possibility.</span>
            </h2>
            <p>
              Our story began with a simple belief: education should help young
              people discover who they are and what they can contribute. Since
              2004, EAK has worked to bring that belief to life through
              thoughtful teaching and a strong sense of community.
            </p>
            <p>
              Today, we continue to create a place where students feel known,
              supported, and challenged to grow — in the classroom and beyond.
            </p>
            <div className="story-highlight">
              <span aria-hidden="true">“</span>
              <p>Every learner deserves the chance to find their own path to excellence.</p>
            </div>
          </div>
        </section>

        <section className="about-purpose-section">
          <div className="purpose-heading about-reveal">
            <p className="about-kicker">What guides us</p>
            <h2>
              A shared purpose.
              <span>A brighter future.</span>
            </h2>
            <p>
              Our vision and mission shape the choices we make every day — from
              how we teach to how we care for one another.
            </p>
          </div>
          <div className="purpose-grid">
            <article className="purpose-card vision-card about-reveal">
              <div className="purpose-card-image">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85"
                  alt="Young student learning with focus"
                  loading="lazy"
                  decoding="async"
                />
                <span>See every learner's potential</span>
              </div>
              <span className="purpose-icon" aria-hidden="true">◎</span>
              <p className="purpose-label">Our vision</p>
              <h3>Confident learners. Compassionate leaders.</h3>
              <p>
                To nurture curious, capable, and caring young people who are
                ready to make a positive difference in their world.
              </p>
              <span className="purpose-watermark" aria-hidden="true">01</span>
            </article>
            <article className="purpose-card mission-card about-reveal">
              <div className="purpose-card-image">
                <img
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=85"
                  alt="Students sharing a moment on campus"
                  loading="lazy"
                  decoding="async"
                />
                <span>Make belonging part of learning</span>
              </div>
              <span className="purpose-icon" aria-hidden="true">✳</span>
              <p className="purpose-label">Our mission</p>
              <h3>Make meaningful learning possible for every child.</h3>
              <p>
                To provide a supportive, engaging education that builds
                knowledge, character, creativity, and confidence.
              </p>
              <span className="purpose-watermark" aria-hidden="true">02</span>
            </article>
          </div>
        </section>

        <section className="about-values-section">
          <div className="values-photo about-reveal">
            <img
              src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&w=1200&q=85"
              alt="Students collaborating on a classroom project"
              loading="lazy"
              decoding="async"
            />
            <div className="values-photo-caption">
              <span>Our values</span>
              <strong>How we learn. How we live.</strong>
            </div>
          </div>
          <div className="values-copy">
            <p className="about-kicker">The EAK way</p>
            <h2>
              Values that shape
              <span>every school day.</span>
            </h2>
            <div className="values-list">
              {schoolValues.map((value) => (
                <article className="value-row about-reveal" key={value.number}>
                  <span className="value-number">{value.number}</span>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                  <span className="value-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-principal-section">
          <div className="principal-about-card about-reveal">
            <div className="principal-about-image">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85"
                alt="EAK International School principal"
                loading="lazy"
                decoding="async"
              />
              <span className="principal-image-stamp">A message from our principal</span>
            </div>
            <div className="principal-about-copy">
              <p className="about-kicker">Leadership with purpose</p>
              <span className="principal-quote-mark" aria-hidden="true">“</span>
              <h2>
                Every child deserves a confident start and a caring place to grow.
              </h2>
              <p>
                At EAK, we believe education is not just about marks; it is
                about shaping character, developing curiosity, and helping
                children find joy in learning.
              </p>
              <p>
                We are committed to creating a culture where every learner is
                seen, supported, and encouraged to reach their fullest potential.
              </p>
              <div className="principal-about-signature">
                <strong>Dr. Meher Ali</strong>
                <span>Principal, EAK International School</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-statistics-section">
          <div className="about-statistics-heading about-reveal">
            <p className="about-kicker">Our community in numbers</p>
            <h2>Many stories. <span>One community.</span></h2>
          </div>
          <div className="about-statistics-grid">
            {schoolStatistics.map((statistic) => (
              <article className="about-statistic about-reveal" key={statistic.label}>
                <strong>{statistic.value}</strong>
                <span>{statistic.label}</span>
              </article>
            ))}
          </div>
          <p className="statistics-note">
            Every number represents the people, progress, and shared memories
            that make our school community special.
          </p>
        </section>

        <section className="campus-overview-section">
          <div className="campus-heading about-reveal">
            <div>
              <p className="about-kicker">A place to learn and belong</p>
              <h2>
                Welcome to our
                <span>campus community.</span>
              </h2>
            </div>
            <p>
              From focused learning to shared moments with friends, our campus
              gives students room to explore their interests and feel at home.
            </p>
          </div>
          <div className="campus-gallery">
            {campusImages.map((image, index) => (
              <figure className={`campus-gallery-item campus-gallery-${index + 1} about-reveal`} key={image.title}>
                <img src={image.image} alt={image.alt} loading="lazy" decoding="async" />
                <figcaption>
                  <span>0{index + 1}</span>
                  <strong>{image.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="campus-bottom">
            <span>Come see what makes EAK feel like home.</span>
            <Link to="/contact">Plan a visit <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="about-cta-section">
          <div className="about-cta-orbit" aria-hidden="true" />
          <div className="about-cta-copy">
            <p className="about-kicker">Your story can start here</p>
            <h2>Let’s make room for <span>what’s possible.</span></h2>
            <p>
              Discover a school community that helps every learner feel
              supported, inspired, and ready for their next step.
            </p>
          </div>
          <Link to="/admissions" className="about-button">
            Explore admissions <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <footer className="about-footer">
        <div className="about-footer-main">
          <div className="about-footer-brand">
            <img src={logo} alt="" />
            <div>
              <strong>EAK International School</strong>
              <span>School of Excellence</span>
            </div>
          </div>
          <p>Where learning begins with wonder and grows into purpose.</p>
          <Link to="/" className="about-footer-home">Back to home <span aria-hidden="true">↑</span></Link>
        </div>
        <div className="about-footer-bottom">
          <span>© 2026 EAK International School</span>
          <span>Learn with curiosity · Lead with kindness · Thrive together</span>
        </div>
      </footer>
    </>
  );
};

export default About;
