import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Top from './top';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';

render((
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Top}/>
            <Route path="p1" component={Page1}/>
            <Route path="p2" component={Page2}/>
            <Route path="p3" component={Page3}/>
            <Route path="p4" component={Page4}/>
            <Route path="p5" component={Page5}/>
            <Route path="p7" component={Page7}/>
            <Route path="p8" component={Page8}/>
            <Route path="p9" component={Page9}/>
            <Route path="p10" component={Page10}/>
          </Route>
        </Router>
    ),
    document.getElementById('root')
);