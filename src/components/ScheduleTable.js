import scheduleData from '@/data/schedule.json';
import styles from './ScheduleTable.module.css';

export default function ScheduleTable() {
  return (
    <div className={styles.scheduleContainer}>
      {scheduleData.map((dayItem, index) => (
        <div key={index} className="day-block">
          <h3 className={styles.dayTitle}>{dayItem.day}</h3>
          <div className={styles.classGrid}>
            {dayItem.classes.map((cls, idx) => (
              <div key={idx} className={styles.classCard}>
                <div className={styles.time}>{cls.time}</div>
                <div className={styles.details}>
                  <h4 className={styles.detailsTitle}>{cls.style}</h4>
                  <span className={styles.level}>{cls.level}</span>
                  <span className={styles.instructor}>with {cls.instructor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
