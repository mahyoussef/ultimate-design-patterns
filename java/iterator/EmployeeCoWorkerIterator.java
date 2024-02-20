package iterator;

public class EmployeeCoWorkerIterator implements EmployeeHierarchyIterator {
    private final EmployeeHierarchyCollection employeeHierarchyCollection;
    private int currentCoWorkerPosition = 0;

    public EmployeeCoWorkerIterator(EmployeeHierarchyCollection employeeHierarchyCollection) {
        this.employeeHierarchyCollection = employeeHierarchyCollection;
    }

    @Override
    public boolean hasNext() {
        return currentCoWorkerPosition < employeeHierarchyCollection.getEmployees().size();
    }

    @Override
    public Employee getNext() {
        System.out.println("Iterating through a graph DFS / BFS");
        if (!hasNext()) {
            return null;
        }
        return employeeHierarchyCollection.getEmployees().get(currentCoWorkerPosition++);
    }
}
