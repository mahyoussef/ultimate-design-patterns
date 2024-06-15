<?php

namespace App\Structural\Facade;

class CarRental
{
    /**
     * rentCar
     *
     * @param  string $location
     * @param  string $startDateTime
     * @param  string $endDateTime
     * @return void
     */
    public function rentCar(string $location, string $startDateTime, string $endDateTime): void
    {
        echo ("Renting car from: " . $location . " with startDateTime: " . $startDateTime
            . " and endDateTime: " . $endDateTime);
    }
}
