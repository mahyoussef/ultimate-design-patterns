<?php

interface PaymentGateway {
    public function makePayment($amount);
}