const mongoose = require("mongoose");
const config = require('config')
const dbgr = require('debug')('development:mongoose')


mongoose
  .connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(function () {
    console.log("Connected to MongoDB");
    // dbgr("Connected to MongoDB");
  })
  .catch(function (err) {
    console.log("error:", err);
    // dbgr("error:", err);
  });



  module.exports = mongoose.connection;