import { Accordion } from "@mantine/core"
import { recipes } from '../models/temp_recipes';

export function RecipeList() {
    const recipeList = recipes.map((recipe) => {
        return (
            <Accordion.Item key={recipe.id} value={recipe.name}>
                <Accordion.Control>{recipe.name}</Accordion.Control>
                <Accordion.Panel>
                    <p>Ingredients: {recipe.ingredients}</p>
                    <p>Instructions: {recipe.instructions}</p>
                </Accordion.Panel>
            </Accordion.Item>
        );
    });
    
    return (
        <>
            <Accordion variant="separated" radius={"md"}>
                {recipeList}
            </Accordion>
        </>
    );
}