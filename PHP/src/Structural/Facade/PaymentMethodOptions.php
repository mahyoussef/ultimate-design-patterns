<?php

namespace App\Structural\Facade;

enum PaymentMethodOptions
{
    case MASTER_CARD;
    case VISA;
    case PAYPAL;
}