export interface Recipe {
    id: number;
    title: string;
    ingredients: String[];
    recipeInstructions: string;
    lastTimeModified: Date;
}