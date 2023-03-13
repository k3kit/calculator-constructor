import React, { FC } from 'react';
import { SwitchMode } from '../SwitchMode/SwitchMode';
import styles from './layout.module.scss';
interface Props {
  children: React.ReactNode;
}
export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <SwitchMode />
      </header>
      <main className={styles.container}>{children}</main>
    </div>
  );
};
