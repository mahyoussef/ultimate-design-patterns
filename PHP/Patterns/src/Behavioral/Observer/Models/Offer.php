<?php
namespace DesignPatterns\Behavioral\Observer\Models;

class Offer
{
    /**
     * @var string
     */
    private string $message;

    /**
     * @param string $message
     */
    public function __construct(string $message)
    {
        $this->message = $message;
    }

    /**
     * @return string
     */
    public function getMessage(): string
    {
        return $this->message;
    }
}
