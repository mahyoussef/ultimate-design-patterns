<?php
namespace DesignPatterns\Behavioral\Observer\Exercise\Interfaces;

interface Subscriber
{
    /**
     * @param string $message
     * @return void
     */
    public function notify(string $message): void;
}