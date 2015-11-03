import React from 'react';
import {NavigationBar} from '../components/CoreComponents';

export default function Application({history, children}) {
  // TODO
  const isChartExample = history.isActive('/chart');
  const applicationClassName = isChartExample ? 'ApplicationView ApplicationView-chartView' : 'ApplicationView';

  return <div>
    <NavigationBar items={[
        {to: '/password', label: 'Passwort'},
        {to: '/weather', label: 'Weather Report'},
        {to: '/chart', label: 'Chart Example'}
    ]}/>
    <div className={applicationClassName}>
      { children }
    </div>
  </div>;
}

Application.propTypes = {
  children: React.PropTypes.any,
  history:  React.PropTypes.any
};
