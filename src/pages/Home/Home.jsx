import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const whyChooseUs = [
  {
    icon: "✦",
    title: "Holistic education",
    description:
      "A balanced approach where academics, creativity, and character development grow together.",
  },
  {
    icon: "◎",
    title: "Expert mentors",
    description:
      "Our teachers inspire curiosity, model kindness, and guide every learner with care.",
  },
  {
    icon: "✳",
    title: "Safe community",
    description:
      "Students thrive in a secure, welcoming environment built around belonging and trust.",
  },
  {
    icon: "✓",
    title: "Future-ready skills",
    description:
      "We nurture confidence, critical thinking, and communication for life beyond school.",
  },
];

const academicPrograms = [
  {
    number: "01",
    title: "Early Years",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    description:
      "Play-based learning that builds confidence, curiosity, and strong early foundations.",
  },
  {
    number: "02",
    title: "Primary Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
    description:
      "Concept-rich learning experiences that strengthen literacy, numeracy, and inquiry.",
  },
  {
    number: "03",
    title: "Middle School",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=85",
    description:
      "Project-based teaching and leadership opportunities that help students shine.",
  },
];

const facilities = [
  {
    title: "Smart classrooms",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Science and innovation labs",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Library and reading hub",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Sports and fitness arena",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffee607ba821?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Art and music studio",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "STEM learning spaces",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85",
  },
];

const achievements = [
  { value: "20+", label: "Years of excellence" },
  { value: "95%", label: "Student satisfaction" },
  { value: "18", label: "Academic clubs" },
  { value: "12k+", label: "Happy families" },
];

const newsItems = [
  {
    tag: "Campus life",
    title: "STEM week inspires innovation and creativity across every grade.",
    date: "April 22, 2026",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=85",
  },
  {
    tag: "Achievements",
    title: "Students celebrated for excellence in arts, sports, and academics.",
    date: "April 08, 2026",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=85",
  },
  {
    tag: "Community",
    title: "Parents and teachers joined a meaningful literacy and wellbeing drive.",
    date: "March 27, 2026",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=85",
  },
];

const testimonials = [
  {
    quote:
      "The warmth, discipline, and encouragement here helped our child grow in confidence and joy.",
    author: "Aisha Rahman",
    role: "Parent of Grade 5 student",
  },
  {
    quote:
      "EAK balances strong academics with creativity, values, and attention to every child's needs.",
    author: "Imran Hassan",
    role: "Parent of Grade 8 student",
  },
  {
    quote:
      "Our son came home excited to learn, and that love for learning has only grown over time.",
    author: "Sara Khan",
    role: "Parent of Grade 3 student",
  },
];

