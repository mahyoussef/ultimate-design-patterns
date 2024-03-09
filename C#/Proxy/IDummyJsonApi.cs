namespace Proxy;

/// <summary>
/// The <see cref="IDummyJsonApi"/> interface declares common operations for both <see cref="DummyThirdPartyApiService"/> and
/// the Proxy. As long as the client works with <see cref="DummyThirdPartyApiService"/> using this
/// interface, you'll be able to pass it a proxy instead of a real class.
/// </summary>
public interface IDummyJsonApi
{
    string GetAllProducts();
    string GetAllRecipes();
}
