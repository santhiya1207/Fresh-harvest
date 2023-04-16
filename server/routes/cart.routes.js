const express = require("express");

const app = express();
const cartRoute = express.Router();
let Cart = require("../model/Cart");

//Add Product
cartRoute.route("/cart").post((req,res,next)=>{
    Cart.create(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        return next (error);
    })
})

module.exports = cartRoute;
