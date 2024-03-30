import { DummyThirdPartyApiService } from "./dummy-3rd-party-api-service";
import { DummyJsonApi } from "./dummy-json-api.interface";

const PRODUCTS_KEY = "PRODUCTS";
const RECIPES_KEY = "RECIPES";

export class DummyJsonCachingProxy implements DummyJsonApi {
  private cachingLayer = new Map();
  private apiService: DummyThirdPartyApiService;

  constructor() {
    this.apiService = new DummyThirdPartyApiService();
  }
  async getAllProducts() {
    if (this.cachingLayer.has(PRODUCTS_KEY)) {
      console.log("Getting products from cache...");
      return this.cachingLayer.get(PRODUCTS_KEY);
    }
    console.log("Getting products from network...");
    const products = await this.apiService.getAllProducts();
    this.cachingLayer.set(PRODUCTS_KEY, products);
    return products;
  }
  async getAllRecipes() {
    if (this.cachingLayer.has(RECIPES_KEY)) {
      console.log("Getting recipes from cache...");
      return this.cachingLayer.get(RECIPES_KEY);
    }
    console.log("Getting recipes from network...");
    const recipes = await this.apiService.getAllRecipes();
    this.cachingLayer.set(RECIPES_KEY, recipes);
    return recipes;
  }
}
