<?php

namespace DesignPatterns\Behavioral\Strategy\ExerciseOne;

use DesignPatterns\Behavioral\Strategy\ExerciseOne\Models\User;
use DesignPatterns\Behavioral\Strategy\ExerciseOne\Interfaces\NotificationInterface;

class Notification 
{
    /**
     * @var NotificationInterface
     */
    private NotificationInterface $notificationStrategy;

    /**
     * @param NotificationInterface $notificationStrategy
     */
    public function __construct(NotificationInterface $notificationStrategy)
    {
        $this->notificationStrategy = $notificationStrategy;
    }

    /**
     * @param User $user
     * @param String $message
     * @return void
     */
    public function sendNotification(User $user, String $message): void
    {
        $this->notificationStrategy->sendNotification($user, $message);
    }
}