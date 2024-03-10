using Microsoft.Extensions.DependencyInjection;

namespace Builder;

public sealed class ProductService
{
    /// <summary>
    /// More commonly used in ASP.NET applications
    /// </summary>
    /// <returns></returns>
    private IHttpClientBuilder CreateBuilder()
    {
        ServiceCollection services = new();

        // Can Chain other calls for further configuration
        IHttpClientBuilder x = services.AddHttpClient<ProductService>("product")
            .ConfigureHttpClient(client =>
            {
                client.BaseAddress = new Uri("https://dummyjson.com/");
                client.DefaultRequestHeaders.Add("Accept", "application/json");
                client.Timeout = TimeSpan.FromSeconds(10);
            });

        return x;
    }

    public string GetProducts()
    {
        IHttpClientBuilder builder = CreateBuilder();

        IHttpClientFactory clientFactory = builder.Services.BuildServiceProvider()
            .GetRequiredService<IHttpClientFactory>();
            
        HttpClient client = clientFactory.CreateClient("product");
        
        // Usage of Result is not recommended in production code
        // This is just for demonstration purposes
        // use async/await instead
        var response = client.GetAsync("products/1").Result;
        var products = response.Content.ReadAsStringAsync().Result;
        return products;
    }
}
