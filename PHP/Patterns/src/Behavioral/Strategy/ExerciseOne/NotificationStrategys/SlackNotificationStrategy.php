<?php

namespace DesignPatterns\Behavioral\Strategy\ExerciseOne\NotificationStrategys;

use DesignPatterns\Behavioral\Strategy\ExerciseOne\Models\User;
use DesignPatterns\Behavioral\Strategy\ExerciseOne\Interfaces\NotificationInterface;


class SlackNotificationStrategy implements NotificationInterface
{
    /**
     * @param User $user
     * @param String $message
     * @return void
     */
    public function sendNotification(User $user, String $message): void
    {
        echo "Sending slack to {$user->getName()} with message: {$message}";
    }
}