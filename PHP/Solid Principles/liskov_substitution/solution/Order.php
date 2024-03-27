<?php

class Order {
    private string $_name;
    private float $_price;

    public function __construct(string $name = null, float $price = null) {
        $this->_name = $name;
        $this->_price = $price;
    }

    public function getName(): string {
        return $this->_name;
    }

    public function getPrice(): float {
        return $this->_price;
    }
}