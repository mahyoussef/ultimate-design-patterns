package proxy;

import java.util.HashMap;
import java.util.Map;

public class DummyJsonCachingProxy implements DummyJsonApi {
    private Map<String, String> cachingLayer;
    private static final String PRODUCTS_ENDPOINT = "https://dummyjson.com/products";
    private static final String RECIPES_ENDPOINT = "https://dummyjson.com/recipes";
    private final DummyJsonApi dummyJsonApi;

    public DummyJsonCachingProxy() {
        this.dummyJsonApi = new DummyThirdPartyApiService();
        this.cachingLayer = new HashMap<>();
    }

    @Override
    public String getAllProducts() {
        if (cachingLayer.containsKey(PRODUCTS_ENDPOINT)) {
            return cachingLayer.get(PRODUCTS_ENDPOINT);
        }
        String productResponse = dummyJsonApi.getAllProducts();
        cachingLayer.put(PRODUCTS_ENDPOINT, productResponse);
        return productResponse;
    }

    @Override
    public String getAllRecipes() {
        if (cachingLayer.containsKey(RECIPES_ENDPOINT)) {
            return cachingLayer.get(RECIPES_ENDPOINT);
        }
        String recipesResponse = dummyJsonApi.getAllRecipes();
        cachingLayer.put(RECIPES_ENDPOINT, recipesResponse);
        return recipesResponse;
    }
}
