interface IterableCollection {
  createEmployeeDirectReportIterator(arg: string): EmployeeHierarchyIterator;
  createEmployeeCoWorkerIterator(arg: string): EmployeeHierarchyIterator;
  createEmployeeSubOrdinateIterator(arg: string): EmployeeHierarchyIterator;
}
