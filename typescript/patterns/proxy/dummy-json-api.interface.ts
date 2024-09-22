import { TProduct, TRecipe } from "./dummy-3rd-party-api-service";

export interface DummyJsonApi {
  getAllProducts: () => Promise<Array<TProduct>>;
  getAllRecipes: () => Promise<Array<TRecipe>>;
}
