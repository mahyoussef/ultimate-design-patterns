import { TemperatureData } from "./temperature-data";

export interface WeatherServiceAdapter {
  getTemperature(longitude: number, latitude: number): TemperatureData;
}
