<?php
namespace DesignPatterns\Behavioral\Observer\Interfaces;

interface Subscriber
{
    /**
     * @param string $message
     * @return void
     */
    public function notify(string $message): void;
}