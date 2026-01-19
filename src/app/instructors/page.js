import Link from 'next/link';
import instructors from '@/data/instructors.json';
import styles from './page.module.css';

export default function Instructors() {
  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1>Our Instructors</h1>
        <p>Mentors who guide you with grace and expertise.</p>
      </header>

      <div className={styles.grid}>
        {instructors.map((inst) => (
          <div key={inst.id} className={styles.card}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.content}>
              <h3>{inst.name}</h3>
              <p className={styles.role}>{inst.role}</p>
              <div className={styles.tags}>
                {inst.styles.map(style => (
                  <span key={style} className={styles.tag}>{style}</span>
                ))}
              </div>
              <p className={styles.bio}>{inst.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
