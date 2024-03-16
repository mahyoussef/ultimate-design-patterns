import { TemperatureDate } from "./temperature-date";

export interface WeatherServiceAdapter {
  getTemperature(longitude: number, latitude: number): TemperatureDate;
}
