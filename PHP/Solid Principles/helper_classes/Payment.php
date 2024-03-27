<?php

namespace Solid\HelperClasses;
class Payment {
    private ?string $type;

    public function __construct(string $type) {
        $this->type = $type;
    }

    public function getType(): string {
        return $this->type;
    }
}
