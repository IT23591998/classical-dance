import ScheduleTable from '@/components/ScheduleTable';
import styles from './page.module.css';

export default function Schedule() {
    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <header className={styles.pageHeader}>
                <h1>Class Schedule</h1>
                <p>Find your rhythm. Join us on the floor.</p>
            </header>

            <ScheduleTable />
        </div>
    );
}
