<?php

namespace DesignPatterns\Creational\Singleton\Logger;

class FileLogger extends Logger
{
    private $filePath;

    public function __construct($level, $filePath)
    {
        parent::__construct($level);
        $this->filePath = $filePath;
    }

    // Implement the abstract log method
    public function log($message)
    {
        $logMessage = "[" . $this->logLevel . "] " . $message . PHP_EOL;
        file_put_contents($this->filePath, $logMessage, FILE_APPEND);
    }

    // Method to change the log level
    public function setLogLevel($level)
    {
        $this->logLevel = $level;
    }
}
