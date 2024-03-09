export const serverClient = {
    getSavedRecipes: async function() {
        return fetch("http://localhost:3000/recipes/all")
                .then(response => response.json())
                .then(data => data)
                .catch(error => console.log(error));
    },
}