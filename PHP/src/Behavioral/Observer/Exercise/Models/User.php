<?php
namespace DesignPatterns\Behavioral\Observer\Exercise\Models;

use Override;
use DesignPatterns\Behavioral\Observer\Exercise\Interfaces\Subscriber;

class User implements Subscriber
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
    #[Override] public function notify(string $message): void
    {
        echo 'Notifying ' . $this->name . ' about ' . $message . PHP_EOL;
    }

}
