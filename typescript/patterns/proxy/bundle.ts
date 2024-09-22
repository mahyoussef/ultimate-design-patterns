import { DummyThirdPartyApiService } from "./dummy-3rd-party-api-service";
import { DummyJsonCachingProxy } from "./dummy-json-caching-proxy";
import { nativeJsProxy } from "./native-js-proxy";

const apiProxy = new DummyJsonCachingProxy();

(async function main() {
  console.log("With api proxy:\n");
  console.log(
    "Calling for the first time.................................................................................................\n"
  );
  await logApiCall(apiProxy);

  console.log(
    "Calling for the second time.................................................................................................\n"
  );
  await logApiCall(apiProxy);

  console.log("With native proxy:\n");
  console.log(
    "[NATIVE] Calling for the first time.................................................................................................\n"
  );
  await logProxyCall(nativeJsProxy);

  console.log(
    "[NATIVE] Calling for the second time.................................................................................................\n"
  );
  await logProxyCall(nativeJsProxy);
})();

async function logApiCall(apiProxy: DummyJsonCachingProxy) {
  const startTime = new Date().getTime();

  const products = await apiProxy.getAllProducts();
  const recipes = await apiProxy.getAllRecipes();
  console.log("[NATIVE] ", products, recipes);

  console.log("completion Time: ", getCompletionTime(startTime) + "ms\n\n");
}

async function logProxyCall(nativeJsProxy: DummyThirdPartyApiService) {
  const startTime = new Date().getTime();

  const products = await nativeJsProxy.getAllProducts();
  const recipes = await nativeJsProxy.getAllRecipes();
  console.log(products, recipes);

  console.log("completion Time: ", getCompletionTime(startTime) + "ms\n\n");
}

function getCompletionTime(startTime: number) {
  return new Date().getTime() - startTime;
}
