import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import SecondPage from './pages/second';
import ErrorPage from './pages/error';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/second' component={SecondPage} />
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    );
}
