import React from 'react';
import ButtonWithDefaultProps from './Button';

const initialState = {
  counter: 0,
};

export type IButtonCounterState = Readonly<typeof initialState>;

const incrementClicksCount = (prevState: IButtonCounterState) => {
  return { counter: prevState.counter + 1 };
};

const decrementClicksCount = (prevState: IButtonCounterState) => {
  return { counter: prevState.counter - 1 };
};

class ButtonCounter extends React.Component<object, IButtonCounterState> {
  readonly state = initialState;

  handleIncrement = () => {
    this.setState(incrementClicksCount);
  };
  handleDecrement = () => {
    this.setState(decrementClicksCount);
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <ButtonWithDefaultProps onClick={this.handleIncrement}>Increment</ButtonWithDefaultProps>
        <ButtonWithDefaultProps onClick={this.handleDecrement}>Decrement</ButtonWithDefaultProps>
        You have clicked me {counter}
      </>
    );
  }
}

export default ButtonCounter;
