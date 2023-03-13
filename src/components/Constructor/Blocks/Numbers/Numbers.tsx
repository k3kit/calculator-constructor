import React from 'react';
import styles from './numbers.module.scss';
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ','];

export const Numbers = () => {
  return (
    <div className={styles.numbers}>
      {numbers.map((number, id) => (
        <button
          key={id}
          value={number}
          className={`${styles.button} ${number === 0 ? styles.button__zero : ''} `}
        >
          {number}
        </button>
      ))}
    </div>
  );
};
