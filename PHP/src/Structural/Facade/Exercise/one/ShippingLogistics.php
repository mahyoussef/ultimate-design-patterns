<?php

namespace App\Structural\Facade\Exercise\one;

class ShippingLogistics
{
    /**
     * @param  string $orderId
     * @return string
     */
    public function ship(string $orderId): string
    {
        return "Order " . $orderId . " SHIPPED";
    }
}