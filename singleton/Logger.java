package singleton;

public class Logger {

    private static Logger instance;
    private LogLevel logLevel = LogLevel.INFO;
    private Logger(){}
    public void setLogLevel(LogLevel logLevel) {
        this.logLevel = logLevel;
    }

    public void logDebug(String message) {
        if(logLevel.ordinal() <= LogLevel.DEBUG.ordinal()) {
            System.out.println("DEBUG: " + message);
        }
    }
    public void logInfo(String message) {
        if(logLevel.ordinal() <= LogLevel.INFO.ordinal()) {
            System.out.println("INFO: " + message);
        }
    }
    public void logWarn(String message) {
        if(logLevel.ordinal() <= LogLevel.WARN.ordinal()) {
            System.out.println("WARN: " + message);
        }
    }
    public void logError(String message) {
        if(logLevel.ordinal() <= LogLevel.ERROR.ordinal()) {
            System.out.println("ERROR: " + message);
        }
    }

    public static Logger getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if(instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }
}
