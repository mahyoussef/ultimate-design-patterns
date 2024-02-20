package builder;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

import static java.time.temporal.ChronoUnit.SECONDS;

public class ProductService {

    public HttpResponse<String> getProducts() throws URISyntaxException, IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(new URI("https://dummyjson.com/products/1"))
                .headers("key1", "value1", "key2", "value2")
                .timeout(Duration.of(10, SECONDS))
                .GET()
                .build();
        java.net.http.HttpClient client = java.net.http.HttpClient.newBuilder()
                .build();
        return client.send(request, HttpResponse.BodyHandlers.ofString());
    }
}
