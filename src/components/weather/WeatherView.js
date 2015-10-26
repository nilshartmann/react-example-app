import React from 'react';
import {Button} from '../CoreComponents';

const API_KEY = '444112d540b141913a9c1ee6d7f495fa';

export default class WeatherView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.initialCity
    };
  }

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather() {
    const { city } = this.state;
    const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},de&appid=${API_KEY}&units=metric`;
    fetch(fetchUrl)
      .then( response => response.json())
      .then( weather => this.setState({weather})
      );
  }

  renderWeather(weather) {
    if (!weather) {
      return null;
    }

    const currentWeather = weather.weather[0];
    return <div>
      <h1>Weather in {weather.name}</h1>
      <h2>{weather.main.temp} °C <img src={`http://openweathermap.org/img/w/${currentWeather.icon}.png`} /></h2>
      <p>{currentWeather.description}</p>
    </div>;
  }

  render() {
    const { city, weather } = this.state;
    return <div>
      <h1>Current Weather</h1>
      <input type='text'
             focus
             value={city}
             onChange={ (e) => this.setState({city: e.target.value})}
      />

      <Button label='Load'
              enabled={!!city && city.length > 0}
              onClickHandler={ () => this.fetchWeather() }
      />

      {this.renderWeather(weather)}

    </div>;
  }
}

WeatherView.propTypes = {
  initialCity: React.PropTypes.string
};
WeatherView.defaultProps = {
  initialCity: 'Hamburg'
};