import React from 'react';
import styles from './display.module.scss';
export const Display = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.result}>0</span>
      </div>
    </div>
  );
};
