package observer;

public class ShippingCompany implements Subscriber {
    private String name;

    public ShippingCompany(String name) {
        this.name = name;
    }

    @Override
    public void notify(String message) {
        System.out.println(name + " is receiving notification about: " + message);
    }
}
