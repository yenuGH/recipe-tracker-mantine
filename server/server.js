const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let recipes = [
    {
        id: "1",
        title: "burger",
        ingredients: ["beef", "bread", "lettuce", "tomato", "cheese"],
        instructions: "cook beef, put beef on bread, add lettuce, tomato, and cheese",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "2",
        title: "pizza",
        ingredients: ["dough", "tomato sauce", "cheese", "pepperoni"],
        instructions: "spread tomato sauce on dough, add cheese and pepperoni, bake",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "3",
        title: "salad",
        ingredients: ["lettuce", "tomato", "cucumber", "onion", "dressing"],
        instructions: "cut lettuce, tomato, cucumber, and onion, mix together, add dressing",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "4",
        title: "pasta",
        ingredients: ["pasta", "tomato sauce", "cheese"],
        instructions: "boil pasta, add tomato sauce and cheese",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "5",
        title: "tacos",
        ingredients: ["beef", "tortilla", "lettuce", "tomato", "cheese"],
        instructions: "cook beef, put beef on tortilla, add lettuce, tomato, and cheese",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "6",
        title: "chicken",
        ingredients: ["chicken", "salt", "pepper", "oil"],
        instructions: "season chicken with salt and pepper, cook chicken in oil",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {   
        id: "7",
        title: "sandwich",
        ingredients: ["bread", "turkey", "lettuce", "tomato", "cheese"],
        instructions: "put turkey on bread, add lettuce, tomato, and cheese",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "8",
        title: "soup",
        ingredients: ["chicken broth", "vegetables", "chicken"],
        instructions: "boil chicken broth, add vegetables and chicken",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "9",
        title: "steak",
        ingredients: ["steak", "salt", "pepper", "oil"],
        instructions: "season steak with salt and pepper, cook steak in oil",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "10",
        title: "fish",
        ingredients: ["fish", "salt", "pepper", "oil"],
        instructions: "season fish with salt and pepper, cook fish in oil",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "11",
        title: "rice",
        ingredients: ["rice", "water"],
        instructions: "boil rice in water",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "12",
        title: "cake",
        ingredients: ["flour", "sugar", "eggs", "milk", "butter"],
        instructions: "mix flour, sugar, eggs, milk, and butter, bake",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "13",
        title: "cookies",
        ingredients: ["flour", "sugar", "eggs", "butter", "chocolate chips"],
        instructions: "mix flour, sugar, eggs, butter, and chocolate chips, bake",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "14",
        title: "pie",
        ingredients: ["flour", "sugar", "eggs", "butter", "fruit"],
        instructions: "mix flour, sugar, eggs, butter, and fruit, bake",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "15",
        title: "pancakes",
        ingredients: ["flour", "sugar", "eggs", "milk", "butter"],
        instructions: "mix flour, sugar, eggs, milk, and butter, cook",
        lastTimeModified: "2021-10-01T12:00:00"
    },
    {
        id: "16",
        title: "waffles",
        ingredients: ["flour", "sugar", "eggs", "milk", "butter"],
        instructions: "mix flour, sugar, eggs, milk, and butter, cook",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "17",
        title: "french toast",
        ingredients: ["bread", "eggs", "milk", "butter"],
        instructions: "mix eggs and milk, dip bread in mixture, cook",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "18",
        title: "omelette",
        ingredients: ["eggs", "cheese", "vegetables", "salt", "pepper"],
        instructions: "mix eggs, cheese, vegetables, salt, and pepper, cook",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "19",
        title: "scrambled eggs",
        ingredients: ["eggs", "salt", "pepper", "butter"],
        instructions: "mix eggs, salt, and pepper, cook in butter",
        lastTimeModified: "2021-10-01T12:00:00Z"
    },
    {
        id: "20",
        title: "bacon",
        ingredients: ["bacon"],
        instructions: "cook bacon",
        lastTimeModified: "2021-10-01T12:00:00Z"
    }
]

app.get("/recipes/all", (req, res) => {
    res.json(recipes);
    console.log("List of recipes have been sent...");
});

app.post("/recipes/add", (req, res) => {
    console.log("Received a new recipe...");
    
    let newRecipe = req.body;
    console.log(newRecipe);
    recipes.push(newRecipe);

    res.json(recipes);
    console.log("New recipe has been added...");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000...");
});