namespace Composite;

public sealed class Employee : IOrganisationUnit
{
    private readonly string _name;
    private readonly double _salary;

    public Employee(string name, double salary)
    {
        _name = name;
        _salary = salary;
    }

    public double CalculateTotalSalary() => _salary;
}
