<?php

namespace src\Behavioral\State;

interface OrderState
{
    function processOrder();
    function shipOrder();
    function deliverOrder();
    function cancelOrder();
}