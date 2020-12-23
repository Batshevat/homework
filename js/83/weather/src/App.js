import './App.css';
import React, { Component } from 'react';
import weatherDetails from './weatherDetails';

export default class App extends Component() {
  state = {};
  getWeather = async e => {

    try {
      const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${e.target.value}&units=imperial`);
      const weatherData = await resp.json();

      this.setState({
        weather: {
          location: weatherData.name,
          icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`),
        description: `${weatherData.main.temp} and ${weatherData.weather[0].description}`
    }
 })
        .catch(err) {
    console.error(err);
  }
}
}
render() {
  const weather = this.state.weather ? <weatherDetails weather={this.state.weather} /> : null;
  return (
    <div className="container">
      <div className="row d-flex flex-row-reverse">
        <form className="form-inline">
          <input className="form-control mb-2 mr-sm-2" id="zip" placeholder="Enter Zip For Weather" onBlur={this.getWeather} />
        </form>
      </div>
      <weatherDetails weather={this.state.weather} />
    </div>
  );
}
}


