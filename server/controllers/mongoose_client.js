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
recipeSchema.pre("save", function (next) {
    this.lastTimeModified = Date.now();
    next();
});
const Recipe = mongoose.model("Recipe", recipeSchema);

const mongooseHelper = {
    getRecipes: async function () {
        let result = await Recipe.find().populate("ingredients");
        
        let formattedResult = result.map(recipe => {
            // Extracting relevant fields from the recipe object
            const { id, title, ingredients, instructions, lastTimeModified } = recipe;
        
            // Mapping ingredient objects to their names
            const ingredientNames = ingredients.map(ingredient => ingredient.name);
        
            // Constructing the formatted recipe object
            return {
                id,
                title,
                ingredients: ingredientNames,
                instructions,
                lastTimeModified
            };
        });

        return formattedResult;
    },

    addRecipe: async function (recipe) {
        let ingredientIds = [];
        for (let ingredient of recipe.ingredients) {
            let ingredientObject = await Ingredient.findOne({ name: ingredient });
            if (ingredientObject) {
                ingredientIds.push(ingredientObject._id);
            } else {
                let newIngredient = new Ingredient({ name: ingredient.trim() });
                await newIngredient.save();
                ingredientIds.push(newIngredient._id);
            }
        }

        let newRecipe = new Recipe({
            title: recipe.title,
            ingredients: ingredientIds,
            instructions: recipe.instructions
        });
        await newRecipe.save();
        return newRecipe;
    },

    deleteRecipe: async function (recipeId) {
        let result = await Recipe.deleteOne({ _id: recipeId });
        return result;
    },

    updateRecipe: async function (recipeId, newRecipe) {
        let ingredientIds = [];
        for (let ingredient of newRecipe.ingredients) {
            let ingredientObject = await Ingredient.findOne({ name: ingredient });
            if (ingredientObject) {
                ingredientIds.push(ingredientObject._id);
            } else {
                let newIngredient = new Ingredient({ name: ingredient.trim() });
                await newIngredient.save();
                ingredientIds.push(newIngredient._id);
            }
        }

        let result = await Recipe.updateOne(
            { _id: recipeId },
            {
                title: newRecipe.title,
                ingredients: ingredientIds,
                instructions: newRecipe.instructions
            }
        );
        return result;
    }
}

module.exports = {
    mongooseHelper,
    Ingredient,
    Recipe
}