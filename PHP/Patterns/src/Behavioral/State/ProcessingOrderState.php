<?php

namespace src\Behavioral\State;

class ProcessingOrderState implements OrderState
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
        print_r('Order: ' . $this->orderManagement->getOrder()->getName() . " is being shipping now... \n");
        $this->orderManagement->changeState(new ShippedOrderState($this->orderManagement));
    }

    function deliverOrder()
    {
        print_r("The order can't be delivered at the current state... \n");
    }

    function cancelOrder()
    {
        print_r('Order: ' . $this->orderManagement->getOrder()->getName() . " is being cancelling now... \n");
        $this->orderManagement->changeState(new CancelledOrderState($this->orderManagement));
    }
}