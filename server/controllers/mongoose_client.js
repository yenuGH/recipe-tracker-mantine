// Mongoose + MongoDB
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/cmpt372-assignment2")
    .then(() => { console.log("Connected to the database") })
    .catch((error) => { console.log("Error connecting to the database: " + error) 
});

let ingredientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
    }
);
const Ingredient = mongoose.model("Ingredient", ingredientSchema);

let recipeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        ingredients: {
            type: [mongoose.SchemaTypes.ObjectId],
            ref: "Ingredient",
            required: true
        },
        instructions: {
            type: String,
            required: true
        },
        lastTimeModified: {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);
const Recipe = mongoose.model("Recipe", recipeSchema);

// Server
async function run() {
    const ingredient1 = new Ingredient({ name: 'salt' });
    const ingredient2 = new Ingredient({ name: 'pepper' });

    // Saving ingredients
    await ingredient1.save();
    await ingredient2.save();

    // Creating a recipe with references to ingredients
    const recipe = new Recipe({
        title: 'Spaghetti Carbonara',
        instructions: 'Cook pasta, mix with eggs, cheese, and bacon, season with salt and pepper.',
        ingredients: [ingredient1._id, ingredient2._id]
    });

    await recipe.save();
}

module.exports = {
    run,
    Ingredient,
    Recipe
}