"use strict";
//Require Express
const express = require("express");
//Declare a Router object to handle the routes for our courses
const cartRouter = express.Router();

const cartItems = [
    {
      product: "Coca-Cola",
      price: 6,
      quantity: 12,
      id: 0
    },
    {
      product: "Apples",
      price: 3,
      quantity: 4,
      id: 1
    },
    {
      product: "Bagels",
      price: 3,
      quantity: 6,
      id: 2
    },
    {
      product: "Sushi",
      price: 10,
      quantity: 1,
      id: 3
    },
    {
      product: "Shrimp",
      price: 6,
      quantity: 1,
      id: 4
    },
    {
      product: "Salsa",
      price: 5,
      quantity: 1,
      id: 5
    },
    {
      product: "Chips",
      price: 3,
      quantity: 1,
      id: 6
      }
  ];
  
  let idCount = 7; 

  cartRouter.get("/cart-items", (req, res)=>{
    //students - variable referring back to the array
    res.send(cartItems);
  });

  //Allows us to add an item
  cartRouter.post("/cart-items", (req, res)=>{
      console.log(req.body);
      cartItems.push({
          product: req.body.product,
          price: req.body.price,
          quantity: req.body.quantity,
          id: idCount++
      })
      res.send(cartItems)
  });

  cartRouter.delete("/cart-items/:id", (req, res)=>{
      console.log(req.params.id);
      for (let item of cartItems){
          if(item.id == req.params.id){
              cartItems.splice(cartItems.indexOf(item), 1);
          }
      }
      res.send(cartItems)
  });

  cartRouter.put("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    for (let item of cartItems){
      if (item.id == req.params.id){
        cartItems.splice(cartItems.indexOf(item), 1,{
            product: req.body.product,
            price: req.body.price,
            quantity: req.body.quantity,
            id: item.id
        });
      }  
    }
    res.send(cartItems);
  });

  module.exports = cartRouter;
