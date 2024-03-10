import { Accordion, Text, Title, Space, Button, Group } from "@mantine/core"
import { useState, useEffect } from "react";

import { Recipe } from "../models/recipe";
import { serverClient } from "../controllers/server_client"

import "../styles/recipe_list.css";

export function RecipeList() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        serverClient.getRecipes()
            .then((data) => {
                setRecipes(data.map((recipe: any) => Recipe.fromJSON(recipe)));
            })
            .catch((error) => console.log(error));
    }, [])

    async function handleDelete(id: string){
        if (confirm("Are you sure you want to delete this recipe?")){
            await serverClient.deleteRecipe(id)
                .then(() => {
                    window.location.reload();
                })
                .catch((error) => console.log(error));

            alert("Recipe was deleted.");
            console.log(`Recipe with ID ${id} was deleted.`);
        }
        else {
            alert("Recipe was not deleted.");
        }
    }

    async function handleEdit(id: string){
        console.log(`Editing recipe with ID ${id}.`);
    }

    const recipeList = recipes.map((recipe) => {
        return (
            <Accordion.Item key={recipe.id} value={recipe.getTitle()}>
                <Accordion.Control>{recipe.getTitle()}</Accordion.Control>
                <Accordion.Panel>
                    <h3>Ingredients:</h3>
                    <Text className="textbox"      >
                        {recipe.getIngredients()}
                    </Text>

                    <h3>Instructions:</h3>
                    <Text className="textbox">
                        {recipe.getInstructions()}
                    </Text>

                    <Space h="md" />

                    <Group>
                        <Button bg={"red"} onClick={() => handleDelete(recipe.id ?? "")}>
                            Delete
                        </Button>

                        <Button bg={"blue"} onClick={() => handleEdit(recipe.id ?? "")}>
                            Edit
                        </Button>

                        <Text>
                            Last Modified: {recipe.getLastTimeModified()}
                        </Text>
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