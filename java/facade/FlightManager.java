package facade;

public class FlightManager {

    public void bookFlight(String departure, String destination, String date) {
        System.out.println("Booking flight from: " + departure + " to: " + destination + " at date: " + date);
    }
}
