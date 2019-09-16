import React, { MouseEvent } from 'react';

const initialState = { show: true };
type ToggleableState = Readonly<typeof initialState>;
type ToggleableProps = Partial<{
  render: RenderCallback;
  children: RenderCallback;
}>;

const isFunction = (obj: any): boolean => {
  return typeof obj === 'function';
};

type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;
export type ToggleableComponentProps = {
  show: ToggleableState['show'];
  toggle: Toggleable['toggle'];
};

class Toggleable extends React.Component<ToggleableProps, ToggleableState> {
  readonly state: ToggleableState = initialState;

  render() {
    const { render, children } = this.props;
    const renderProps = { show: this.state.show, toggle: this.toggle };

    if (render) {
      return render(renderProps);
    }
    // children undefined

    return children && isFunction(children) ? children(renderProps) : null;
  }

  toggle = (_event: MouseEvent<HTMLElement>) => this.setState(updateShow);
}

const updateShow = (prevState: ToggleableState) => ({ show: !prevState.show });

export default Toggleable;
