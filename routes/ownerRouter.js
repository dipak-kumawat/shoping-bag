const express = require("express");
const router = express.Router();
const owerModel = require("../models/owener");

router.get("/", function (req, res) {
  res.send("hey it working");
});

if (process.env.NODE_ENV === "development") {
  router.post("/creat", async function (req, res) {
    const owner = await owerModel.find();
    if (owner.length > 0) {
      return res
        .status(503)
        .send("you dont have permission to create a new owner");
    }
    let { fullname, email, password } = req.body;
    let createdOwner = await owerModel.create({
      fullname,
      email,
      password,
    });``
    res.status(201).send(createdOwner);
  });
}

module.exports = router;
