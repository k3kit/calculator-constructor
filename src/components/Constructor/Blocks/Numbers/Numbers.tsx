import React from 'react';
import styles from './numbers.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { runtimeSlice } from '../../../../store/reducers/runtimeSlice';
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ','];

export const Numbers = () => {
  const dispatch = useAppDispatch();
  const { setMode, setResultFixed, setResult, setOperation, setDisplayValue, setNumber } =
    runtimeSlice.actions;
  const { result, number, opertation, mode, resultFixed, displayValue } = useAppSelector(
    (state) => state.runtimeSlice
  );
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const value = target.value;

    if (value === ',') {
      if (mode !== 'value') return false;
      if (number % 1 !== 0) return false;

      if (resultFixed) {
        dispatch(setNumber(number + '.'));
        dispatch(setDisplayValue(number + '.'));
      } else {
        dispatch(setResult(result + '.'));
        dispatch(setDisplayValue(result + '.'));
      }
      dispatch(setMode('point'));
      return false;
    }

    if (mode === 'point') {
      if (resultFixed) {
        dispatch(setNumber(number + value));
        dispatch(setDisplayValue(number + value));
      } else {
        dispatch(setResult(result + value));
        dispatch(setDisplayValue(result + value));
      }
      dispatch(setMode('value'));
    }

    if (mode === 'value') {
      if (resultFixed) {
        if (number === 0) {
          dispatch(setNumber(value));
          dispatch(setDisplayValue(value));
        } else {
          dispatch(setNumber(number + value));
          dispatch(setDisplayValue(number + value));
        }
      } else if (result === 0) {
        dispatch(setResult(value));
        dispatch(setDisplayValue(value));
      } else {
        dispatch(setResult(result + value));
        dispatch(setDisplayValue(result + value));
      }
    }
    if (mode === 'total') {
      if (resultFixed) {
        dispatch(setNumber(value));
      } else {
        dispatch(setResult(value));
      }
      dispatch(setDisplayValue(value));
      dispatch(setMode('value'));
    }
    if (mode === 'count') {
      dispatch(setNumber(value));
      dispatch(setDisplayValue(value));
      dispatch(setMode('value'));
    }
  };
  return (
    <div className={styles.numbers}>
      {numbers.map((number, id) => (
        <button
          onClick={handleClick}
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
