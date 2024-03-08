import { Accordion, Text } from "@mantine/core"

import { recipes } from '../models/temp_recipes';
import "../styles/recipe_list.css";

export function RecipeList() {
    const recipeList = recipes.map((recipe) => {
        return (
            <Accordion.Item key={recipe.id} value={recipe.name}>
                <Accordion.Control>{recipe.name}</Accordion.Control>
                <Accordion.Panel>
                    <h3>Ingredients:</h3>
                    <Text className="textbox">
                        {recipe.ingredients}
                    </Text>

                    <h3>Instructions:</h3>
                    <Text className="textbox">
                        {recipe.instructions}
                    </Text>
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