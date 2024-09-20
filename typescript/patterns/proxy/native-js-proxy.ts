import { DummyThirdPartyApiService } from "./dummy-3rd-party-api-service";
import { DummyJsonApi } from "./dummy-json-api.interface";
import { DummyJsonCachingProxy } from "./dummy-json-caching-proxy";

const cachedResponse = new Map();

export const nativeJsProxy = new Proxy(new DummyThirdPartyApiService(), {
  /**
   * Retrieves the value of a property from the target object,
   * caching the result if it's a function.
   *
   * @param target - The target object being proxied.
   * @param property - The property being accessed.
   * @returns The value of the property.
   */
  get(target: DummyJsonApi, property: keyof DummyJsonApi) {
    // If the property is a function
    if (typeof target[property] === "function") {
      // If it's the 'getAllProducts' function
      if (property === "getAllProducts") {
        // Return an async function that first checks the cache,
        // and if the result is not cached, fetches it from the network and caches it.
        return async () => {
          const cacheKey = "getAllProducts"; // Key for the cache

          // If the result is already cached
          if (cachedResponse.has(cacheKey)) {
            console.log("[NATIVE] Getting products from cache...");
            return cachedResponse.get(cacheKey);
          }

          console.log("[NATIVE] Getting products from network...");
          const products = await target.getAllProducts(); // Fetch from network

          cachedResponse.set(cacheKey, products); // Cache the result
          return products;
        };
      }
      // If it's the 'getAllRecipes' function
      else if (property === "getAllRecipes") {
        // Return an async function that first checks the cache,
        // and if the result is not cached, fetches it from the network and caches it.
        return async function () {
          // Key for the cache
          const cacheKey = "getAllRecipes";

          // If the result is already cached
          if (cachedResponse.has(cacheKey)) {
            console.log("[NATIVE] Getting recipes from cache...");
            return cachedResponse.get(cacheKey);
          }

          console.log("[NATIVE] Getting recipes from network...");
          const recipes = await target.getAllRecipes(); // Fetch from network

          cachedResponse.set(cacheKey, recipes); // Cache the result
          return recipes;
        };
      }

      // If it's a regular property, just bind it to the target
      return (target[property] as Function).bind(target);
    }
    // If it's not a function, return it as is
    return target[property];
  },
});
