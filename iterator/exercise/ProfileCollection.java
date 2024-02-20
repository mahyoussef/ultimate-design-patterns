package iterator.exercise;

import iterator.Employee;

import java.util.List;

public class ProfileCollection implements IterableCollection {

    private final List<Profile> profiles;
    private final String profileId;

    public ProfileCollection(List<Profile> profiles, String profileId) {
        this.profiles = profiles;
        this.profileId = profileId;
    }

    public List<Profile> getProfiles() {
        return profiles;
    }

    @Override
    public ProfileIterator createFriendProfileIterator() {
        return new FriendProfileIterator(this);
    }

    @Override
    public ProfileIterator createMutualFriendProfileIterator() {
        return new MutualFriendProfileIterator(this);
    }

    @Override
    public ProfileIterator createFamilyProfileIterator() {
        return new FamilyProfileIterator(this);
    }
}
