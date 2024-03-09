export const serverClient = {
    get: async function() {
        return fetch("http://localhost:3000/recipes/all")
                .then(response => response.json())
                .then(data => data)
                .catch(error => console.log(error));
    },

    post: async function(data: any) {
        return fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.error(error));
    }
}