import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Timeless. Graceful. Disciplined.</h1>
          <p>Discover the ancient art of classical dance in a modern sanctuary.</p>
          <div className={styles.ctaGroup}>
            <Link href="/schedule" className="btn btn-primary">View Schedule</Link>
            <Link href="/about" className="btn btn-outline">Our Philosophy</Link>
          </div>
        </div>
      </section>

      <section className={`${styles.intro} container`}>
        <div className="content-block">
          <h2>Dance with Purpose</h2>
          <p>
            At Aurora, we believe that dance is more than movement—it is a conversation between the body and the soul.
            Our curriculum is rooted in tradition but designed for the contemporary student.
          </p>
        </div>
        <div className="image-block">
          {/* Placeholder for a hero image */}
          <div className={styles.placeholderImage}></div>
        </div>
      </section>
    </>
  );
}
