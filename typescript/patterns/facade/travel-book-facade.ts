class TravelBookFacade {
  private flightManager: FlightManager;
  private hotelReservationManager: HotelReservationManager;
  private carRentalManager: CarRentalManager;
  private paymentManager: PaymentManager;
  private paymentMethodFactory: PaymentMethodFactory;

  constructor() {
    this.flightManager = new FlightManager();
    this.hotelReservationManager = new HotelReservationManager();
    this.carRentalManager = new CarRentalManager();
    this.paymentManager = new PaymentManager();
    this.paymentMethodFactory = new PaymentMethodFactory();
  }

  bookTrip(trip: Trip): void {
    this.flightManager.bookFlight(
      trip.getDeparture(),
      trip.getDestination(),
      trip.getFlightDate(),
    );

    this.hotelReservationManager.bookHotel(
      trip.getRoomId(),
      trip.getCheckInDate(),
      trip.getCheckOutDate(),
    );

    this.carRentalManager.bookCarRental(
      trip.getCarRentalLocation(),
      trip.getCarRentalStartDate(),
      trip.getCarRentalsEndDate(),
    );

    const paymentMethod = this.paymentMethodFactory.createPaymentMethodOf(
      trip.getPaymentMethod(),
    );

    this.paymentManager.processPayment(trip.getAmount(), paymentMethod);
  }
}
