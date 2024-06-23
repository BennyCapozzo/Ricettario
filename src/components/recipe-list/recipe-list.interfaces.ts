export interface IRecipeListProps {
  recipes: IRecipe[];
}

export interface IRecipe {
  id: string;
  name: string;
  description: string;
  image: string;
}