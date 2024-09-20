class Employee {
  private id: string;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

// #########################################

interface EmployeeHierarchyIterator {
  getNext(): Employee | null;
  hasNext(): boolean;
}

class EmployeeDirectReportIterator implements EmployeeHierarchyIterator {
  private employeeHierarchyCollection: EmployeeHierarchyCollection;
  private currentDirectReportPosition: number = 0;

  constructor(employeeHierarchyCollection: EmployeeHierarchyCollection) {
    this.employeeHierarchyCollection = employeeHierarchyCollection;
  }

  getNext(): Employee | null {
    console.log("Iterating through a graph DFS / BFS");
    if (!this.hasNext()) return null;
    return this.employeeHierarchyCollection.getEmployees()[
      this.currentDirectReportPosition++
    ];
  }

  hasNext(): boolean {
    return (
      this.currentDirectReportPosition <
      this.employeeHierarchyCollection.getEmployees().length
    );
  }
}

class EmployeeCoWorkerIterator implements EmployeeHierarchyIterator {
  private employeeHierarchyCollection: EmployeeHierarchyCollection;
  private currentCoWorkerPosition: number = 0;

  constructor(employeeHierarchyCollection: EmployeeHierarchyCollection) {
    this.employeeHierarchyCollection = employeeHierarchyCollection;
  }

  getNext(): Employee | null {
    console.log("Iterating through a graph DFS / BFS");
    if (!this.hasNext()) return null;
    return this.employeeHierarchyCollection.getEmployees()[
      this.currentCoWorkerPosition++
    ];
  }

  hasNext(): boolean {
    return (
      this.currentCoWorkerPosition <
      this.employeeHierarchyCollection.getEmployees().length
    );
  }
}

class EmployeeSubOrdinateIterator implements EmployeeHierarchyIterator {
  private employeeHierarchyCollection: EmployeeHierarchyCollection;
  private currentSubOrdinatePosition: number = 0;

  constructor(employeeHierarchyCollection: EmployeeHierarchyCollection) {
    this.employeeHierarchyCollection = employeeHierarchyCollection;
  }

  getNext(): Employee | null {
    console.log("Iterating through a graph DFS / BFS");
    if (!this.hasNext()) return null;
    return this.employeeHierarchyCollection.getEmployees()[
      this.currentSubOrdinatePosition++
    ];
  }

  hasNext(): boolean {
    return (
      this.currentSubOrdinatePosition <
      this.employeeHierarchyCollection.getEmployees().length
    );
  }
}

// #########################################

interface IterableCollection {
  createEmployeeDirectReportIterator(arg: string): EmployeeHierarchyIterator;
  createEmployeeCoWorkerIterator(arg: string): EmployeeHierarchyIterator;
  createEmployeeSubOrdinateIterator(arg: string): EmployeeHierarchyIterator;
}

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

// Example usage

const employeeHierarchyCollection = new EmployeeHierarchyCollection("123");

const iterator =
  employeeHierarchyCollection.createEmployeeDirectReportIterator("456");

while (iterator.hasNext()) {
  console.log(iterator.getNext()?.getName());
}
