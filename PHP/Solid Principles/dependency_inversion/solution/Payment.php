<?php

class Payment implements PaymentGateway {
    public function makePayment($amount) {
        return "Paid $amount";
    }
}