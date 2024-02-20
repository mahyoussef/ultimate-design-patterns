package composite.exercise;

import java.util.ArrayList;
import java.util.List;

public class Bundle implements ShoppingItem {
    private List<ShoppingItem> items;

    public Bundle() {
        this.items = new ArrayList<>();
    }

    void addItem(ShoppingItem item) {
        items.add(item);
    }

    @Override
    public double calculateTotal() {
        double total = 0;
        for (ShoppingItem item : items) {
            total += item.calculateTotal();
        }
        // Apply bundle discount logic if needed
        return total * 0.9; // 10% discount for bundles
    }

}
