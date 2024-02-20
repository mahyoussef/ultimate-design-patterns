package iterator;

public class EmployeeDirectReportIterator implements EmployeeHierarchyIterator {

    private final EmployeeHierarchyCollection employeeHierarchyCollection;
    private int currentDirectReportPosition = 0;

    public EmployeeDirectReportIterator(EmployeeHierarchyCollection employeeHierarchyCollection) {
        this.employeeHierarchyCollection = employeeHierarchyCollection;
    }

    @Override
    public boolean hasNext() {
        return currentDirectReportPosition < employeeHierarchyCollection.getEmployees().size();
    }

    @Override
    public Employee getNext() {
        System.out.println("Iterating through a graph DFS / BFS");
        if (!hasNext()) {
            return null;
        }
        return employeeHierarchyCollection.getEmployees().get(currentDirectReportPosition++);
    }
}
