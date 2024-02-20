package proxy;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;

public class DummyThirdPartyApiService implements DummyJsonApi {

    private static final String PRODUCTS_ENDPOINT = "https://dummyjson.com/products";
    private static final String RECIPES_ENDPOINT = "https://dummyjson.com/recipes";
    public DummyThirdPartyApiService() {
    }

    public String getAllProducts() {
        try {
            System.out.println("Fetching products...");
            Thread.sleep(2000);
            HttpRequest httpRequest = HttpRequest.newBuilder()
                    .uri(new URI(PRODUCTS_ENDPOINT))
                    .GET()
                    .build();
            HttpClient httpClient = HttpClient.newBuilder().build();
            return httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString()).body();
        } catch (URISyntaxException | IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    public String getAllRecipes() {
        try {
            System.out.println("Fetching recipes...");
            Thread.sleep(2000);
            HttpRequest httpRequest = HttpRequest.newBuilder()
                    .uri(new URI(RECIPES_ENDPOINT))
                    .GET()
                    .build();
            HttpClient httpClient = HttpClient.newBuilder().build();
            return httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString()).body();
        } catch (URISyntaxException | IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
