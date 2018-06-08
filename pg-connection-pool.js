"use strict"; 
const pg = require("pg");

//Use pool constructor function to create an object that will connect us to our data base
const pool = new pg.Pool({
    user: "postgres",
    password: "C_Moses",
    host: "localhost",
    port: 5432,
    database: "ExpressShopDB",
    ssl: false
});

//Export our object into each file with routess
module.exports = pool; 