import React, { FC } from 'react';
import { SwitchMode } from '../SwitchMode/SwitchMode';
interface Props {
  children: React.ReactNode;
}
export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <SwitchMode />
      {children}
    </div>
  );
};
