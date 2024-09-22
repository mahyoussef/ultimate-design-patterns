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
