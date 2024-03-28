<?php

class DeliveryOrder extends Order {
    public static float $SHIPPING_COST = 10.0;

    public function getTotalPriceWithShippingCost(): float
    {
        return $this->getPrice() ?? 0.0 + self::$SHIPPING_COST;
    }
}