import { Accordion, Text, Title, Space, Button, Group } from "@mantine/core"
import { useState, useEffect } from "react";

import { serverClient } from "../controllers/server_client"

import "../styles/recipe_list.css";

export function RecipeList() {
    const [recipes, setRecipes] = useState<any[]>([]);
    useEffect(() => {
        serverClient.getSavedRecipes()
            .then((data) => setRecipes(data))
            .catch((error) => console.log(error));
    }, [])

    const recipeList = recipes.map((recipe) => {
        return (
            <Accordion.Item key={recipe.id} value={recipe.title}>
                <Accordion.Control>{recipe.title}</Accordion.Control>
                <Accordion.Panel>
                    <h3>Ingredients:</h3>
                    <Text className="textbox">
                        {recipe.ingredients}
                    </Text>

                    <h3>Instructions:</h3>
                    <Text className="textbox">
                        {recipe.instructions}
                    </Text>

                    <Space h="md" />

                    <Group>
                        <Button bg={"red"}>
                            Delete
                        </Button>
                        <Button bg={"blue"}>
                            Edit
                        </Button>
                    </Group>
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