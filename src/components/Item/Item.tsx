import React, { FC } from 'react';
import styles from './item.module.scss';
import { Display, Equal, Numbers, Operators } from '../Constructor/Blocks';
import { ItemType } from '../../store/reducers/constructorReducer';
interface ItemProps extends ItemType {
  area: string;
}
export const Item: FC<ItemProps> = ({ name, id, area }) => {
    сщтые
  const setContent = (name: string) => {
    switch (name) {
      case 'display':
        return <Display />;
      case 'operators':
        return <Operators />;
      case 'numbers':
        return <Numbers />;
      case 'equal':
        return <Equal />;
      default:
        break;
    }
  };
  return <div className={styles.wrapper}
  >{setContent(name)}</div>;
};
