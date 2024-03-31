import { DummyJsonCachingProxy } from "./dummy-json-caching-proxy";

const apiProxy = new DummyJsonCachingProxy();

(async function main() {
  console.log("Calling for the first time.................................................................................................\n");
  let startTime = new Date().getTime();

  let products = await apiProxy.getAllProducts();
  let recipes = await apiProxy.getAllRecipes();
  console.log(products, recipes);

  console.log("completion Time: ", getCompletionTime(startTime) + "ms\n\n");

  console.log("Calling for the second time.................................................................................................\n");
  startTime = new Date().getTime();

  products = await apiProxy.getAllProducts();
  recipes = await apiProxy.getAllRecipes();
  console.log(products, recipes);

  console.log("completion Time: ", getCompletionTime(startTime) + "ms");
})();

function getCompletionTime(startTime: number) {
  return new Date().getTime() - startTime;
}
