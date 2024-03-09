namespace Proxy;

public sealed class DummyJsonCachingProxy : IDummyJsonApi
{
    private readonly IDummyJsonApi _service;
    private readonly Dictionary<string, string> _cachingLayer;
    private const string PRODUCTS_ENDPOINT = "https://dummyjson.com/products";
    private const string RECIPES_ENDPOINT = "https://dummyjson.com/recipes";

    public DummyJsonCachingProxy()
    {
        _service = new DummyThirdPartyApiService();
        _cachingLayer = [];
    }

    public string GetAllProducts()
    {
        if (_cachingLayer.TryGetValue(PRODUCTS_ENDPOINT, out string? cachedResult))
        {
            return cachedResult;
        }

        var recipesResponse = _service.GetAllProducts();
        _cachingLayer[PRODUCTS_ENDPOINT] = recipesResponse;
        return recipesResponse;
    }

    public string GetAllRecipes()
    {
        if (_cachingLayer.TryGetValue(RECIPES_ENDPOINT, out string? cachedResult))
        {
            return cachedResult;
        }

        var recipesResponse = _service.GetAllRecipes();
        _cachingLayer[RECIPES_ENDPOINT] = recipesResponse;
        return recipesResponse;
    }
}
