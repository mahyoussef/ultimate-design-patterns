package iterator;

public class EmployeeSubOrdinateIterator implements  EmployeeHierarchyIterator {
    private final EmployeeHierarchyCollection employeeHierarchyCollection;
    private int currentSubOrdinatePosition = 0;

    public EmployeeSubOrdinateIterator(EmployeeHierarchyCollection employeeHierarchyCollection) {
        this.employeeHierarchyCollection = employeeHierarchyCollection;
    }

    @Override
    public boolean hasNext() {
        return currentSubOrdinatePosition < employeeHierarchyCollection.getEmployees().size();
    }

    @Override
    public Employee getNext() {
        System.out.println("Iterating through a graph DFS / BFS");
        if (!hasNext()) {
            return null;
        }
        return employeeHierarchyCollection.getEmployees().get(currentSubOrdinatePosition++);
    }
}
