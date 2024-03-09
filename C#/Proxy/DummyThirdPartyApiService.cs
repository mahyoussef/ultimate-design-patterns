namespace Proxy;

/// <summary>
/// The <see cref="DummyThirdPartyApiService"/> contains some core business logic. Usually,
/// the classes are capable of doing some useful work which may also be very slow or
/// sensitive - e.g. correcting input data. A Proxy can solve these issues
/// without any changes to the <see cref="DummyThirdPartyApiService"/>'s code.
/// </summary>
public sealed class DummyThirdPartyApiService : IDummyJsonApi
{
    private static readonly HttpClient HttpClient = new();

    public string GetAllProducts()
    {
        try
        {
            Console.WriteLine("Fetching Products...");
            Thread.Sleep(2000);

            // Usage of Result is not recommended in production code
            // use async/await instead
            var response = HttpClient.GetAsync("https://dummyjson.com/products/").Result;
            var productsString =  response.Content.ReadAsStringAsync().Result;
            return productsString;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public string GetAllRecipes()
    {
        try
        {
            Console.WriteLine("Fetching Recipes...");
            Thread.Sleep(2000);

            // Usage of Result is not recommended in production code
            // use async/await instead
            var response = HttpClient.GetAsync("https://dummyjson.com/recipes/").Result;
            var productsString = response.Content.ReadAsStringAsync().Result;
            return productsString;
        }
        catch (Exception)
        {
            throw;
        }
    }
}
