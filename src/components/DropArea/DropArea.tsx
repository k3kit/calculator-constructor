import React from 'react';
import styles from './drop-area.module.scss';
import { ReactComponent as DropIcon } from '../../assets/svg/drop.svg';
export const DropArea = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <DropIcon />
        <p className={styles.heading}>Перетащите сюда</p>
        <p className={styles.subtitle}>любой элемент из&nbsp;левой панели</p>
      </div>
    </div>
  );
};
