import { ThirdPartyWeatherService } from "./third-party-weather-service";

export class LegacyWeatherService {
  private readonly weatherApi: ThirdPartyWeatherService;

  constructor(weatherApi: ThirdPartyWeatherService) {
    this.weatherApi = weatherApi;
  }

  getTemperature(city: string, country: string): string {
    return this.weatherApi.getTemperature(city, country);
  }
}
