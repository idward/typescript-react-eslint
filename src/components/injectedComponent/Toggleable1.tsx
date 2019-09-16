import React, { MouseEvent, ComponentType, ReactNode } from 'react';

const initialState = { show: true };
const defaultProps = { props: {} as { [name: string]: any } };

const isFunction = (obj: any): boolean => {
  return typeof obj === 'function';
};

type ToggleableState = Readonly<typeof initialState>;
type ToggleableProps = Partial<{
  component: ComponentType<ToggleableComponentProps<any>>;
  render: RenderCallback;
  children: RenderCallback | ReactNode;
}> &
  DefaultProps;

type DefaultProps = typeof defaultProps;
type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;
export type ToggleableComponentProps<P extends object = object> = {
  show: ToggleableState['show'];
  toggle: Toggleable['toggle'];
} & P;

class Toggleable extends React.Component<ToggleableProps, ToggleableState> {
  static readonly defaultProps: ToggleableProps = defaultProps;
  readonly state: ToggleableState = initialState;

  render() {
    const {
      render,
      children,
      component: InjectedComponent,
      props,
    } = this.props;
    const renderProps = { show: this.state.show, toggle: this.toggle };

    if (InjectedComponent) {
      return (
        <InjectedComponent {...props} {...renderProps}>
          {children}
        </InjectedComponent>
      );
    }

    if (render) {
      return render(renderProps);
    }
    // children undefined

    return children && isFunction(children)
      ? (children as RenderCallback)(renderProps)
      : null;
  }

  toggle = (_event: MouseEvent<HTMLElement>) => this.setState(updateShow);
}

const updateShow = (prevState: ToggleableState) => ({ show: !prevState.show });

export default Toggleable;
