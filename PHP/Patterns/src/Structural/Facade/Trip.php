<?php

namespace App\Structural\Facade;

class Trip
{
    private string $flightDeparture;
    private string $flightDestination;
    private string $flightDate;
    private string $roomId;
    private string $checkInDate;
    private string $checkOutDate;
    private string $carRentalLocation;
    private string $carRentalStartDate;
    private string $carRentalEndDate;
    private string $paymentMethod;
    private float $amount;

    /**
     * @return string
     */
    public function getFlightDeparture(): string
    {
        return $this->flightDeparture;
    }

    /**
     * @return string
     */
    public function getFlightDestination(): string
    {
        return $this->flightDestination;
    }

    /**
     * @return string
     */
    public function getFlightDate(): string
    {
        return $this->flightDate;
    }

    /**
     * @return string
     */
    public function getRoomId(): string
    {
        return $this->roomId;
    }

    /**
     * @return string
     */
    public function getCheckInDate(): string
    {
        return $this->checkInDate;
    }

    /**
     * @return string
     */
    public function getCheckOutDate(): string
    {
        return $this->checkOutDate;
    }

    /**
     * @return string
     */
    public function getCarRentalLocation(): string
    {
        return $this->carRentalLocation;
    }

    /**
     * @return string
     */
    public function getCarRentalStartDate(): string
    {
        return $this->carRentalStartDate;
    }

    /**
     * @return string
     */
    public function getCarRentalEndDate(): string
    {
        return $this->carRentalEndDate;
    }

    /**
     * @return string
     */
    public function getPaymentMethod(): string
    {
        return $this->paymentMethod;
    }

    /**
     * @return float
     */
    public function getAmount(): float
    {
        return $this->amount;
    }

    /**
     * @param  string $flightDeparture
     * @return void
     */
    public function setFlightDeparture(string $flightDeparture): void
    {
        $this->flightDeparture = $flightDeparture;
    }

    /**
     * @param  string $flightDestination
     * @return void
     */
    public function setFlightDestination(string $flightDestination): void
    {
        $this->flightDestination = $flightDestination;
    }

    /**
     * @param  string $flightDate
     * @return void
     */
    public function setFlightDate(string $flightDate): void
    {
        $this->flightDate = $flightDate;
    }

    /**
     * @param  string $roomId
     * @return void
     */
    public function setRoomId(string $roomId): void
    {
        $this->roomId = $roomId;
    }

    /**
     * @param  string $checkInDate
     * @return void
     */
    public function setCheckInDate(string $checkInDate): void
    {
        $this->checkInDate = $checkInDate;
    }

    /**
     * @param  string $checkOutDate
     * @return void
     */
    public function setCheckOutDate(string $checkOutDate): void
    {
        $this->checkOutDate = $checkOutDate;
    }

    /**
     * @param  string $carRentalLocation
     * @return void
     */
    public function setCarRentalLocation(string $carRentalLocation): void
    {
        $this->carRentalLocation = $carRentalLocation;
    }

    /**
     * @param  string $carRentalStartDate
     * @return void
     */
    public function setCarRentalStartDate(string $carRentalStartDate): void
    {
        $this->carRentalStartDate = $carRentalStartDate;
    }

    /**
     * @param  string $carRentalEndDate
     * @return void
     */
    public function setCarRentalEndDate(string $carRentalEndDate): void
    {
        $this->carRentalEndDate = $carRentalEndDate;
    }

    /**
     * @param  string $paymentMethod
     * @return void
     */
    public function setPaymentMethod(string $paymentMethod): void
    {
        $this->paymentMethod = $paymentMethod;
    }

    /**
     * @param  float $amount
     * @return void
     */
    public function setAmount(float $amount): void
    {
        $this->amount = $amount;
    }
}
