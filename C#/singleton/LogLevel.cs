using System;

namespace Singleton
{
    public class Logger
    {
        private static Logger instance;
        private LogLevel logLevel = LogLevel.INFO;
        private readonly object lockObject = new object();

        private Logger() { }

        public void SetLogLevel(LogLevel logLevel)
        {
            this.logLevel = logLevel;
        }

        public void LogDebug(string message)
        {
            if (logLevel <= LogLevel.DEBUG)
            {
                Console.WriteLine("DEBUG: " + message);
            }
        }

        public void LogInfo(string message)
        {
            if (logLevel <= LogLevel.INFO)
            {
                Console.WriteLine("INFO: " + message);
            }
        }

        public void LogWarn(string message)
        {
            if (logLevel <= LogLevel.WARN)
            {
                Console.WriteLine("WARN: " + message);
            }
        }

        public void LogError(string message)
        {
            if (logLevel <= LogLevel.ERROR)
            {
                Console.WriteLine("ERROR: " + message);
            }
        }

        public static Logger GetInstance()
        {
            if (instance == null)
            {
                lock (instance)
                {
                    if (instance == null)
                    {
                        instance = new Logger();
                    }
                }
            }
            return instance;
        }
    }
}
