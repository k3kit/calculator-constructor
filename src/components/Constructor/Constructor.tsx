import React from 'react';
import styles from './constructor.module.scss';
import { Operators, Display, Numbers, Equal } from './Blocks/index';

export const Constructor = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Display />
      </div>
      <div className={styles.container}>
        <Operators />
      </div>
      <div className={styles.container}>
        <Numbers />
      </div>
      <div className={styles.container}>
        <Equal />
      </div>
    </div>
  );
};
