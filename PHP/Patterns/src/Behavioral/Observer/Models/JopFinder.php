<?php

namespace DesignPatterns\Behavioral\Observer\Models;

use DesignPatterns\Behavioral\Observer\Exercise\Interfaces\Subscriber;

class JopFinder implements Subscriber
{
    
    
    /**
     * @var string
     */
    private string $name;

    /**
     * @param string $name
     */
    public function __construct(string $name)
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

      /**
     * @param string $message
     * @return void
     */
    public function notify(string $message): void
    {
        echo $this->name . 'is receiving a notification about job finding ' . $message . PHP_EOL;
    }
}