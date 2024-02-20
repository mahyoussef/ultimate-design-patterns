package composite.exercise;

public class Product implements ShoppingItem {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public double calculateTotal() {
        return price;
    }
}
