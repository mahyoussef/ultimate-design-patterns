package iterator.exercise;

import iterator.Employee;
import iterator.EmployeeHierarchyCollection;

public class FamilyProfileIterator implements ProfileIterator {
    private final ProfileCollection profileCollection;
    private int currentFamilyProfilePosition = 0;

    public FamilyProfileIterator(ProfileCollection profileCollection) {
        this.profileCollection = profileCollection;
    }

    @Override
    public boolean hasNext() {
        return currentFamilyProfilePosition < profileCollection.getProfiles().size();
    }

    @Override
    public Profile getNext() {
        System.out.println("Iterating through a graph DFS / BFS");
        if (!hasNext()) {
            return null;
        }
        return profileCollection.getProfiles().get(currentFamilyProfilePosition++);
    }
}
