package facade;

public class HotelReservation {

    public void reserveRoom(String roomId, String checkInDate, String checkOutDate) {
        System.out.println("Reserving the room: " + roomId + " with checkInDate: " + checkInDate
                + " and checkOutDate: " + checkOutDate);
    }
}
