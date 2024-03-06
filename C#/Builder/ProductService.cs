using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Builder
{
    public class ProductService
    {
        public async Task<HttpResponseMessage> GetProducts()
        {
            var uri = new Uri("https://dummyjson.com/products/1");
            var request = new HttpRequestMessage(HttpMethod.Get, uri);
            request.Headers.Add("key1", "value1");
            request.Headers.Add("key2", "value2");
            request.Timeout = TimeSpan.FromSeconds(10);

            using (var httpClient = new HttpClient())
            {
                return await httpClient.SendAsync(request);
            }
        }
    }
}
