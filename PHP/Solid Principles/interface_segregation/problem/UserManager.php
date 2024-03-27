<?php

interface UserManager {
    public function subscribeToNewProductsAvailability(Customer $customer): void;
    public function subscribeToMSNotifications(Customer $customer): void;
    public function updateUserProfile(Customer $customer): void;
    public function changePassword(Customer $customer, string $newPassword): void;
}