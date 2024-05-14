<?php

namespace App\Structural\Facade\Exercise\one;

class InventoryManagement
{
    /**
     * @param  string $productId
     * @param  int $quantity
     * @return bool
     */
    public function updateInventory(string $productId, int $quantity): bool
    {
        $availableQuantity = 7;

        if ($availableQuantity < $quantity) {
            return false;
        }
        $availableQuantity -= $quantity;

        return true;
    }
}
