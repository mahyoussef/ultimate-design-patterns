namespace Singleton;

/// <summary>
/// The Singleton class defines the <see cref="GetInstance"/> method that serves as an
/// alternative to constructor and lets clients access the same instance of
/// this class over and over.
///
/// The Singleton should always be a 'sealed' class to prevent class
/// inheritance through external classes and also through nested classes.
/// </summary>
public sealed class Logger
{
    private static Logger? s_instance;
    private LogLevel _logLevel = LogLevel.INFO;
    private readonly static object LockObject = new();

    private Logger() { }

    public void SetLogLevel(LogLevel logLevel)
        => _logLevel = logLevel;

    public void LogDebug(string message)
    {
        if (_logLevel <= LogLevel.DEBUG)
        {
            Console.WriteLine($"DEBUG: {message}");
        }
    }

    public void LogInfo(string message)
    {
        if (_logLevel <= LogLevel.INFO)
        {
            Console.WriteLine($"INFO: {message}");
        }
    }

    public void LogWarn(string message)
    {
        if (_logLevel <= LogLevel.WARN)
        {
            Console.WriteLine($"WARN: {message}");
        }
    }

    public void LogError(string message)
    {
        if (_logLevel <= LogLevel.ERROR)
        {
            Console.WriteLine($"ERROR: {message}");
        }
    }

    /// <summary>
    /// Gets the single instance of the <see cref="Logger"/> class.
    /// </summary>
    /// <returns>The same instance from the <see cref="Logger"/></returns>
    public static Logger GetInstance()
    {
        if (s_instance is null)
        {
            lock (LockObject)
            {
                s_instance ??= new Logger();
            }
        }

        return s_instance;
    }
}
