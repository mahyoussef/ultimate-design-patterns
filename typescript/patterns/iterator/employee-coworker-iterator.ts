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
