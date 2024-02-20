package iterator.exercise;

public class FriendProfileIterator implements ProfileIterator {

    private final ProfileCollection profileCollection;
    private int currentFriendProfilePosition = 0;


    public FriendProfileIterator(ProfileCollection profileCollection) {
        this.profileCollection = profileCollection;
    }

    @Override
    public boolean hasNext() {
        return currentFriendProfilePosition < profileCollection.getProfiles().size();
    }

    @Override
    public Profile getNext() {
        System.out.println("Iterating through a graph DFS / BFS");
        if (!hasNext()) {
            return null;
        }
        return profileCollection.getProfiles().get(currentFriendProfilePosition++);
    }
}
