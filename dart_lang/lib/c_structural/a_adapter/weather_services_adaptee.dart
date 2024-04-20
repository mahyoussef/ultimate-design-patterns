import 'package:dart_lang/c_structural/a_adapter/abstract_weather_services_adapter.dart';
import 'package:dart_lang/c_structural/a_adapter/legacy_weather_service.dart';
import 'package:dart_lang/c_structural/a_adapter/models.dart/temperature_data.dart';

class WeatherServiceAdaptee implements WeatherServicesAdapterInterface {
  final LegacyWeatherService legacyWeatherService;
  WeatherServiceAdaptee(this.legacyWeatherService);
  @override
  TemperatureData getTemperature(double longitude, double latitude) {
    print('Getting temperature from legacy weather service');
    String city = cityOf(longitude, latitude);
    String country = countryOf(longitude, latitude);
    String temperatureDataXML =
        legacyWeatherService.getTemperature(city, country);
    return convertXMLDataToJson(temperatureDataXML);
  }

  TemperatureData convertXMLDataToJson(String temperatureDataXML) {
    print('Converting XML data to JSON');
    return TemperatureData('Temperature Data in JSON Format');
  }

  String cityOf(double longitude, double latitude) {
    print('Extracting city name from $longitude and $latitude');
    return 'City Name';
  }

  String countryOf(double longitude, double latitude) {
    print('Extracting Country name from $longitude and $latitude');
    return 'Country Name';
  }
}
