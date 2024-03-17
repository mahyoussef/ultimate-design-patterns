class LegacyWeatherService {
  private readonly weatherApi: ThirdPartyWeatherService;

  constructor(weatherApi: ThirdPartyWeatherService) {
    this.weatherApi = weatherApi;
  }

  getTemperature(city: string, country: string): string {
    return this.weatherApi.getTemperature(city, country);
  }
}

class ThirdPartyWeatherService {
  getTemperature(city: string, country: string): string {
    console.log("Fetching temperature data ...");
    return "Temperature Data returned in XML Format...";
  }
}

class WeatherServiceAdaptee implements WeatherServiceAdapter {
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

interface WeatherServiceAdapter {
  getTemperature(longitude: number, latitude: number): TemperatureData;
}

class TemperatureData {
  private readonly temperatureData: string;

  constructor(temperatureData: string) {
    this.temperatureData = temperatureData;
  }

  getTemperatureData(): string {
    return this.temperatureData;
  }
}

const thirdPartyWeatherService = new ThirdPartyWeatherService();
const legacyWeatherService = new LegacyWeatherService(thirdPartyWeatherService);
console.log(legacyWeatherService.getTemperature("London", "UK"));

const weatherServiceAdaptee = new WeatherServiceAdaptee(legacyWeatherService);
console.log(weatherServiceAdaptee.getTemperature(0, 0));
