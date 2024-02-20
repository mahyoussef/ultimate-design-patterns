package adapter;

public class LegacyWeatherService {

    private final ThirdPartyWeatherService weatherApi;

    public LegacyWeatherService(ThirdPartyWeatherService weatherApi) {
        this.weatherApi = weatherApi;
    }

    public String getTemperature(String city, String country) {
        return weatherApi.getTemperature(city, country);
    }

}
