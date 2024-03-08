const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json(
        {
            "users": [
                {
                    "id": 1,
                    "name": "John"
                },
                {
                    "id": 2,
                    "name": "Doe"
                }
            ]
        }
    );

    console.log('GET /');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});