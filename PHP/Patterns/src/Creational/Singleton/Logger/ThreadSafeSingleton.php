<?php
namespace App\Creational\Singleton\Logger;

class ThreadSafeSingleton
{
    private static ?ThreadSafeSingleton $instance = null;
    private static $lock = false;

    private function __construct()
    {}

    public static function getInstance()
    {
        if (self::$instance === null) {
            if (self::$lock === false) {
                self::$lock = true;
                self::$instance = new self();
                self::$lock = false;
            }
        }
        return self::$instance;
    }
    public function log(string $message)
    {
        echo "ThreadSafeSingleton: " . $message . PHP_EOL;
    }
}
