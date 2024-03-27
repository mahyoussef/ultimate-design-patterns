<?php

namespace DesignPatterns\Behavioral\Strategy\Interfaces;


interface PaymentStrategy{

    public function processPayment(float $amount): void;
}