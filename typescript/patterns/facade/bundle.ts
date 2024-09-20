class Trip {
  // flight
  private departure: string = "";
  private destination: string = "";
  private flightDate: string = "";

  // hotel
  private roomId: string = "";
  private checkInDate: string = "";
  private checkOutDate: string = "";

  // car
  private carRentalLocation: string = "";
  private carRentalStartDate: string = "";
  private carRentalsEndDate: string = "";

  // payment
  private amount: number = 0;
  private paymentMethod: string = "";

  getDeparture(): string {
    return this.departure;
  }

  setDeparture(departure: string): void {
    this.departure = departure;
  }

  getDestination(): string {
    return this.destination;
  }

  setDestination(destination: string): void {
    this.destination = destination;
  }

  getFlightDate(): string {
    return this.flightDate;
  }

  setFlightDate(flightDate: string): void {
    this.flightDate = flightDate;
  }

  getRoomId(): string {
    return this.roomId;
  }

  setRoomId(roomId: string): void {
    this.roomId = roomId;
  }

  getCheckInDate(): string {
    return this.checkInDate;
  }

  setCheckInDate(checkInDate: string): void {
    this.checkInDate = checkInDate;
  }

  getCheckOutDate(): string {
    return this.checkOutDate;
  }

  setCheckOutDate(checkOutDate: string): void {
    this.checkOutDate = checkOutDate;
  }

  getCarRentalLocation(): string {
    return this.carRentalLocation;
  }

  setCarRentalLocation(carRentalLocation: string): void {
    this.carRentalLocation = carRentalLocation;
  }

  getCarRentalStartDate(): string {
    return this.carRentalStartDate;
  }

  setCarRentalStartDate(carRentalStartDate: string): void {
    this.carRentalStartDate = carRentalStartDate;
  }

  getCarRentalsEndDate(): string {
    return this.carRentalsEndDate;
  }

  setCarRentalsEndDate(carRentalsEndDate: string): void {
    this.carRentalsEndDate = carRentalsEndDate;
  }

  getAmount(): number {
    return this.amount;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }

  getPaymentMethod(): string {
    return this.paymentMethod;
  }

  setPaymentMethod(paymentMethod: string): void {
    this.paymentMethod = paymentMethod;
  }
}

// ##################################

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

// ##################################

class FlightManager {
  bookFlight(departure: string, destination: string, flightDate: string): void {
    console.log(
      `Booking flight from ${departure} to ${destination} on ${flightDate}`,
    );
  }
}

class HotelReservationManager {
  bookHotel(roomId: string, checkInDate: string, checkOutDate: string): void {
    console.log(
      `Booking hotel with room id: ${roomId} from ${checkInDate} to ${checkOutDate}`,
    );
  }
}

class CarRentalManager {
  bookCarRental(
    carRentalLocation: string,
    carRentalStartDate: string,
    carRentalsEndDate: string,
  ): void {
    console.log(
      `Booking car rental with location: ${carRentalLocation} from ${carRentalStartDate} to ${carRentalsEndDate}`,
    );
  }
}

class PaymentManager {
  processPayment(amount: number, paymentMethod: PaymentMethod): void {
    console.log(
      `Processing the overall payment with amount: ${amount} using ${paymentMethod.getType()}`,
    );
  }
}

// ##################################

enum EnumPaymentMethod {
  VISA_CARD = "VISA_CARD",
  MASTER_CARD = "MASTER_CARD",
  PAYPAL = "PAYPAL",
}

interface PaymentMethod {
  getType(): string;
}

class PaymentMethodFactory {
  createPaymentMethodOf(paymentMethod: string) {
    if (paymentMethod.toUpperCase() === EnumPaymentMethod.VISA_CARD) {
      return new VisaCard();
    }
    if (paymentMethod.toUpperCase() === EnumPaymentMethod.MASTER_CARD) {
      return new MasterCard();
    }
    if (paymentMethod.toUpperCase() === EnumPaymentMethod.PAYPAL) {
      return new PayPal();
    }
    throw new Error("Unsupported payment method");
  }
}

class VisaCard implements PaymentMethod {
  getType(): string {
    return "visa_card";
  }
}

class MasterCard implements PaymentMethod {
  getType(): string {
    return "master_card";
  }
}

class PayPal implements PaymentMethod {
  getType(): string {
    return "paypal";
  }
}

// Example usage
const travelBookFacade = new TravelBookFacade();

const trip = new Trip();
trip.setDeparture("New York");
trip.setDestination("London");
trip.setFlightDate("2022-01-01");

trip.setRoomId("123456");
trip.setCheckInDate("2022-01-01");
trip.setCheckOutDate("2022-01-02");

trip.setCarRentalLocation("London");
trip.setCarRentalStartDate("2022-01-01");
trip.setCarRentalsEndDate("2022-01-02");

trip.setAmount(1000);
trip.setPaymentMethod("VISA_CARD");

travelBookFacade.bookTrip(trip);
