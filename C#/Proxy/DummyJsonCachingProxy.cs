namespace Proxy;

/// <summary>
/// The Proxy has an interface identical to the <see cref="DummyThirdPartyApiService"/>.
/// </summary>
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

    /// <summary>
    /// The most common applications of the Proxy pattern are lazy loading,
    /// caching, controlling the access, logging, etc. A Proxy can perform
    /// one of these things and then, depending on the result, pass the
    /// execution to the same method in a linked implemented <see cref="IDummyJsonApi"/> object.
    /// </summary>
    /// <returns></returns>
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
