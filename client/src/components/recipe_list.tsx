import { Accordion, Text, Title, Space } from "@mantine/core"

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
            <Title order={3} td={"underline"}>
                Saved Recipes
            </Title>

            <Space h="md" />

            <Accordion variant="separated" radius={"md"}>
                {recipeList}
            </Accordion>
        </>
    );
}