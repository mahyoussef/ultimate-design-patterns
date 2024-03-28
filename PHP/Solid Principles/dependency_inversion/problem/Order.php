<?php

class Order {
    private $id;
    private $amount;

    public function __construct($id, $amount) {
        $this->id = $id;
        $this->amount = $amount;
    }

    public function getId() {
        return $this->id;
    }

    public function getAmount() {
        return $this->amount;
    }
}
