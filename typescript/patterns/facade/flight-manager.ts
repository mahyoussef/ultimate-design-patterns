class FlightManager {
  bookFlight(departure: string, destination: string, flightDate: string): void {
    console.log(
      `Booking flight from ${departure} to ${destination} on ${flightDate}`,
    );
  }
}
