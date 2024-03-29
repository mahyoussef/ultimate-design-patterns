<?php


namespace DesignPatterns\Behavioral\Strategy\ExerciseOne\Interfaces;

use DesignPatterns\Behavioral\Strategy\ExerciseOne\Models\User;


interface NotificationInterface
{
    /**
     * @param User $user
     * @param String $message
     * @return void
     */
    public function sendNotification(User $user, String $message): void;
}