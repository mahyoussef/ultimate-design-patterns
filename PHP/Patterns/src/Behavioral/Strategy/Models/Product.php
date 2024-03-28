<?php

namespace DesignPatterns\Behavioral\Strategy\Models;

use DesignPatterns\Behavioral\Strategy\Interfaces\PricingStrategy;

class Product
{
    private PricingStrategy $pricingStrategy;
    private float $price;
    private string $name;

    public function __construct(float $price, string $name, PricingStrategy $pricingStrategy)
    {
        $this->pricingStrategy = $pricingStrategy;
        $this->price = $price;
        $this->name = $name;
    }

    public function getPrice(): float
    {
        return $this->pricingStrategy->calculatePrice($this->price);
    }

    public function getName(): string
    {
        return $this->name;
    }
}
