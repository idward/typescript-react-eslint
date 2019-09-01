import React from 'react';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import Wow from './Wow';
import '../index.css';

interface IAppProps {
  message: string;
}

const a = [1, 3, 4];

const App = ({ message }: IAppProps) => {
  console.log('aaaaa');

  return (
    <div className="container">
      <h1 className="titleC">Hello11 {message}</h1>
      <Button type="primary">Test</Button>
      <Wow />
    </div>
  );
};

export default App;
