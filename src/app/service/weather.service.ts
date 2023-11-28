import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OpenWeatherData } from '../models/weather.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWheatherData(cityName: string): Observable<OpenWeatherData>{
    return this.http.get<OpenWeatherData>(environment.weatherApiBaseUrl, {
      // headers: new HttpHeaders()
      //   .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIHostHeaderValue)
      //   .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('appid', environment.API_KEY)
      .set('units', 'metric'),    
    }

    );
    }
}
