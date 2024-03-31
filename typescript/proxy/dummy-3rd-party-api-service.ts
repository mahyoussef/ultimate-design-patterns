import { DummyJsonApi } from "./dummy-json-api.interface";

export class DummyThirdPartyApiService implements DummyJsonApi {
  private readonly PRODUCTS_ENDPOINT = "https://dummyjson.com/products?limit=2";
  private readonly RECIPES_ENDPOINT = "https://dummyjson.com/recipes?limit=2";

  async getAllProducts(): Promise<any> {
    return await fetch(this.PRODUCTS_ENDPOINT).then((response) =>
      response.json()
    );
  }
  async getAllRecipes(): Promise<any> {
    return await fetch(this.RECIPES_ENDPOINT).then((response) =>
      response.json()
    );
  }
}
