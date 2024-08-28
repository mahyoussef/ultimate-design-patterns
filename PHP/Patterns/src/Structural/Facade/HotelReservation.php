<?php

namespace App\Structural\Facade;

class HotelReservation
{    
    /** 
     * @param  string $roomId
     * @param  string $checkInDate
     * @param  string $checkOutDate
     * @return void
     */
    public function reserveRoom(string $roomId, string $checkInDate, string $checkOutDate): void
    {
        echo ("Reserving the room: " . $roomId . " with checkInDate: " . $checkInDate
            . " and checkOutDate: " . $checkOutDate);
    }
}
