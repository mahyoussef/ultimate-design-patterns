interface EmployeeHierarchyIterator {
  getNext(): Employee | null;
  hasNext(): boolean;
}
