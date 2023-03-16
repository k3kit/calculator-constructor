import React from 'react';
import styles from './constructor.module.scss';
import { Operators, Display, Numbers, Equal } from './Blocks/index';
import { useAppSelector } from '../../hooks/redux';
import { constructorSlice } from '../../store/reducers/constructorSlice';
import { Item } from '../Item/Item';

export const Constructor = () => {
  const items = useAppSelector((state) => state.constructorSlice.areas[0]);
  console.log(items);

  return (
    <div className={styles.wrapper}>
      {items.items.map((it) => (
        <div className={styles.container} key={it.id}>
          <Item name={it.name} id={it.id} area="constructor" />
        </div>
      ))}
    </div>
  );
};
