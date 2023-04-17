const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Register = new Schema(
  {
    userName: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
  },
  { collection: "register" }
);
module.exports = mongoose.model("Register", Register);