const Home = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll(
      ".home-page section:not(.hero-page), .about-media, .about-copy, .feature-card, .program-card, .facility-item, .principal-card, .achievement-card, .news-card, .testimonial-card",
    );

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
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    revealItems.forEach((item, index) => {
      item.classList.add("reveal");
      item.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="home-page">
        <section className="hero-page" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-mark" aria-hidden="true">
                  ✳
                </span>
                EAK International School
              </p>

              <h1 id="hero-title">
                A brighter future starts with a <span>curious mind.</span>
              </h1>

              <p className="hero-description">
                More than a place to learn, EAK is a place to discover strengths,
                nurture character, and build confidence for a life of purpose.
              </p>

              <div className="hero-actions">
                <Link to="/admissions" className="button button-primary">
                  Apply Now <span aria-hidden="true">↗</span>
                </Link>
                <a href="#about-school" className="text-link">
                  About School <span aria-hidden="true">↓</span>
                </a>
              </div>

              <div className="hero-promise">
                <span className="promise-mark" aria-hidden="true">
                  ✓
                </span>
                <p>
                  <strong>A place to belong.</strong> A space to become.
                </p>
              </div>
            </div>

            <div className="hero-visual" aria-label="School classroom image">
              <div className="hero-image-frame">
                <img
                  className="hero-image"
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85"
                  alt="Students learning together in a bright classroom"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              <div className="hero-image-caption">
                <span className="caption-icon" aria-hidden="true">
                  ✦
                </span>
                <span>
                  <strong>Learn with purpose</strong>
                  <small>Grow with confidence</small>
                </span>
              </div>

              <span className="hero-spark hero-spark-one" aria-hidden="true">
                ✳
              </span>
              <span className="hero-spark hero-spark-two" aria-hidden="true">
                ✦
              </span>
            </div>
          </div>
        </section>

        <section className="stats-bar" aria-label="School statistics">
          {achievements.map((item) => (
            <div className="stat-item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="about-school" className="about-section">
          <div className="about-media">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85"
              alt="Students and teacher in a classroom"
              loading="lazy"
              decoding="async"
            />
            <div className="about-badge">
              <strong>Since 2004</strong>
              <span>Building brighter futures</span>
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow eyebrow-gold">About School</p>
            <h2>
              Inspiring every learner to
              <span>think boldly and act kindly.</span>
            </h2>
            <p>
              EAK International School blends academic excellence with personal
              growth, helping children become confident, compassionate, and
              capable individuals.
            </p>
            <p>
              Through thoughtful teaching, meaningful experiences, and a warm
              school culture, we prepare students to lead with integrity and make
              a positive impact in the world around them.
            </p>

            <ul className="about-points">
              <li>Internationally aware, child-centered learning</li>
              <li>Strong focus on character, creativity, and resilience</li>
              <li>Supportive environments for every learner to thrive</li>
            </ul>

            <Link to="/about" className="button button-secondary">
              Learn more <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section id="why-us" className="feature-section">
          <div className="section-header">
            <p className="eyebrow eyebrow-gold">Why Choose Us</p>
            <h2>
              The right place for children to
              <span>grow with confidence.</span>
            </h2>
          </div>

          <div className="feature-grid">
            {whyChooseUs.map((item) => (
              <article className="feature-card" key={item.title}>
                <span className="feature-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="academics" className="program-section">
          <div className="program-intro">
            <p className="eyebrow eyebrow-gold">Academics</p>
            <h2>
              Learning designed to
              <span>unlock potential.</span>
            </h2>
            <p>
              We combine strong fundamentals with future-focused learning so
              students build both skill and self-belief.
            </p>
          </div>

          <div className="program-grid">
            {academicPrograms.map((program) => (
              <article className="program-card" key={program.number}>
                <div className="program-image">
                  <img src={program.image} alt="" loading="lazy" decoding="async" />
                  <span className="program-number">{program.number}</span>
                </div>
                <div className="program-content">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="facilities" className="facility-section">
          <div className="section-header align-left">
            <p className="eyebrow eyebrow-gold">Facilities</p>
            <h2>
              Spaces that inspire,
              <span>support, and energize.</span>
            </h2>
          </div>

          <div className="facility-grid">
            {facilities.map((facility) => (
              <article
                className="facility-item"
                key={facility.title}
                style={{ backgroundImage: `url("${facility.image}")` }}
              >
                <div className="facility-overlay">
                  <span className="facility-bullet" aria-hidden="true">
                    ✦
                  </span>
                  <h3>{facility.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="principal-section">
          <div className="principal-card">
            <div className="principal-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"
                alt="School principal smiling"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="principal-copy">
              <p className="eyebrow eyebrow-gold">Principal's Message</p>
              <h2>
                Every child deserves a confident start and a caring place to
                grow.
              </h2>
              <p>
                At EAK, we believe education is not just about marks; it is about
                shaping character, developing curiosity, and helping children find
                joy in learning.
              </p>
              <p>
                We are committed to creating a culture where every learner is seen,
                supported, and encouraged to reach their fullest potential.
              </p>
              <div className="principal-signature">
                <strong>Dr. Meher Ali</strong>
                <span>Principal</span>
              </div>
            </div>
          </div>
        </section>

        <section className="achievement-section">
          <div className="section-header">
            <p className="eyebrow eyebrow-gold">Achievements</p>
            <h2>
              Recognition that reflects
              <span>our values and effort.</span>
            </h2>
          </div>

          <div className="achievement-grid">
            <article className="achievement-card accent-card">
              <span>2026</span>
              <h3>Top school performance</h3>
              <p>Students achieved strong academic milestones across all levels.</p>
            </article>
            <article className="achievement-card">
              <span>2025</span>
              <h3>National arts finalist</h3>
              <p>Students excelled in creative competitions and youth leadership.</p>
            </article>
            <article className="achievement-card">
              <span>2024</span>
              <h3>Sports excellence award</h3>
              <p>Our teams earned recognition for teamwork, discipline, and spirit.</p>
            </article>
          </div>
        </section>

        <section className="news-section" id="events">
          <div className="section-header">
            <p className="eyebrow eyebrow-gold">News & Events</p>
            <h2>
              Moments that bring our
              <span>school community together.</span>
            </h2>
          </div>

          <div className="news-grid">
            {newsItems.map((item) => (
              <article className="news-card" key={item.title}>
                <div className="news-image">
                  <img src={item.image} alt="" loading="lazy" decoding="async" />
                  <span className="news-tag">{item.tag}</span>
                </div>
                <div className="news-content">
                  <time>{item.date}</time>
                  <h3>{item.title}</h3>
                  <a href="#events" aria-label={`Read more about ${item.title}`}>
                    Read more <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonial-section">
          <div className="section-header">
            <p className="eyebrow eyebrow-gold">Testimonials</p>
            <h2>
              Families trust us to help
              <span>their children shine.</span>
            </h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.author}>
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <p>{item.quote}</p>
                <div className="testimonial-author">
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="admissions-cta" id="admissions">
          <div>
            <p className="eyebrow eyebrow-gold">Admissions</p>
            <h2>Let’s make your child’s next chapter a bright one.</h2>
            <p>
              Discover a school where learners are encouraged to grow, lead, and
              belong.
            </p>
          </div>

          <Link to="/admissions" className="button button-primary">
            Apply Now <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <h3>EAK International School</h3>
            <p>Where learning begins with wonder and grows into purpose.</p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li>About us</li>
              <li>Academics</li>
              <li>Facilities</li>
              <li>Admissions</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>+1 (555) 209-8181</li>
              <li>info@eakinternational.edu</li>
              <li>24 Learner Avenue, City</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 EAK International School</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </>
  );
};

export default Home;
