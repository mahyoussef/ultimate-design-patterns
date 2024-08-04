import observer.*

fun main() {

    println()

    val onlineMarketPlace = OnlineMarketPlace()

    val customer1 = Customer("Ahmed")
    val customer2 = Customer("Hamza")
    val customer3 = Customer("Asem")
    val customer4 = Customer("Fathy")
    val jobSeeker = JobFinder("Yousef")


    onlineMarketPlace.subscribe(EventType.NEW_PRODUCT, customer1)
    onlineMarketPlace.subscribe(EventType.NEW_PRODUCT, customer2)
    onlineMarketPlace.subscribe(EventType.NEW_OFFER, customer3)
    onlineMarketPlace.subscribe(EventType.NEW_OFFER, customer4)
    onlineMarketPlace.subscribe(EventType.JOB_OPENING, jobSeeker)

    onlineMarketPlace.addNewOffer(Offer(message = "5 K rice for only 10$"))
    onlineMarketPlace.addNewProduct(Product(name = "Mobile Device", price = 1000.0))
    onlineMarketPlace.addNewJobOpening("Marketing Director")

}