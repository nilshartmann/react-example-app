import React from 'react';

import PasswordView from './password/PasswordView';
import WeatherView from './weather/WeatherView';

function Navigation({activeViewId, onClickHandler, items}) {
  return <ul className='NavigationBar'>
      {items.map( (item) => <li key={item.viewId}
                             onClick={() => onClickHandler(item.viewId)}
                             className={item.viewId === activeViewId ? 'NavigationBar-Item NavigationBar-Item-Active' : 'NavigationBar-Item'}>{item.label}</li>)}
 </ul>;
}

export default class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentViewId: 'passwordView'
    };
  }

  onViewSelected(currentViewId) {
    this.setState({currentViewId});
  }

  renderApplicationView(currentViewId) {
    if (!currentViewId) {
      return null;
    }

    switch (currentViewId) {
    case 'passwordView':
      return <PasswordView />;
    case 'weatherView':
      return <WeatherView />;
    default:
    }

    return <p>Invalid View Id {currentViewId}</p>;
  }


  render() {
    const { currentViewId } = this.state;
    return <div>
      <Navigation
        activeViewId={currentViewId}
        onClickHandler={ (selectedViewId) => this.onViewSelected(selectedViewId) }
        items={[
        {label: 'Password Form', viewId: 'passwordView' },
        {label: 'Weather Report', viewId: 'weatherView' },
        {label: 'Chart Example', viewId: 'chartView' }
        ]}
      />

      <div className='ApplicationView'>
        { this.renderApplicationView(currentViewId) }
      </div>
    </div>;
  }
}