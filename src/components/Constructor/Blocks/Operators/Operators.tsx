import React from 'react';
import styles from './operators.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { runtimeSlice } from '../../../../store/reducers/runtimeSlice';
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
  const dispatch = useAppDispatch();

  const { setMode, setResultFixed, setResult, setOperation, setDisplayValue, setNumber } =
    runtimeSlice.actions;
  const { result, mode } = useAppSelector((state) => state.runtimeSlice);
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const operation = target.value;

    // If total displayed -> use total as currentResult (left value)
    if (mode === 'total') {
      dispatch(setResult(result));
      dispatch(setNumber(0));
      dispatch(setDisplayValue(result));
    }
    dispatch(setMode('count'));
    dispatch(setResultFixed(true));
    dispatch(setOperation(operation));
  };

  return (
    <div className={styles.operators}>
      {operators.map((operator) => (
        <button
          key={operator.id}
          value={operator.type}
          className={styles.button}
          onClick={clickHandler}
        >
          {operator.value}
        </button>
      ))}
    </div>
  );
};
