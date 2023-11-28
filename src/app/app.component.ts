import { Component ,OnInit} from '@angular/core';
import { OpenWeatherData } from './models/weather.model';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Weather-App';
  cityName:string = "Cairo";
  weatherData?: OpenWeatherData
  constructor(private weatherService : WeatherService){}
  ngOnInit(): void {
    this.getWeatherData(this.cityName);

  }
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }
  private getWeatherData(cityName:string) {
    this.weatherService.getWheatherData(cityName).subscribe( {
      next: (res) => {
        console.log(this.weatherData = res);
      }
    })
  }
}
