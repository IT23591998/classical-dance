import styles from './page.module.css';

export default function About() {
  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <header className={styles.pageHeader}>
        <h1>Our Lineage & Philosophy</h1>
        <p className={styles.subtitle}>Preserving tradition, inspiring the future.</p>
      </header>

      <section className={styles.sectionBlock}>
        <div className="text">
          <h3>The Lineage</h3>
          <p>
            Our studio traces its roots back to the temple courtyards of ancient India, where dance was a sacred offering.
            We honor the Guru-Shishya parampara (teacher-student tradition) while embracing the open-mindedness of the 21st century.
          </p>
        </div>
      </section>

      <section className={`${styles.sectionBlock} ${styles.altBg}`}>
        <div className="text">
          <h3>The Studio Experience</h3>
          <p>
            Stepping into Aurora is stepping into a sanctuary. We prioritize holistic well-being—mental focus, physical strength, and spiritual connection.
            Each class is a journey of self-discovery, discipline, and artistic expression.
          </p>
        </div>
      </section>
    </div>
  );
}
