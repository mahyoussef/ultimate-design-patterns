import 'package:Strategy_design/structural/adapter/models.dart/temperature_data.dart';

abstract class WeatherServicesAdapterInterface {
  TemperatureData getTemperature(double longitude, double latitude);
}
