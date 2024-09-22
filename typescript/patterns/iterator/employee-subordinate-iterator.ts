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
