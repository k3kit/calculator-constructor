import React, { useState } from 'react';
import styles from './switch.module.scss';
import { ReactComponent as EyeIcon } from '../../assets/svg/eye.svg';
import { ReactComponent as SelectIcon } from '../../assets/svg/selector.svg';
import { modeSLice } from '../../store/reducers/modeSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export const SwitchMode = () => {
  const dispatch = useAppDispatch();
  const { setMode } = modeSLice.actions;
  const { value } = useAppSelector((state) => state.modeSlice);
  const switchButton = (value: boolean) => {
    dispatch(setMode(value));
  };
  const eye = <EyeIcon color={`${value ? '#5D5FEF' : '#4D5562'}`} />;
  const select = <SelectIcon color={`${value ? '#4D5562' : '#5D5FEF'}`} />;
  return (
    <div className={styles.button__group}>
      <button
        className={`${styles.button} ${value ? styles.button_active : ''}`}
        onClick={() => switchButton(true)}
      >
        {eye}
        <span className={styles.text}>Runtime</span>
      </button>

      <button
        className={`${styles.button} ${!value ? styles.button_active : ''}`}
        onClick={() => switchButton(false)}
      >
        {select} <span className={styles.text}>Constructor</span>
      </button>
    </div>
  );
};
// className={active ? styles.button : styles.button_active}
// `${value ? '#4D5562' : '#5D5FEF'}`
