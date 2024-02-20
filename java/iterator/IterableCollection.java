package iterator;

public interface IterableCollection {
    EmployeeHierarchyIterator createEmployeeDirectReportIterator();
    EmployeeHierarchyIterator createEmployeeCoWorkerIterator();
    EmployeeHierarchyIterator createEmployeeSubOrdinateIterator();
}
