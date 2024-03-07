using Singleton;

Logger logger1 = Logger.GetInstance();
Logger logger2 = Logger.GetInstance();

if (logger1 == logger2)
{
    Console.WriteLine("Singleton works, both variables contain the same instance.");
}
else
{
    Console.WriteLine("Singleton failed, variables contain different instances.");
}
