<?php

namespace DesignPatterns\Behavioral\Strategy\ExerciseOne\NotificationStrategys;

use DesignPatterns\Behavioral\Strategy\ExerciseOne\Interfaces\NotificationInterface;
use DesignPatterns\Behavioral\Strategy\ExerciseOne\Models\User;

class SmsNotificationStrategy implements NotificationInterface
{
    /**
     * @param User $user
     * @param String $message
     * @return void
     */
    public function sendNotification(User $user, String $message): void
    {
        echo "Sending sms to {$user->getName()} with message: {$message}";
    }
}
