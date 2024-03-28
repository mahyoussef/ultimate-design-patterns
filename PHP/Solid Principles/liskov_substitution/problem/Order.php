<?php

class Order
{
    private string $_name;
    private float $_price;
    public static const SHIPPING_COST = 10.0;

    public function __construct(string $name = null, float $price = null)
    {
        $this->_name = $name;
        $this->_price = $price;
    }

    public function getName(): string
    {
        return $this->_name;
    }

    public function getPrice(): float
    {
        return $this->_price;
    }

    public function getTotalPrice(): float
    {
        return $this->_price ?? 0.0 + self::SHIPPING_COST;
    }
}