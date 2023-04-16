const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Login = new Schema(
    {
    username : {type: String},
    password : {type: String},
},
{
    collection : 'login',
}
);
module.exports = mongoose.model("Login",Login);