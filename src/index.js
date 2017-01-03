import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

render((
        <Router history={browserHistory}>
            <Route path="/" >
                <IndexRoute component={App}/>
                <Route path="p1" component={Page1}/>
                <Route path="p2" component={Page2}/>
                <Route path="p3" component={Page3}/>
                <Route path="p4" component={Page4}/>
                <Route path="p5" component={Page5}/>
            </Route>
        </Router>
    ),
    document.getElementById('root')
);