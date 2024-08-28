<?php

namespace App\Creational\Singleton\Logger;

class EagerSingleton extends Logger
{

    private static ?EagerSingleton $instance = null;
    

    private function __construct()
    {
        self::init();
    }
    
    /** 
     * @return void
     */
    private static function init()
    {
        self::$instance = new self();
    }
    
    /** 
     * @return EagerSingleton $instance
     */
    public static function getInstance(): EagerSingleton
    {
        return self::$instance;
    }
    
    public function log(string $message)
    {
        echo "EagerSingleton: " . $message . PHP_EOL;
    }
}
