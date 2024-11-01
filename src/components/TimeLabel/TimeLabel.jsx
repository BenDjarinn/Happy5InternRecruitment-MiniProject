import React from 'react';
import styles from '../TimeLabel/TimeLabelStyle.module.css';

function TimeLabel({ quarter, month }) { 
  return (
    <div className={styles.timeLabel}>
      <p className={styles.quarter}>{quarter}</p>
      <p className={styles.month}>{month}</p>
    </div>
  );
}

export default TimeLabel;
