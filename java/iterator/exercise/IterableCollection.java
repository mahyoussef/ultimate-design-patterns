package iterator.exercise;

public interface IterableCollection {

    ProfileIterator createFriendProfileIterator();
    ProfileIterator createMutualFriendProfileIterator();
    ProfileIterator createFamilyProfileIterator();
}
