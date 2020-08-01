import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NewVideo from './pages/NewVideo';
import NewCategory from './pages/NewCategory';

import './global.css';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cadastro/video" component={NewVideo} />
    <Route path="/cadastro/categoria" component={NewCategory} />

    <Route component={NotFound} />
  </Switch>
  </BrowserRouter >,
  document.getElementById('root')
);
