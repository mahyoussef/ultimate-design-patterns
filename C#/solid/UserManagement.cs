namespace SOLID;

public interface IUserManagement
{
    void UpdateUserProfile(Customer customer);
    void ChangePassword(Customer customer, string newPassword);
}
