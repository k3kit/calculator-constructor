import React from 'react';
import styles from './constructor.module.scss';
import { Display } from './Blocks/Display/Display';

export const Constructor = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Display />
      </div>
      <div className={styles.container}></div>
      <div className={styles.container}></div>
      <div className={styles.container}></div>
    </div>
  );
};
