<?php

namespace src\Behavioral\State;

class CancelledOrderState implements OrderState
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
        print_r("Can't process the order at the current state \n");
    }

    function shipOrder()
    {
        print_r("Can't ship the order at the current state \n");
    }

    function deliverOrder()
    {
        print_r("Can't deliver the order at the current state \n");
    }

    function cancelOrder()
    {
        print_r("This order is already cancelled \n");

    }
}