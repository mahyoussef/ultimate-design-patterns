import { LegacyWeatherService } from "./legacy-weather-service";
import { ThirdPartyWeatherService } from "./third-party-weather-service";
import { WeatherServiceAdaptee } from "./weather-service-adaptee";

const thirdPartyWeatherService = new ThirdPartyWeatherService();
const legacyWeatherService = new LegacyWeatherService(thirdPartyWeatherService);
console.log(legacyWeatherService.getTemperature("London", "UK"));

const weatherServiceAdaptee = new WeatherServiceAdaptee(legacyWeatherService);
console.log(weatherServiceAdaptee.getTemperature(0, 0));
