<?php

namespace src\Behavioral\ChainOfResponsibility;

abstract class AbstractMiddlewareChainHandler implements MiddlewareChainHandler
{
    private ?MiddlewareChainHandler $nextHandler = null;

    public function setNext(MiddlewareChainHandler $middlewareHandler): MiddlewareChainHandler
    {
        $this->nextHandler = $middlewareHandler;

        return $middlewareHandler;
    }

    public function handle(Request $request): bool
    {
        if ($this->nextHandler != null) {
            return $this->nextHandler->handle($request);
        }

        return true;
    }
}