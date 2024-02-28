namespace Solid
{
    public interface UserManagement
    {
        void UpdateUserProfile(Customer customer);
        void ChangePassword(Customer customer, string newPassword);
    }
}
