// ExpressJS
const express = require('express');
const app = express();

// Mongoose + MongoDB client
const { mongooseHelper, Recipe, Ingredient } = require('./controllers/mongoose_client');

// CORS policy
const cors = require('cors');
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
}


// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/recipes", async (req, res) => {
    let result = await mongooseHelper.getRecipes();
    console.log("List of recipes sent...");
    res.json(result);
});

app.post("/recipes/add", async (req, res) => {
    let recipe = req.body;
    let result = await mongooseHelper.addRecipe(recipe);
    
    console.log("New recipe added: " + result);
    
    res.json(result);
});

app.delete("/recipes/delete/:id", async (req, res) => {
    let id = req.params.id;
    console.log("Deleting recipe with ID: " + id);
    
    let result = await mongooseHelper.deleteRecipe(id);
    console.log("Recipe deleted: " + result);
    
    res.json(result);
});

app.put("/recipes/update/:id", async (req, res) => {
    let recipe = req.body;
    console.log("Updating recipe with ID: " + recipe.id);

    let result = await mongooseHelper.updateRecipe(recipe.id, recipe);
    console.log("Recipe updated: " + result);
    
    res.json(result);
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});