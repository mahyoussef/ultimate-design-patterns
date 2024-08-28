<?php
namespace App\Creational\Singleton\Logger;

class LazySingleton extends Logger
{
    private static ?LazySingleton $instance = null;

    private function __construct()
    {
        parent::__construct();
        $this->logLevel = LogLevel::WARN;
    }

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function log(string $message)
    {
        echo "LazySingleton: " . $message . PHP_EOL;
    }

}
