package facade;

public class CarRental {

    public void rentCar(String location, String startDateTime, String endDateTime) {
        System.out.println("Renting car from: " + location + " with startDateTime: " + startDateTime
                + " and endDateTime: " + endDateTime);
    }
}
