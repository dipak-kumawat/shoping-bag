const express = require("express");
const router = express.Router();
const dbgr = require("debug")("development:mongoose");

router.get("/", function (req, res) {
  res.send("hey it working");
});

router.post("/register", async function (req, res) {
  try {
    let { email, password, fullname } = req.body;

    let user = await userModel.create({
      email, 
      password,
      fullname,
    });
    res.send(user);
  } catch (error) {
    console.log(err.message);
  }
});

module.exports = router;
