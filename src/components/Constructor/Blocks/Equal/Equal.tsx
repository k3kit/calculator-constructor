import React from 'react';
import styles from './equal.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { runtimeSlice } from '../../../../store/reducers/runtimeSlice';
import { calc } from '../../../../utils/calc';
export const Equal = () => {
  const dispatch = useAppDispatch();
  const { setMode, setResultFixed, setResult, setOperation, setDisplayValue, setNumber } =
    runtimeSlice.actions;
  const { result, number, opertation } = useAppSelector((state) => state.runtimeSlice);

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const tempResult = calc(result, number, opertation);
    dispatch(setResult(tempResult));
    dispatch(setDisplayValue(tempResult));
    dispatch(setResultFixed(false)); // Unfixing left value
    dispatch(setMode('total'));
  };

  return (
    <div className={styles.equal}>
      <button className={styles.button} onClick={clickHandler}>
        =
      </button>
    </div>
  );
};
