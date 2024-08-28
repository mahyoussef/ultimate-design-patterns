<?php

namespace src\Behavioral\State;

class DeliveredOrderState implements OrderState
{
    private OrderManagement $orderManagement;

    /**
     * @param OrderManagement $orderManagement
     */
    public function __construct(OrderManagement $orderManagement)
    {
        $this->orderManagement = $orderManagement;
    }

    function processOrder()
    {
        print_r("This order is already processed... \n");
    }

    function shipOrder()
    {
        print_r("This order is already shipped... \n");
    }

    function deliverOrder()
    {
        print_r("This order is already delivered... \n");
    }

    function cancelOrder()
    {
        print_r("Can't cancel the order at the current state \n");
    }
}