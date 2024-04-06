class Logger private constructor() {

    init {
        println("Logger instance initialized")
    }

    companion object {
        private var instance: Logger? = null

        fun getInstance(): Logger {
            if (instance == null) {
                instance = Logger()
            }
            return instance!!
        }
    }

    fun log(message: String) {
        println("[${java.time.LocalDateTime.now()}] $message")
    }

}

