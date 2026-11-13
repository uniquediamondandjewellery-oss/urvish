import { useState, useEffect, useRef } from 'react';
import styles from './CountdownTimer.module.css';

function getTimeLeft(endsAt) {
  const diff = Math.max(0, endsAt - Date.now());
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { h, m, s, expired: diff === 0 };
}

export default function CountdownTimer({ endsAt, compact = false }) {
  const [time, setTime] = useState(() => getTimeLeft(endsAt));
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const t = getTimeLeft(endsAt);
      setTime(t);
      if (t.expired) clearInterval(intervalRef.current);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [endsAt]);

  if (time.expired) {
    return <span className={styles.expired}>Deal Ended</span>;
  }

  const pad = (n) => String(n).padStart(2, '0');

  if (compact) {
    return (
      <div className={styles.compactTimer}>
        <span className={styles.compactLabel}>⏱</span>
        <span className={styles.compactTime}>
          {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
        </span>
        <span className={styles.compactLeft}>left</span>
      </div>
    );
  }

  return (
    <div className={styles.timer} role="timer" aria-label={`Deal ends in ${time.h} hours ${time.m} minutes`}>
      <span className={styles.timerLabel}>⚡ Flash Deal Ends In:</span>
      <div className={styles.digits}>
        <div className={styles.digitBlock}>
          <span className={styles.digit}>{pad(time.h)}</span>
          <span className={styles.unit}>Hrs</span>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.digitBlock}>
          <span className={styles.digit}>{pad(time.m)}</span>
          <span className={styles.unit}>Mins</span>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.digitBlock}>
          <span className={styles.digit}>{pad(time.s)}</span>
          <span className={styles.unit}>Secs</span>
        </div>
      </div>
    </div>
  );
}
