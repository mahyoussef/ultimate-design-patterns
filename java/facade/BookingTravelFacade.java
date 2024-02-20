package facade;

public class BookingTravelFacade {

    private final FlightManager flightManager;
    private final HotelReservation hotelReservation;
    private final CarRental carRental;
    private final PaymentProcessor paymentProcessor;
    private final PaymentMethodFactory paymentMethodFactory;

    public BookingTravelFacade() {
        this.flightManager = new FlightManager();
        this.hotelReservation = new HotelReservation();
        this.carRental = new CarRental();
        this.paymentProcessor = new PaymentProcessor();
        this.paymentMethodFactory = new PaymentMethodFactory();
    }

    public void bookTrip(Trip trip) {
        flightManager.bookFlight(trip.getFlightDeparture(), trip.getFlightDestination(), trip.getFlightDate());
        hotelReservation.reserveRoom(trip.getRoomId(), trip.getCheckInDate(), trip.getCheckOutDate());
        carRental.rentCar(trip.getCarRentalLocation(), trip.getCarRentalStartDate(), trip.getCarRentalEndDate());
        PaymentMethod paymentMethod = paymentMethodFactory.createPaymentMethodOf(trip.getPaymentMethod());
        paymentProcessor.processPayment(trip.getAmount(), paymentMethod);
    }
}
