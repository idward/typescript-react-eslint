import React, { SFC } from 'react';
import Toggleable, { ToggleableComponentProps } from './Toggleable1';

interface ToggleableMenuProps {
  title: string;
}

const ToggleableMenu: SFC<ToggleableMenuProps> = ({ title, children }) => {
  return (
    <Toggleable props={{title}} component={MenuItem}>
      {children}
    </Toggleable>
  );
};

const MenuItem: SFC<ToggleableComponentProps<any>> = ({
  title,
  show,
  toggle,
  children,
}) => {
  return (
    <>
      <div onClick={toggle}>
        <h1>{title}</h1>
      </div>
      {show ? children : null}
    </>
  );
};

export default ToggleableMenu;
