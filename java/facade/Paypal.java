package facade;

public class Paypal implements PaymentMethod{
    @Override
    public String getType() {
        return "Paypal";
    }
}
