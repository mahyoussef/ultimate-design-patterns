import 'package:dart_lang/c_structural/a_adapter/models.dart/temperature_data.dart';

abstract class WeatherServicesAdapterInterface {
  TemperatureData getTemperature(double longitude, double latitude);
}
