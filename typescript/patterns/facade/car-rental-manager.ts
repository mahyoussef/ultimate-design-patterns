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
