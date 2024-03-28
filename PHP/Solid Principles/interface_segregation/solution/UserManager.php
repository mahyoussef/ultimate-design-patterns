<?php

interface UserManager {
    public function updateUserProfile(Customer $customer);
    public function changePassword(Customer $customer, string $newPassword);
}