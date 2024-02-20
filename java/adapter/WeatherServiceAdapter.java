package adapter;

public interface WeatherServiceAdapter {

    TemperatureDate getTemperature(double longitude, double latitude);
}
