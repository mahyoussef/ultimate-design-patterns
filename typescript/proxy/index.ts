import { DummyJsonCachingProxy } from "./dummy-json-caching-proxy";
import { nativeProxy } from "./native-js-proxy";

const apiProxy = new DummyJsonCachingProxy();

(async function main() {
  console.log('With api proxy:\n');
  console.log(
    "Calling for the first time.................................................................................................\n"
  );
  let startTime = new Date().getTime();

  let products = await apiProxy.getAllProducts();
  let recipes = await apiProxy.getAllRecipes();
  console.log(products, recipes);

  console.log("completion Time: ", getCompletionTime(startTime) + "ms\n\n");

  console.log(
    "Calling for the second time.................................................................................................\n"
  );
  startTime = new Date().getTime();

  products = await apiProxy.getAllProducts();
  recipes = await apiProxy.getAllRecipes();
  console.log(products, recipes);

  console.log("completion Time: ", getCompletionTime(startTime) + "ms\n\n");



  console.log("With native proxy:\n");
  console.log(
    "[NATIVE] Calling for the first time.................................................................................................\n"
  );
  startTime = new Date().getTime();
  products = await nativeProxy.getAllProducts();
  recipes = await nativeProxy.getAllRecipes();
  console.log(products, recipes);
  
  console.log("completion Time: ", getCompletionTime(startTime) + "ms\n\n");
  
  console.log(
    "[NATIVE] Calling for the second time.................................................................................................\n"
  );
  startTime = new Date().getTime();
  products = await nativeProxy.getAllProducts();
  recipes = await nativeProxy.getAllRecipes();
  console.log(products, recipes);
  
  console.log("[NATIVE] completion Time: ", getCompletionTime(startTime) + "ms");
})();

(async function mainWithNativeProxy() {
})();

function getCompletionTime(startTime: number) {
  return new Date().getTime() - startTime;
}
