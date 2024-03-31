export interface DummyJsonApi {
  getAllProducts: () => Promise<string>;
  getAllRecipes: () => Promise<string>;
}
