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
app.get('/recipes', async (req, res) => {
    let result = await mongooseHelper.getRecipes();
    console.log("List of recipes sent...");
    res.json(result);
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});