<?php

namespace App\Structural\Facade;

class BookingTravelFacade
{
    private FlightManager $flightManager;
    private HotelReservation $hotelReservation;
    private CarRental $carRental;
    private PaymentProcessor $paymentProcessor;
    private PaymentMethodFactory $paymentMethodFactory;

    public function __construct()
    {
        $this->flightManager = new FlightManager();
        $this->hotelReservation = new HotelReservation();
        $this->carRental = new CarRental();
        $this->paymentProcessor = new PaymentProcessor();
        $this->paymentMethodFactory = new PaymentMethodFactory();
    }
    
    /** 
     * @param  Trip $trip
     * @return void
     */
    public function bookTrip(Trip $trip): void
    {
        $this->flightManager->bookFlight($trip->getFlightDeparture(), $trip->getFlightDestination(), $trip->getFlightDate());
        $this->hotelReservation->reserveRoom($trip->getRoomId(), $trip->getCheckInDate(), $trip->getCheckOutDate());
        $this->carRental->rentCar($trip->getCarRentalLocation(), $trip->getCarRentalStartDate(), $trip->getCarRentalEndDate());
        $paymentMethod = $this->paymentMethodFactory->createPaymentMethodOf($trip->getPaymentMethod());
        $this->paymentProcessor->processPayment($trip->getAmount(), $paymentMethod);
    }

}
