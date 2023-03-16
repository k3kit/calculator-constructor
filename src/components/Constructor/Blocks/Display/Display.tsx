import React from 'react';
import styles from './display.module.scss';
import { useAppSelector } from '../../../../hooks/redux';
export const Display = () => {
  const { displayValue } = useAppSelector((state) => state.runtimeSlice);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.result}>{displayValue}</span>
      </div>
    </div>
  );
};
