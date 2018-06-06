"use strict";
//Require the Express module
const express = require("express");
//Declare app and initialize it to the object returned from calling the Express function
const app = express(); 
//Require the body parser
const bodyParser = require("body-parser");
//Require the cart module into the server
const cartItems = require("./routes/cart-items");

//Tell our application (app) to use body-parser, 
app.use(bodyParser.json()); 
//Tell our app to use the cartItems route
app.use("/portal", cartItems);
//Tell our app to go into the server, look for the public directory,
//& host the public directory
app.use(express.static(__dirname + "/public"));

//Declare a port variable
let port=3000; 
//Create the server
app.listen(port, ()=>console.log(`Server listening on ${port}`));
