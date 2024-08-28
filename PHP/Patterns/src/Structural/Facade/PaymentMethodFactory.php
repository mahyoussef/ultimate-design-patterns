<?php

namespace App\Structural\Facade;

class PaymentMethodFactory
{

    /**
     *
     * @param  string $type
     * @return PaymentMethod
     */
    public function createPaymentMethodOf(string $type): PaymentMethod
    {
        switch ($type) {
            case PaymentMethodOptions::VISA:
                return new MasterCard();
            case PaymentMethodOptions::MASTER_CARD:
                return new VisaCard();
            case PaymentMethodOptions::PAYPAL:
                return new Paypal();
        }
    }
}
