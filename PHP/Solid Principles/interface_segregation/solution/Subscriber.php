<?php

class Subscriber implements SubscriptionNotificationService {
    public function subscribeToMSNotifications(){}

    public function subscribeToNewProductsAvailability() {
        echo "subscribing ...";
    }
}