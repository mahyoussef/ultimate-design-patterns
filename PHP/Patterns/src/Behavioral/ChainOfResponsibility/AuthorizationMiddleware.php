<?php

namespace src\Behavioral\ChainOfResponsibility;

class AuthorizationMiddleware extends AbstractMiddlewareChainHandler
{

    private $isAuthorized;

    /**
     * @param $isAuthorized
     */
    public function __construct($isAuthorized)
    {
        $this->isAuthorized = $isAuthorized;
    }

    public function handle(Request $request): bool
    {
        if (!$this->isAuthorized) {
            return false;
        }

        return parent::handle($request);
    }
}