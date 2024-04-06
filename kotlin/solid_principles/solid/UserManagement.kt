package solid

interface UserManagement {
    fun updateUserProfile(customer: Customer)
    fun changePassword(customer: Customer,newPassword:String)
}