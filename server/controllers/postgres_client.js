const { Pool } = require('pg');
export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "root",
});