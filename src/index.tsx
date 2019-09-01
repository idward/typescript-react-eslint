import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

declare let module: any;

render(<App message="World" />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
