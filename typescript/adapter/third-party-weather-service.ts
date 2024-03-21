export class ThirdPartyWeatherService {
  getTemperature(city: string, country: string): string {
    console.log("Fetching temperature data ...");
    return "Temperature Data returned in XML Format...";
  }
}
