<?php

namespace src\Behavioral\ChainOfResponsibility;

class SecurityChecksMiddleware extends AbstractMiddlewareChainHandler
{
    private $isSecure;

    /**
     * @param $isSecured
     */
    public function __construct($isSecure)
    {
        $this->isSecure = $isSecure;
    }

    public function handle(Request $request): bool
    {
        if (!$this->isSecure) {
            return false;
        }

        return parent::handle($request);
    }
}