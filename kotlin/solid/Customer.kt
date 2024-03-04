package solid

class Customer(val name:String, val email:String) {
    public fun subscribeToNewProductsAvailability(){
        println("Subscribing to new products availability...")
    }
    public fun subscribeToSMSNotification(){
        println("Subscribing to SMS notification...")
    }
    public fun updateUserProfile(customer: Customer){
        println("Updating user profile ${customer.name}......" )
    }
    public fun changePassword(customer: Customer){
        println("Updating user ${customer.name}.....")
    }
}