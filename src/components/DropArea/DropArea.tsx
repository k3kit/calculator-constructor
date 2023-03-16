import React, { useRef } from 'react';
import styles from './drop-area.module.scss';
import { ReactComponent as DropIcon } from '../../assets/svg/drop.svg';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { constructorSlice } from '../../store/reducers/constructorSlice';
import { Item } from '../Item/Item';
export const DropArea = () => {
  const dropAreaRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const dropArea = useAppSelector((state) => state.constructorSlice.areas[1]);
  const { setCurrentItem, setCurrentItemPosition, deleteItem, pushDroppedItem } =
    constructorSlice.actions;
  const { currentItem, currentItemPosition } = useAppSelector((state) => state.constructorSlice);
  const isInDropArea = () => {
    for (let i = 0; i < dropArea.items.length; i++) {
      if (currentItem?.id === dropArea.items[i].id) return true;
    }
    return false;
  };
  const isEmpty = () => dropArea.items.length === 0;

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dropArea.items.length === 0) dropAreaRef.current?.classList.add(`${styles.active}`);
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    dropAreaRef.current?.classList.remove(`${styles.active}`);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dropAreaRef.current?.classList.remove(`${styles.active}`);
    if (isInDropArea()) dispatch(deleteItem(currentItem));
    dispatch(pushDroppedItem({ currentItem, currentItemPosition }));
  };

  return (
    <div
      onDragLeave={dragLeaveHandler}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      ref={dropAreaRef}
      className={styles.droparea}
    >
      {dropArea.items.length > 0 ? (
        dropArea.items?.map((it) => (
          <div className={styles.container} key={it.id}>
            <Item area={'droparea'} id={it.id} name={it.name} />
          </div>
        ))
      ) : (
        <div className={styles.wrapper}>
          {' '}
          <div className={styles.content}>
            <DropIcon />
            <p className={styles.heading}>Перетащите сюда</p>
            <p className={styles.subtitle}>любой элемент из&nbsp;левой панели</p>
          </div>
        </div>
      )}
    </div>
  );
};
