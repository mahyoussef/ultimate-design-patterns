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
