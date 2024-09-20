import { DummyJsonApi } from "./dummy-json-api.interface";

// /types/api.ts
export type TProduct = {};
export type TRecipe = {};

export class DummyThirdPartyApiService implements DummyJsonApi {
  private readonly PRODUCTS_ENDPOINT = "https://dummyjson.com/products?limit=2";
  private readonly RECIPES_ENDPOINT = "https://dummyjson.com/recipes?limit=2";

  async getAllProducts(): Promise<Array<TProduct>> {
    try {
      return await this.fetchDataFromApi<TProduct>(
        new URL(this.PRODUCTS_ENDPOINT),
      );
    } catch (error) {
      console.log("Cannot fetch recipes from the 3rd-party API");
      console.log(error);

      return [];
    }
  }
  async getAllRecipes(): Promise<Array<TRecipe>> {
    try {
      return await this.fetchDataFromApi<TRecipe>(
        new URL(this.RECIPES_ENDPOINT),
      );
    } catch (error) {
      console.log("Cannot fetch recipes from the 3rd-party API");
      console.log(error);

      return [];
    }
  }

  private async fetchDataFromApi<T>(href: URL): Promise<Array<T>> {
    const response = await fetch(href);
    if (!response.ok) throw new Error(response.statusText);

    return response.json() as unknown as Array<T>;
  }
}
