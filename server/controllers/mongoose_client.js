const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.set("mongodb://localhost:27017/cmpt372assignment2", { useNewUrlParser: true });

let database = mongoose.connection;
database.on("error", console.error.bind(console, "connection error"));

let ingredientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
    }
);

let recipeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        ingredients: {
            type: [mongoose.Schema.Types.ObjectId],
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

const Ingredient = mongoose.model("Ingredient", ingredientSchema);
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = {
    Ingredient,
    Recipe
};

// export const databaseHelper = {
//     getRecipes: async function() {
//         return await database.collection("recipes").find({}).toArray();
//     },
//     getRecipe: async function(id) {
//         return await database.collection("recipes").findOne({ _id: id });
//     },
//     addRecipe: async function(recipe) {
//         return await database.collection("recipes").insertOne(recipe);
//     },
//     updateRecipe: async function(id, recipe) {
//         return await database.collection("recipes").updateOne({ _id: id }, { $set: recipe });
//     },
//     deleteRecipe: async function(id) {
//         return await database.collection("recipes").deleteOne({ _id: id });
//     },
//     getIngredients: async function() {
//         return await database.collection("ingredients").find({}).toArray();
//     },
//     getIngredient: async function(id) {
//         return await database.collection("ingredients").findOne({ _id: id });
//     },
//     addIngredient: async function(ingredient) {
//         return await database.collection("ingredients").insertOne(ingredient);
//     },
//     updateIngredient: async function(id, ingredient) {
//         return await database.collection("ingredients").updateOne({ _id: id }, { $set: ingredient });
//     },
//     deleteIngredient: async function(id) {
//         return await database.collection("ingredients").deleteOne({ _id: id });
//     },
//     getRecipesWithIngredient: async function(ingredient) {
//         return await database.collection("recipes").find({ ingredients: { $elemMatch: { name: ingredient } } }).toArray();
//     },
//     getIngredientsInRecipe: async function(recipe) {
//         return await database.collection("recipes").findOne({ name: recipe });
//     },
//     getRecipesWithIngredient: async function(ingredient) {
//         return await database.collection("recipes").find({ ingredients: { $elemMatch: { name: ingredient } } }).toArray();
//     },
//     getIngredientsInRecipe: async function(recipe) {
//         return await database.collection("recipes").findOne({ name: recipe });
//     },
//     getRecipesWithIngredient: async function(ingredient) {
//         return await database.collection("recipes").find({ ingredients: { $elemMatch: { name: ingredient } } }).toArray();
//     },
//     getIngredientsInRecipe: async function(recipe) {
//         return await database.collection("recipes").findOne({ name: recipe });
//     },
//     getRecipesWithIngredient: async function(ingredient) {
//         return await database.collection("recipes").find({ ingredients: { $elemMatch : { name: ingredient } } }).toArray();
//     }
// }