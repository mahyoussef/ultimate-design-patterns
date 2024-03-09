namespace Proxy;

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
