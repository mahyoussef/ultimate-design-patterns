package facade;

public class VisaCard implements PaymentMethod{
    @Override
    public String getType() {
        return "VisaCard";
    }
}
