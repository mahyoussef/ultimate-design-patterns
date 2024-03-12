using System.Diagnostics;

using Proxy;

DummyJsonCachingProxy proxy = new();

long start = Stopwatch.GetTimestamp();
string productsJsonString = proxy.GetAllProducts();
//Console.WriteLine(productsJsonString);
Console.WriteLine($"Time taken for first time: {Stopwatch.GetElapsedTime(start)}");

Console.WriteLine();

// Now Fetching from Cache
long start2 = Stopwatch.GetTimestamp();
string cachedProductsJsonString = proxy.GetAllProducts();
//Console.WriteLine(cachedProductsJsonString);
Console.WriteLine($"Time taken for second time: {Stopwatch.GetElapsedTime(start2)}");
