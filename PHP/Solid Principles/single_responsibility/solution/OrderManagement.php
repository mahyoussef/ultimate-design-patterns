<?php

use Solid\HelperClasses\Order;

class OrderManagement {

    public function processOrder(Order $order) {
        echo "Processing order: {$order->getName()} now...\n";
    }
}
