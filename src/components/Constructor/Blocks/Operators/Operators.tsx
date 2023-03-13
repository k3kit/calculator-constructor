import React from 'react';
import styles from './operators.module.scss';
const operators = [
  {
    id: 1,
    type: 'divide',
    value: '/',
  },
  {
    id: 2,
    type: 'multiply',
    value: 'x',
  },
  {
    id: 3,
    type: 'minus',
    value: '-',
  },
  {
    id: 4,
    type: 'plus',
    value: '+',
  },
];
export const Operators = () => {
  return (
    <div className={styles.operators}>
      {operators.map((operator) => (
        <button key={operator.id} value={operator.type} className={styles.button}>
          {operator.value}
        </button>
      ))}
    </div>
  );
};
