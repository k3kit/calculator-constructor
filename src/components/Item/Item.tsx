import React, { FC } from 'react';
import styles from './item.module.scss';
import { Display, Equal, Numbers, Operators } from '../Constructor/Blocks';
import { ItemType, constructorSlice } from '../../store/reducers/constructorSlice';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
interface ItemProps extends ItemType {
  area: string;
}
export const Item: FC<ItemProps> = ({ name, id, area }) => {
  const dispatch = useAppDispatch();
  const { setCurrentItem, setCurrentItemPosition, deleteItem } = constructorSlice.actions;
  const droparea = useAppSelector((state) => state.constructorSlice.areas[1]);
  const { currentItem, areas } = useAppSelector((state) => state.constructorSlice);
  const { value } = useAppSelector((state) => state.modeSlice);

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    dispatch(setCurrentItem({ id, name }));
  };

  const isInDropArea = () => {
    for (let i = 0; i < droparea.items.length; i++) {
      if (id === droparea.items[i].id) return true;
    }
    return false;
  };

  const isActive = () => (area === 'constructor' && !isInDropArea()) || area === 'droparea';

  const isDraggable = () => {
    if (name === 'display' && isInDropArea()) return false;
    if (!isActive()) return false;
    return true;
  };

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setCurrentItem({ id, name }));
    if (e.detail === 2 && value === false && isActive()) {
      dispatch(deleteItem(currentItem));
    }
  };

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
  };

  const dragLeavHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
  };

  const dragEnterHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('start');
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
    if (name === 'display') {
      dispatch(setCurrentItemPosition(1));
    } else {
      dispatch(
        setCurrentItemPosition(
          droparea.items.findIndex((el) => el.id === id && el.name === name) + 1
        )
      );
    }
  };
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
  return (
    <div
      style={{ opacity: isActive() ? '100%' : '50%' }}
      className={styles.wrapper}
      onDragStart={dragStartHandler}
      onDragLeave={dragLeavHandler}
      onDragEnd={dragEndHandler}
      onDragEnter={dragEnterHandler}
      onDrop={dropHandler}
      draggable={isDraggable()}
      onClick={clickHandler}
    >
      <div className={value ? styles.runtime : styles.constr}> {setContent(name)}</div>
    </div>
  );
};
