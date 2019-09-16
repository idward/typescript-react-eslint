import React, { SFC, MouseEvent } from 'react';
import { withDefaultProps } from './hoc/withDefaultProps';

// export interface IButtonProps {
//   onClick(): void;
// }

const defaultProps = { color: 'red' };
type DefaultProps = typeof defaultProps;
type IButtonProps = DefaultProps & {
  onClick(e: MouseEvent<HTMLElement>): void;
};

const Button: SFC<IButtonProps> = ({
  onClick: handleClick,
  color,
  children,
}) => {
  return (
    <button style={{ color }} onClick={handleClick}>
      {children}
    </button>
  );
};

// class Button extends React.Component<IButtonProps> {
//   render() {
//     const { onClick: handleClick, color, children } = this.props;

//     return (
//       <button style={{ color }} onClick={handleClick}>
//         {children}
//       </button>
//     );
//   }
// }

export default withDefaultProps<IButtonProps>(defaultProps, Button);
