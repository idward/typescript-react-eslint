import React from 'react';
import ButtonCounter from './ButtonCounter';
import ToggleableMenu from './ToggleableMenu';

const Wow = () => {
  return (
    <div>
      <h2>Wow</h2>
      <ButtonCounter />
      <hr />
      <ToggleableMenu title="First Menu">Some content</ToggleableMenu>
      <ToggleableMenu title="Second Menu">Another content</ToggleableMenu>
      <ToggleableMenu title="Third Menu">More content</ToggleableMenu>
    </div>
  );
};

export default Wow;
