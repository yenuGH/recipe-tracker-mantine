const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

let recipes = [
    {
        title: "burger",
        ingredients: "beef, bread, lettuce, tomato, cheese",
        instructions: "cook beef, put beef on bread, add lettuce, tomato, and cheese"
    },
    {
        title: "pizza",
        ingredients: "dough, tomato sauce, cheese, pepperoni",
        instructions: "spread tomato sauce on dough, add cheese and pepperoni, bake"
    },
    {
        title: "salad",
        ingredients: "lettuce, tomato, cucumber, onion, dressing",
        instructions: "cut lettuce, tomato, cucumber, and onion, mix together, add dressing"
    },
    {
        title: "pasta",
        ingredients: "pasta, tomato sauce, cheese",
        instructions: "boil pasta, add tomato sauce and cheese"
    },
    {
        title: "tacos",
        ingredients: "beef, tortilla, lettuce, tomato, cheese",
        instructions: "cook beef, put beef on tortilla, add lettuce, tomato, and cheese"
    },
    {
        title: "chicken",
        ingredients: "chicken, salt, pepper, oil",
        instructions: "season chicken with salt and pepper, cook chicken in oil"
    },
    {
        title: "sandwich",
        ingredients: "bread, turkey, lettuce, tomato, cheese",
        instructions: "put turkey on bread, add lettuce, tomato, and cheese"
    },
    {
        title: "soup",
        ingredients: "chicken broth, vegetables, chicken",
        instructions: "boil chicken broth, add vegetables and chicken"
    },
    {
        title: "steak",
        ingredients: "steak, salt, pepper, oil",
        instructions: "season steak with salt and pepper, cook steak in oil"
    },
    {
        title: "fish",
        ingredients: "fish, salt, pepper, oil",
        instructions: "season fish with salt and pepper, cook fish in oil"
    }
]

app.get('/recipes/all', (req, res) => {
    res.json(recipes);
    console.log("list of recipes sent");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});