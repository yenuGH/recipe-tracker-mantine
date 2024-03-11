import { useForm } from "@mantine/form";
import { Box, TextInput, Textarea, Button, Space, Flex } from "@mantine/core";

import { serverClient } from "../controllers/server_client";

export function EditRecipeForm(props: any) {
    const recipeForm = useForm({
        initialValues: {
            name: props.recipe.getTitle(),
            ingredients: props.recipe.getIngredients(),
            instructions: props.recipe.getInstructions(),
        },
    });

    async function handleSubmitEdit(){
        if (recipeForm.values.name && recipeForm.values.ingredients && recipeForm.values.instructions) {
            props.onClose();

            let recipe = {
                id: props.recipe.id,
                title: recipeForm.values.name.toLowerCase(),
                ingredients: (recipeForm.values.ingredients.toLowerCase().split(",")),
                instructions: recipeForm.values.instructions.toLowerCase(),
                lastTimeModified: new Date()
            }

            await serverClient.updateRecipe(recipe)
                .then((data) => console.log(data))
                .catch((error) => console.log(error));

            alert("Recipe was updated.");
            window.location.reload();
        }
    }

    return (
        <>
            <Box maw={600} mx={"auto"}>
                <form onSubmit={recipeForm.onSubmit((values) => console.log(values))}>
                    <TextInput 
                        required
                        label="Name"
                        value={recipeForm.values.name}
                        onChange={(event) => recipeForm.setFieldValue("name", event.currentTarget.value)}
                    />

                    <Textarea 
                        autosize
                        minRows={5}
                        required
                        label="Ingredients"
                        value={recipeForm.values.ingredients}
                        onChange={(event) => recipeForm.setFieldValue("ingredients", event.currentTarget.value)}
                    />

                    <Textarea 
                        autosize
                        minRows={5}
                        required
                        label="Instructions"
                        value={recipeForm.values.instructions}
                        onChange={(event) => recipeForm.setFieldValue("instructions", event.currentTarget.value)}
                    />

                    <Space h={"md"} />

                    <Flex justify={"end"}>
                        <Button 
                            type="button"
                            onClick={recipeForm.reset}
                            bg={"red"}
                        >
                            Reset
                        </Button>

                        <Space w={5} />

                        <Button 
                            type="submit"
                            onClick={handleSubmitEdit}
                            bg={"green"}
                        >
                            Update Recipe
                        </Button>
                    </Flex>
                </form>
            </Box>
        </>
    );
}