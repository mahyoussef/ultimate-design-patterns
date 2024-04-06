fun main() {
    val logger1 = Logger.getInstance()
    val logger2 = Logger.getInstance()

    println("${logger1 === logger2}")

    logger1.log("An unexpected error occurred while processing data.")
    logger2.log("Processing completed successfully.")

}