<?php

namespace src\Behavioral\ChainOfResponsibility;

class AuthenticationMiddleware extends AbstractMiddlewareChainHandler
{
    private bool $isAuthenticated;

    /**
     * @param $isAuthenticated
     */
    public function __construct($isAuthenticated)
    {
        $this->isAuthenticated = $isAuthenticated;
    }

    public function handle(Request $request): bool
    {
       if (!$this->isAuthenticated) {
           return false;
       }

       return parent::handle($request);
    }
}