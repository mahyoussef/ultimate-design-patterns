<?php

use Solid\HelperClasses\Customer;

class NotificationService {

    public function sendEmailNotification(Customer $customer, string $message) {
        echo "Sending email notification to: {$customer->getEmail()} with message: $message\n";
    }
}