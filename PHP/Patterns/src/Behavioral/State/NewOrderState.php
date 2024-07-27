<?php

namespace src\Behavioral\State;

class NewOrderState implements OrderState
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
        print_r("Order: " . $this->orderManagement->getOrder()->getName() . " is being processing now... \n");
        $this->orderManagement->changeState(new ProcessingOrderState($this->orderManagement));
    }

    function shipOrder()
    {
        print_r("Can't ship the order: " .$this->orderManagement->getOrder()->getName(). " at the current state... \n");
    }

    function deliverOrder()
    {
        print_r("Can't deliver the order: " .$this->orderManagement->getOrder()->getName(). " at the current state... \n");
    }

    function cancelOrder()
    {
        print_r('Order: ' . $this->orderManagement->getOrder()->getName() . " is being cancelling now... \n");
        $this->orderManagement->changeState(new CancelledOrderState($this->orderManagement));
    }
}