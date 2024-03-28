<?php

namespace DesignPatterns\Behavioral\Strategy\ExerciseTwo\Interfaces;

interface MessageFormatterInterface
{
    /**
     * @param string $message
     * @return string
     */
    public function format(string $message): string;

    /**
     * @return string
     */
    public function getType(): string;
}
