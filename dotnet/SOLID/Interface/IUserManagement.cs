using dotnet.SOLID.Models;

namespace dotnet.SOLID.Interface;

public interface IUserManagement
{
    internal void UpdateUserProfile(Customer customer);
    internal void ChangePassword(Customer customer, string newPassword);

}