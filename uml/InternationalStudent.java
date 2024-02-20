package uml;

public class InternationalStudent extends Student {

    private String countryOfOrigin;
    private String visaStatus;
    public InternationalStudent(int studentId, String name, int age) {
        super(studentId, name, age);
    }

    public String getCountryOfOrigin() {
        return countryOfOrigin;
    }

    public String getVisaStatus() {
        return visaStatus;
    }
}
