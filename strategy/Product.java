package strategy;

public class Product {

    private String name;
    private double price;
    private final PricingStrategy pricingStrategy;

    public Product(String name, double price, PricingStrategy pricingStrategy) {
        this.name = name;
        this.price = price;
        this.pricingStrategy = pricingStrategy;
    }

    public double calculatePrice() {
        return pricingStrategy.calculatePrice(price);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
