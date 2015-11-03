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

  componentDidMount() {
    this.fetchWeather();
  }

  onServerResponse(result, error) {
    this.setState({
      weather: result,
      error:   error
    });
  }

  fetchWeather() {
    const { city } = this.state;
    const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},de&appid=${API_KEY}&units=metric`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then(weather => this.onServerResponse(weather))
      .catch(error => this.onServerResponse(null, error.message)
      );
  }

  render() {
    const { city, weather, error } = this.state;
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

      { weather ? <WeatherPanel weather={weather}/> : <div className='Red'>Error: {error}</div> }
    </div>;
  }
}

WeatherView.propTypes = {
  initialCity: React.PropTypes.string
};
WeatherView.defaultProps = {
  initialCity: 'Hamburg'
};