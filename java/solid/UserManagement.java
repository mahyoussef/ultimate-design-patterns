package solid;

public interface UserManagement {

    void updateUserProfile(Customer customer);
    void changePassword(Customer customer, String newPassword);

}
