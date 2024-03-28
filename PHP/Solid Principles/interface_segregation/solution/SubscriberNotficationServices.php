<?php
interface SubscriptionNotificationService {
    public function subscribeToNewProductsAvailability();
    public function subscribeToMSNotifications();
}