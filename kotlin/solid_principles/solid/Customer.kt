package solid

class Customer(val name:String, val email:String): UserManagement{
    override fun updateUserProfile(customer: Customer){
        println("Updating user profile ${customer.name}......" )
    }

    override fun changePassword(customer: Customer, newPassword: String) {
        println("Updating user ${customer.name}.....")
    }


}