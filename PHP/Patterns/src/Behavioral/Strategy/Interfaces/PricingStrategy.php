<?php
namespace DesignPatterns\Behavioral\Strategy\Interfaces;

interface PricingStrategy
{    
    /** 
     * @param  float $price
     * @return float
     */
    public function calculatePrice(float $price): float;
}
