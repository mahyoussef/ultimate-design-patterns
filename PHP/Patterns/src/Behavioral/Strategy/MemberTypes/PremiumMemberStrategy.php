<?php

namespace DesignPatterns\Behavioral\Strategy\MemberTypes;

use DesignPatterns\Behavioral\Strategy\Interfaces\PricingStrategy;

class PremiumMemberStrategy implements PricingStrategy
{
    public function calculatePrice(float $price): float
    {
        return $price * 0.8;
    }
}