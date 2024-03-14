namespace Composite;

public sealed class Department : IOrganisationUnit
{
    private readonly List<IOrganisationUnit> _units;

    public Department()
        => _units = [];

    public void AddOrganisationUnit(IOrganisationUnit unit)
        => _units.Add(unit);

    public double CalculateTotalSalary()
        => _units.Sum(unit => unit.CalculateTotalSalary());
}
