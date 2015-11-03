import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect } from 'react-router';

import createHashHistory from 'history/lib/createHashHistory';

//import PasswordApp from './components/password/PasswordView';
//import WeatherView from './components/weather/WeatherView';
import Application from './components/Application';

import PasswordView from './components/password/PasswordView';
import WeatherView from './components/weather/WeatherView';
import ChartView from './components/chart/ChartView';

ReactDOM.render((
  <Router history={createHashHistory({queryKey: false})}>
    <Redirect from='/' to='/password'/>
    <Route path='/' component={Application}>
      <Route path='password' component={PasswordView}/>
      <Route path='weather' component={WeatherView}/>
      <Route path='chart' component={ChartView}/>
    </Route>
  </Router>
), document.getElementById('mount'));


