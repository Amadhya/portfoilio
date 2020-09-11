import React from 'react';

import './App.css';
import Error404 from 'error/error404';
import Portfolio from 'portfolio';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Portfolio} exact />
                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
