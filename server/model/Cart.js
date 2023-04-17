const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Cart = new Schema(
    {
    // productId : {type: String},
    productName : {type: String},
    // weight : {type: String},
    // productCategory : {type: String}

},
{
    collection : 'cartItem',
}
);
module.exports = mongoose.model("Cart",Cart);