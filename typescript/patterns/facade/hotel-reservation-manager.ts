class HotelReservationManager {
  bookHotel(roomId: string, checkInDate: string, checkOutDate: string): void {
    console.log(
      `Booking hotel with room id: ${roomId} from ${checkInDate} to ${checkOutDate}`,
    );
  }
}
