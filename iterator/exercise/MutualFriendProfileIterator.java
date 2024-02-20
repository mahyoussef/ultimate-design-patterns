package iterator.exercise;

public class MutualFriendProfileIterator implements ProfileIterator {

    private final ProfileCollection profileCollection;
    private int currentMutualFriendProfilePosition = 0;


    public MutualFriendProfileIterator(ProfileCollection profileCollection) {
        this.profileCollection = profileCollection;
    }
    @Override
    public boolean hasNext() {
        return currentMutualFriendProfilePosition < profileCollection.getProfiles().size();
    }

    @Override
    public Profile getNext() {
        System.out.println("Iterating through a graph DFS / BFS");
        if (!hasNext()) {
            return null;
        }
        return profileCollection.getProfiles().get(currentMutualFriendProfilePosition++);
    }
}
