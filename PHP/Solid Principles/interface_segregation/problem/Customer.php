<?php

class Customer implements UserManager {
    private ?string $_name;
    private ?string $_email;

    public function __construct(string $name) {
        $this->_name = $name;
    }

    public function getEmail(): ?string {
        return $this->_email;
    }

    public function getName(): ?string {
        return $this->_name;
    }

    public function changePassword(Customer $customer, string $newPassword): void {
        echo "Changing password for customer: " . $customer->getName();
    }

    public function subscribeToMSNotifications(Customer $customer): void {
        echo "Subscribing customer to MS Notifications";
    }

    public function subscribeToNewProductsAvailability(Customer $customer): void {
        echo "Subscribing customer to new product notifications";
    }

    public function updateUserProfile(Customer $customer): void {
        echo "Updating customer profile";
    }
}