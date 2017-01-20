import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Top from './top';
import State1 from './State1';
import Lifecycle1 from './Lifecycle1';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import State2 from './State2';
import Path2 from './Path2';
import Css1 from './Css1';
import Css2 from './Css2';
import Data1 from './Data1';

render((
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Top}/>
            <Route path="p1" component={State1}/>
            <Route path="p2" component={State2}/>
            <Route path="p3" component={Lifecycle1}/>
            <Route path="p4" component={Component1}/>
            <Route path="p5" component={Component2}/>
            <Route path="p6" component={Component3}/>
            <Route path="p7" component={Component4}/>
            <Route path="p8" component={Component5}/>
            <Route path="p9" component={Path2}/>
            <Route path="p10" component={Css1}/>
            <Route path="p12" component={Css2}/>
            <Route path="p13" component={Data1}/>
          </Route>
        </Router>
    ),
    document.getElementById('root')
);