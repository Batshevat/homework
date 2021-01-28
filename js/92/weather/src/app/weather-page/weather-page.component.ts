import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Weather, WeatherServerProps } from '../shared/weather';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent {
  weather: Weather;
  constructor(private httpClient: HttpClient) {

  }
  getWeather(zip: string) {
    this.httpClient.get<WeatherServerProps>("weather url")
      .subscribe(weatherData => console.log(weatherData));

    this.weather = {
      place: weatherData.name,
      description: `${weatherData.main.temp} and ${weatherData.weather[].description}`,
      icon: imgURL
    }
  }
}
