package facade;

public class Trip {
    private String flightDeparture;
    private String flightDestination;
    private String flightDate;
    private String roomId;
    private String checkInDate;
    private String checkOutDate;
    private String carRentalLocation;
    private String carRentalStartDate;
    private String carRentalEndDate;
    private String paymentMethod;
    private double amount;

    public String getFlightDeparture() {
        return flightDeparture;
    }

    public String getFlightDestination() {
        return flightDestination;
    }

    public String getFlightDate() {
        return flightDate;
    }

    public String getRoomId() {
        return roomId;
    }

    public String getCheckInDate() {
        return checkInDate;
    }

    public String getCheckOutDate() {
        return checkOutDate;
    }

    public String getCarRentalLocation() {
        return carRentalLocation;
    }

    public String getCarRentalStartDate() {
        return carRentalStartDate;
    }

    public String getCarRentalEndDate() {
        return carRentalEndDate;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public double getAmount() {
        return amount;
    }

    public void setFlightDeparture(String flightDeparture) {
        this.flightDeparture = flightDeparture;
    }

    public void setFlightDestination(String flightDestination) {
        this.flightDestination = flightDestination;
    }

    public void setFlightDate(String flightDate) {
        this.flightDate = flightDate;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public void setCheckInDate(String checkInDate) {
        this.checkInDate = checkInDate;
    }

    public void setCheckOutDate(String checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public void setCarRentalLocation(String carRentalLocation) {
        this.carRentalLocation = carRentalLocation;
    }

    public void setCarRentalStartDate(String carRentalStartDate) {
        this.carRentalStartDate = carRentalStartDate;
    }

    public void setCarRentalEndDate(String carRentalEndDate) {
        this.carRentalEndDate = carRentalEndDate;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
