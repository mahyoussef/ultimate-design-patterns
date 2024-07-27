<?php

namespace src\Behavioral\State;

class OrderManagement
{
    private Order $order;
    private OrderState $orderState;

    /**
     * @param Order $order
     */
    public function __construct(Order $order)
    {
        $this->order = $order;
        $this->orderState = new NewOrderState($this);
    }

    public function changeState(OrderState $newOrderState)
    {
        $this->orderState = $newOrderState;
    }

    public function processOrder()
    {
        $this->orderState->processOrder();
    }

    public function shipOrder()
    {
        $this->orderState->shipOrder();
    }

    public function deliverOrder()
    {
        $this->orderState->deliverOrder();
    }

    public function cancelOrder()
    {
        $this->orderState->cancelOrder();
    }

    public function getOrder(): Order
    {
        return $this->order;
    }

    public function setOrder(Order $order): void
    {
        $this->order = $order;
    }

    public function getOrderState(): OrderState
    {
        return $this->orderState;
    }

    public function setOrderState(OrderState $orderState): void
    {
        $this->orderState = $orderState;
    }
}