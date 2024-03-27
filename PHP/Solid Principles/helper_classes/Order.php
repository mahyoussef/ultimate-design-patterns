<?php

namespace Solid\HelperClasses;
class Order {
    private ?string $name;
    private float $price;

    public function __construct(?string $name, float $price) {
        $this->name = $name;
        $this->price = $price;
    }

    public function getName(): ?string {
        return $this->name;
    }

    public function getPrice(): float {
        return $this->price;
    }
}
