<?php

class Customer implements SubscriptionNotificationService, UserManager
{
    private $_name;
    private $_email;

    public function __construct($name) {
        $this->_name = $name;
    }

    public function getEmail() {
        return $this->_email;
    }

    public function getName() {
        return $this->_name;
    }

    public function changePassword($customer, $newPassword) {
        echo "Changing password...\n";
    }

    public function subscribeToMSNotifications() {
        echo "Notifying password...\n";
    }

    public function subscribeToNewProductsAvailability() {
        echo "subscribing...\n";
    }

    public function updateUserProfile($customer) {
        echo "updating...\n";
    }
}