import 'package:dart_lang/structural/adapter/models.dart/temperature_data.dart';
import 'package:dart_lang/structural/adapter/third_party_service.dart';

class LegacyWeatherService {
  ThirdPArtyServices thirdPArtyServices;
  LegacyWeatherService(ThirdPArtyServices thirdPartyServices)
      : this.thirdPArtyServices = thirdPartyServices;
  String getTemperature(String city, String country) {
    print('Getting temperature from legacy weather service');
    return thirdPArtyServices.getTemperature(city, country);
  }
}
