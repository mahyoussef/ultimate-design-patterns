import { LegacyWeatherService } from "./legacy-weather-service";
import { TemperatureData } from "./temperature-data";
import { WeatherServiceAdapter } from "./weather-service-adapter";

export class WeatherServiceAdaptee implements WeatherServiceAdapter {
  private readonly legacyWeatherService: LegacyWeatherService;

  constructor(legacyWeatherService: LegacyWeatherService) {
    this.legacyWeatherService = legacyWeatherService;
  }

  getTemperature(longitude: number, latitude: number): TemperatureData {
    const temperatureDataInXML = this.legacyWeatherService.getTemperature(
      this.getCityOf(longitude, latitude),
      this.getCountryOf(longitude, latitude)
    );
    return this.convertXMLDataToJson(temperatureDataInXML);
  }

  private convertXMLDataToJson(xmlData: string): TemperatureData {
    console.log("Converting...");
    return new TemperatureData("Converted Data from XML into JSON");
  }

  private getCityOf(longitude: number, latitude: number): string {
    console.log(
      `Extracting city of longitude: ${longitude} and latitude: ${latitude}`
    );
    return "City";
  }

  private getCountryOf(longitude: number, latitude: number): string {
    console.log(
      `Extracting country of longitude: ${longitude} and latitude: ${latitude}`
    );
    return "Country";
  }
}
