import React from 'react';
import {Button} from '../CoreComponents';
import WeatherPanel from './WeatherPanel';

const API_KEY = '444112d540b141913a9c1ee6d7f495fa';

export default class WeatherView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.initialCity
    };
  }

  fetchWeather() {
    const { city } = this.state;
    const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},de&appid=${API_KEY}&units=metric`;
  }

  render() {

  }
}

WeatherView.propTypes = {
  initialCity: React.PropTypes.string
};
WeatherView.defaultProps = {
  initialCity: 'Hamburg'
};