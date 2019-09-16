import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import 'antd/lib/button/style/css';
import Loadable from 'react-loadable';
// import Wow from './Wow';

export interface IAppProps {
  message?: string;
}

const LoadableWow = Loadable({
  loader: () => import(/* webpackChunkName: "Wow", webpackPrefetch:true */ './Wow'),
  loading: () => <div>Loading</div>,
});

const a = [1, 3, 5];
console.log(a);

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName:"Home" */ './Home'),
  loading: () => <div>Loading</div>,
});

const App = ({ message }: IAppProps) => {
  console.log(message + '111');

  return (
    <div className="container">
      <Link to="/">Home</Link> |<Link to="/wow">Wow</Link>
      <Switch>
        <Route path="/" exact component={LoadableHome} />
        <Route path="/wow" component={LoadableWow} />
      </Switch>
      {/* <LoadableWow /> */}
      {/* <Wow /> */}
    </div>
  );
};

export default App;
