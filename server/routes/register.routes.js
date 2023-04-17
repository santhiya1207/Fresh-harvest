const express = require("express");
const app = express();
const login = express.Router();
let Register = require("../model/Register");
const UserController = require("../controllers/user");

login.post("/Login", async (req, res) => {
  console.log(req.body);
  const { userName, password } = req.body;
  console.log(userName, password);
  const result = await UserController.checkUser(userName, password);
  console.log("result", result);
  if (result.error) {
    return res.status(401).json({
      error: result.error,
    });
  }
  return res.status(200).json({
    user: result,
    message: "User valid",
  });
});


login.route("/Register").post((req, res, next) => {
  Register.create(req.body)
    .then((data) => {
      res.json({ data: data, message: "User Registered Successfully" });
    })
    .catch((error) => {
      return next(error);
    });
});

module.exports = login;
