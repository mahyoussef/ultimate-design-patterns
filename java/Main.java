import java.util.logging.Logger;

public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getLogger("MyLogger");

        // Retrieve the same Logger instance again
        Logger logger2 = Logger.getLogger("MyLogger");
        System.out.println(logger1 == logger2); // Output: true

    }
}