export interface Recipe {
    id: number;
    title: string;
    recipeInstructions: string;
    lastTimeModified: Date;
    ingredients: number[]; // a list containing the ids of the ingredients
}