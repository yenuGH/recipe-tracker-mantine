export const serverClient = {
    getRecipes: async function() {
        return fetch("http://localhost:8080/recipes/")
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    return data;
                })
                .catch(error => console.log(error));
    },
    
    saveRecipe: async function(recipe: any) {
        return fetch("http://localhost:8080/recipes/add", {
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

    deleteRecipe: async function(id: string) {
        return fetch(`http://localhost:8080/recipes/delete/${id}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
    },

    updateRecipe: async function(recipe: any) {

        console.log("Updating recipe: ", recipe);

        return fetch(`http://localhost:8080/recipes/update/${recipe.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
    }
}