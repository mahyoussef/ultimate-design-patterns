package composite;

public class Employee implements OrganisationUnit {

    private String name;
    private double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public double calculateTotalSalary() {
        return salary;
    }
}
