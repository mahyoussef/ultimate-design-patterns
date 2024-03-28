<?php
namespace DesignPatterns\Behavioral\Observer\Models;

class Product
{

    /**
     * @var string
     */
    private string $name;
    /**
     * @var float
     */
    private float $price;

    public function __construct(string $name, float $price)
    {
        $this->price = $price;
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return float
     */
    public function getPrice(): float
    {
        return $this->price;
    }

}
