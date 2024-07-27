<?php

namespace src\Behavioral\ChainOfResponsibility;

class RequestProcessor
{
    private MiddlewareChainHandler $middlewareChainHandler;

    /**
     * @param MiddlewareChainHandler $middlewareChainHandler
     */
    public function __construct(MiddlewareChainHandler $middlewareChainHandler)
    {
        $this->middlewareChainHandler = $middlewareChainHandler;
    }

    public function processRequest(Request $request)
    {
        if (!$this->middlewareChainHandler->handle($request)) {
            return new Response("Error processing request", false);
        }

        print_r("Processing request... \n");

        return new Response("Request Successfully Processed", true);
    }
}