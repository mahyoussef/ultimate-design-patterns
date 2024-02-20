package adapter;

public class WeatherServiceAdaptee implements WeatherServiceAdapter {

    private final LegacyWeatherService legacyWeatherService;

    public WeatherServiceAdaptee(LegacyWeatherService legacyWeatherService) {
        this.legacyWeatherService = legacyWeatherService;
    }

    public TemperatureDate getTemperature(double longitude, double latitude) {
        String temperatureDataInXML = legacyWeatherService.getTemperature(getCityOf(longitude, latitude),
                getCountryOf(longitude, latitude));
        return convertXMLDataToJson(temperatureDataInXML);
    }

    private TemperatureDate convertXMLDataToJson(String xmlData) {
        System.out.println("Converting...");
        return new TemperatureDate("Converted Data from XML into JSON");
    }

    private String getCityOf(double longitude, double latitude) {
        System.out.println("Extracting city of longitude: " + longitude + " and latitude: " + latitude);
        return "City";
    }

    private String getCountryOf(double longitude, double latitude) {
        System.out.println("Extracting country of longitude: " + longitude + " and latitude: " + latitude);
        return "Country";
    }
}
