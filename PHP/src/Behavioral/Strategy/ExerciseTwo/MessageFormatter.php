<?php

namespace DesignPatterns\Behavioral\Strategy\ExerciseTwo;

use DesignPatterns\Behavioral\Strategy\ExerciseTwo\Interfaces\MessageFormatterInterface;

class MessageFormatter
{
    /**
     * @var MessageFormatterInterface
     */
    private MessageFormatterInterface $messageFormatter;

    /**
     *
     * @param  MessageFormatterInterface  $messageFormatter
     *
     * @return  void
     */
    public function setMessageFormatter(MessageFormatterInterface $messageFormatter): void
    {
        $this->messageFormatter = $messageFormatter;

    }

    /**
     * @param string $message
     * @return string
     */
    public function format(string $message): string
    {
        return $this->messageFormatter->format($message);
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->messageFormatter->getType();
    }

}
