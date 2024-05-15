<?php

namespace DesignPatterns\Creational\Singleton\Logger;

abstract class Logger
{

    public LogLevel $logLevel;

    public function __construct(LogLevel $logLevel = LogLevel::INFO)
    {
        $this->logLevel = $logLevel;
    }

    /**
     *
     * @param  string $message
     * @return void
     */
    public function logDebug(string $message): void
    {
        if ($this->logLevel === LogLevel::DEBUG) {
            $this->log($message);
        }
    }

    /**
     * @param  string $message
     * @return void
     */
    public function logInfo(string $message): void
    {
        if ($this->logLevel === LogLevel::INFO) {

            $this->log($message);

        }
    }

    /**
     * @param  string $message
     * @return void
     */
    public function logWarn(string $message): void
    {
        if ($this->logLevel === LogLevel::WARN) {
            $this->log($message);
        }
    }

    /**
     * @param  string $message
     * @return void
     */
    public function logError(string $message): void
    {
        if ($this->logLevel === LogLevel::ERROR) {
            $this->log($message);
        }
    }

    /**
     * @param  string $message
     * @return void
     */
    abstract public function log(string $message);
}
