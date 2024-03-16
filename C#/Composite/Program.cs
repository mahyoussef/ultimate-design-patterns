using Composite;

Employee employee1 = new("Ahmed", 10000);
Employee employee2 = new("Ahmed", 20000);
Employee employee3 = new("Ahmed", 30000);

Department department = new();
department.AddOrganisationUnit(employee1);
department.AddOrganisationUnit(employee2);
department.AddOrganisationUnit(employee3);

Console.WriteLine($"Department has salary {department.CalculateTotalSalary()}");