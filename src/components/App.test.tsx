import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wow from './Wow';

Enzyme.configure({ adapter: new Adapter() });

it('shadow renders without crashing', () => {
  shallow(<Wow />);
});

import { render, unmountComponentAtNode } from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App message="Hello" />, div);
  unmountComponentAtNode(div);
});
