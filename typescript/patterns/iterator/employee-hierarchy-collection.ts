class EmployeeHierarchyCollection implements IterableCollection {
  private employees: Array<Employee>;
  private employeeId: string;

  constructor(employeeId: string) {
    this.employeeId = employeeId;
    this.employees = [
      new Employee("123", "John"),
      new Employee("456", "Jane"),
      new Employee("789", "Bob"),
    ];
  }

  createEmployeeCoWorkerIterator(
    employeeId: string,
  ): EmployeeHierarchyIterator {
    return new EmployeeCoWorkerIterator(this);
  }

  createEmployeeDirectReportIterator(
    employeeId: string,
  ): EmployeeHierarchyIterator {
    return new EmployeeDirectReportIterator(this);
  }

  createEmployeeSubOrdinateIterator(
    employeeId: string,
  ): EmployeeHierarchyIterator {
    return new EmployeeSubOrdinateIterator(this);
  }

  getEmployees(): Array<Employee> {
    return this.employees;
  }

  setEmployees(employees: Array<Employee>): void {
    this.employees = employees;
  }

  getEmployeeId(): string {
    return this.employeeId;
  }

  setEmployeeId(employeeId: string): void {
    this.employeeId = employeeId;
  }
}
