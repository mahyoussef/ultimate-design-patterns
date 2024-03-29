<?php
namespace DesignPatterns\Behavioral\Strategy\ExerciseTwo\Types;

use DesignPatterns\Behavioral\Strategy\ExerciseTwo\Interfaces\MessageFormatterInterface;

class PlainTextFormatter implements MessageFormatterInterface
{

    /**
     * @param String $message
     * @return string
     */
    public function format(String $message): string
    {
        return $message;
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return "Plain Text";
    }

}
