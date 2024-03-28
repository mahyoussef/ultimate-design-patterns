<?php

namespace Solid\HelperClasses;
class Customer {
    private ?string $name;
    private ?string $email;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function getEmail(): ?string {
        return $this->email;
    }

    public function getName(): string {
        return $this->name;
    }
}