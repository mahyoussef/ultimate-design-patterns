package solid

class EmailNotification {
    fun sendEmailNotIfLocation(customer: Customer, massage: String){
        println("${customer.email} + with massage $massage")
    }
}