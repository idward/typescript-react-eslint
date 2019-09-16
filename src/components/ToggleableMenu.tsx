import React, { SFC } from 'react';
import Toggleable from './Toggleable';

interface ToggleableMenuProps {
  title: string;
}

const ToggleableMenu: SFC<ToggleableMenuProps> = ({ title, children }) => {
  return (
    <Toggleable>
      {({ show, toggle }) => (
        <>
          <div onClick={toggle}>
            <h2>{title}</h2>
          </div>
          {show ? children : null}
        </>
      )}
    </Toggleable>
  );
};

export default ToggleableMenu;
