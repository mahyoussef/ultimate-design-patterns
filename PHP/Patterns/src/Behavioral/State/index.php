<?php

use src\Behavioral\ChainOfResponsibility\AuthenticationMiddleware;
use src\Behavioral\ChainOfResponsibility\AuthorizationMiddleware;
use src\Behavioral\ChainOfResponsibility\Request;
use src\Behavioral\ChainOfResponsibility\RequestProcessor;
use src\Behavioral\ChainOfResponsibility\SecurityChecksMiddleware;
use src\Behavioral\State\Order;
use src\Behavioral\State\OrderManagement;

$DS = DIRECTORY_SEPARATOR;
require_once __DIR__ . $DS . '..' . $DS . '..' . $DS . '..' . $DS . 'vendor' . $DS . 'autoload.php';


$orderOne = new Order("Jacket", 200.00);

$orderManagement = new OrderManagement($orderOne);

$orderManagement->processOrder();
$orderManagement->shipOrder();
$orderManagement->deliverOrder();
$orderManagement->cancelOrder();


//$orderManagement->processOrder();
//$orderManagement->cancelOrder();
//$orderManagement->shipOrder();
//$orderManagement->deliverOrder();
//
//
//$orderManagement->processOrder();
//$orderManagement->processOrder();
//$orderManagement->shipOrder();
//$orderManagement->cancelOrder();
//$orderManagement->deliverOrder();
