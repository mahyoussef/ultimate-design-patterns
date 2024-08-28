<?php

namespace src\Behavioral\ChainOfResponsibility;

class Request
{
    private string $method;
    private string $route;

    /**
     * @param $method
     * @param $route
     */
    public function __construct($method, $route)
    {
        $this->method = $method;
        $this->route = $route;
    }
}