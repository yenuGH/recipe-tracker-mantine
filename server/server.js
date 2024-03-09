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
        id: 1,
        title: "burger",
        ingredients: "beef, bread, lettuce, tomato, cheese",
        instructions: "cook beef, put beef on bread, add lettuce, tomato, and cheese"
    },
    {
        id: 2,
        title: "pizza",
        ingredients: "dough, tomato sauce, cheese, pepperoni",
        instructions: "spread tomato sauce on dough, add cheese and pepperoni, bake"
    },
    {
        id: 3,
        title: "salad",
        ingredients: "lettuce, tomato, cucumber, onion, dressing",
        instructions: "cut lettuce, tomato, cucumber, and onion, mix together, add dressing"
    },
    {
        id: 4,
        title: "pasta",
        ingredients: "pasta, tomato sauce, cheese",
        instructions: "boil pasta, add tomato sauce and cheese"
    },
    {
        id: 5,
        title: "tacos",
        ingredients: "beef, tortilla, lettuce, tomato, cheese",
        instructions: "cook beef, put beef on tortilla, add lettuce, tomato, and cheese"
    },
    {
        id: 6,
        title: "chicken",
        ingredients: "chicken, salt, pepper, oil",
        instructions: "season chicken with salt and pepper, cook chicken in oil"
    },
    {   
        id: 7,
        title: "sandwich",
        ingredients: "bread, turkey, lettuce, tomato, cheese",
        instructions: "put turkey on bread, add lettuce, tomato, and cheese"
    },
    {
        id: 8,
        title: "soup",
        ingredients: "chicken broth, vegetables, chicken",
        instructions: "boil chicken broth, add vegetables and chicken"
    },
    {
        id: 9,
        title: "steak",
        ingredients: "steak, salt, pepper, oil",
        instructions: "season steak with salt and pepper, cook steak in oil"
    },
    {
        id: 10,
        title: "fish",
        ingredients: "fish, salt, pepper, oil",
        instructions: "season fish with salt and pepper, cook fish in oil"
    },
    {
        id: 11,
        title: "rice",
        ingredients: "rice, water",
        instructions: "boil rice in water"
    },
    {
        id: 12,
        title: "cake",
        ingredients: "flour, sugar, eggs, milk, butter",
        instructions: "mix flour, sugar, eggs, milk, and butter, bake"
    },
    {
        id: 13,
        title: "cookies",
        ingredients: "flour, sugar, eggs, butter, chocolate chips",
        instructions: "mix flour, sugar, eggs, butter, and chocolate chips, bake"
    },
    {
        id: 14,
        title: "pie",
        ingredients: "flour, sugar, eggs, butter, fruit",
        instructions: "mix flour, sugar, eggs, butter, and fruit, bake"
    },
    {
        id: 15,
        title: "pancakes",
        ingredients: "flour, sugar, eggs, milk, butter",
        instructions: "mix flour, sugar, eggs, milk, and butter, cook"
    },
    {
        id: 16,
        title: "waffles",
        ingredients: "flour, sugar, eggs, milk, butter",
        instructions: "mix flour, sugar, eggs, milk, and butter, cook"
    },
    {
        id: 17,
        title: "french toast",
        ingredients: "bread, eggs, milk, butter",
        instructions: "mix eggs and milk, dip bread in mixture, cook"
    },
    {
        id: 18,
        title: "omelette",
        ingredients: "eggs, cheese, vegetables, salt, pepper",
        instructions: "mix eggs, cheese, vegetables, salt, and pepper, cook"
    },
    {
        id: 19,
        title: "scrambled eggs",
        ingredients: "eggs, salt, pepper, butter",
        instructions: "mix eggs, salt, and pepper, cook in butter"
    },
    {
        id: 20,
        title: "bacon",
        ingredients: "bacon",
        instructions: "cook bacon"
    }
]

app.get('/recipes/all', (req, res) => {
    res.json(recipes);
    console.log("list of recipes sent");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});