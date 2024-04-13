import 'package:dart_lang/structural/adapter/models.dart/temperature_data.dart';

abstract class WeatherServicesAdapterInterface {
  TemperatureData getTemperature(double longitude, double latitude);
}
