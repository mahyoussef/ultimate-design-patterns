package facade;

public class MasterCard implements PaymentMethod{
    @Override
    public String getType() {
        return "MasterCard";
    }
}
