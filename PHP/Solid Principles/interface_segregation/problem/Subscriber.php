<?php

class Subscriber implements UserManager {
    public function changePassword($customer, $newPassword): void {}

    public function subscribeToMSNotifications(Customer $customer): void {}

    public function subscribeToNewProductsAvailability(Customer $customer): void {
        echo "subscribing ...";
    }

    public function updateUserProfile($customer): void {
        echo "updating";
    }
}