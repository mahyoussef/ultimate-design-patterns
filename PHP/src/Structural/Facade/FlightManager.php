<?php

namespace App\Structural\Facade;

class FlightManager
{    
    /** 
     * @param  string $departure
     * @param  string $destination
     * @param  string $date
     * @return void
     */
    public function bookFlight(string $departure, string $destination, string $date): void
    {
        echo ("Booking flight from: " . $departure . " to: " . $destination . " at date: " . $date);
    }
}
