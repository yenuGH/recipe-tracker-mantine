const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

const { Ingredient, Recipe } = require("./controllers/mongoose_client.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/recipes/all", async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('ingredients', 'name -_id');
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/recipes/add", async (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    });

    try {
        const newRecipe = await recipe.save();
        res.status(201).json(newRecipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});