export const serverClient = {
    getSavedRecipes: async function() {
        return fetch("http://localhost:3000/recipes/all")
                .then(response => response.json())
                .then(data => data)
                .catch(error => console.log(error));
    },
    
    saveRecipe: async function(recipe: any) {
        return fetch("http://localhost:3000/recipes/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
    },
}