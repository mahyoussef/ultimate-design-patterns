<?php

namespace src\Behavioral\ChainOfResponsibility;


interface MiddlewareChainHandler
{
    function setNext(MiddlewareChainHandler $middlewareHandler) : MiddlewareChainHandler;
    function handle(Request $request) : bool;
}