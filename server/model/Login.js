const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Login = new Schema(
    {
    userName : {type: String},
    password : {type: String},
},
{
    collection : 'login',
}
);
module.exports = mongoose.model("Login",Login);