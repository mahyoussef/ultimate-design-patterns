package uml;

import java.time.LocalDateTime;

public class Logger {

    public void log(String message) {
        System.out.println(LocalDateTime.now() + "\033[0;32m" + " INFO " +
                "\033[0m" + + ProcessHandle.current().pid() + " --- " +
                "\u001B[34m" + Thread.currentThread().getContextClassLoader().getName() + "\033[0m" +
                " : " + message
        );
        System.out.println(LocalDateTime.now() + "\033[0;32m" + " DEBUG " +
                "\033[0m" + + ProcessHandle.current().pid() + " --- " +
                "\u001B[34m" + Thread.currentThread().getContextClassLoader().getName() + "\033[0m" +
                " : " + message
        );
        System.out.println(LocalDateTime.now() + "\u001B[33m" + " WARN " +
                "\033[0m" + + ProcessHandle.current().pid() + " --- " +
                "\u001B[34m" + Thread.currentThread().getContextClassLoader().getName() + "\033[0m" +
                " : " + message
        );
        System.out.println(LocalDateTime.now() + "\u001B[31m" + " ERROR " +
                "\033[0m" + + ProcessHandle.current().pid() + " --- " +
                "\u001B[34m" + Thread.currentThread().getContextClassLoader().getName() + "\033[0m" +
                " : " + message
        );
    }
}
