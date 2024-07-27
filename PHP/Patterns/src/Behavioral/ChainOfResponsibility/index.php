<?php

use src\Behavioral\ChainOfResponsibility\AuthenticationMiddleware;
use src\Behavioral\ChainOfResponsibility\AuthorizationMiddleware;
use src\Behavioral\ChainOfResponsibility\Request;
use src\Behavioral\ChainOfResponsibility\RequestProcessor;
use src\Behavioral\ChainOfResponsibility\SecurityChecksMiddleware;

$DS = DIRECTORY_SEPARATOR;
require_once __DIR__ . $DS . '..' . $DS . '..' . $DS . '..' . $DS . 'vendor' . $DS . 'autoload.php';

$middlewaresList = [
    new AuthenticationMiddleware(true),
    new AuthorizationMiddleware(true),
    new SecurityChecksMiddleware(true)
];

foreach ($middlewaresList as $k => $middleware) {
    if ($k < count($middlewaresList) - 1) {
        $middleware->setNext($middlewaresList[$k + 1]);
    }
}

//$authenticationMiddleware = new AuthenticationMiddleware(true);
//$authorizationMiddleware = new AuthorizationMiddleware(true);
//$securityChecksMiddleware = new SecurityChecksMiddleware(true);
//
//$authenticationMiddleware->setNext($authorizationMiddleware);
//$authorizationMiddleware->setNext($securityChecksMiddleware);

$requestProcessor = new RequestProcessor($middlewaresList[0]);
$request = new Request("GET", "https://localhost:8000/add-user");
print_r($requestProcessor->processRequest($request)->getMessage());