import { useForm } from "@mantine/form";
import { Box, TextInput, Textarea, Button, Space, Flex } from "@mantine/core";

export function AddRecipeForm(props: any) {
    const recipeForm = useForm({
        initialValues: {
            name: "",
            ingredients: "",
            instructions: "",
        },
    });

    function handleSubmit(){
        if (recipeForm.values.name && recipeForm.values.ingredients && recipeForm.values.instructions) {
            props.onClose();
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
                            onClick={handleSubmit}
                            bg={"green"}
                        >
                            Submit Recipe
                        </Button>
                    </Flex>
                </form>
            </Box>
        </>
    );
}