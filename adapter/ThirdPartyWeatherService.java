package adapter;

public class ThirdPartyWeatherService {

    public String getTemperature(String city, String country) {
        System.out.println("Fetching temperature data ...");
        return "Temperature Data returned in XML Format...";
    }
}
