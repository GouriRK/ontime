var mongoose = require("mongoose");
mongoose.set("strictQuery", false);
var express = require("express");

function dbConnect() {
  mongoose.connect("mongodb://localhost:27017/Database", {
    useNewUrlParser: true,
  });

  console.log("database connected");

  var conn = mongoose.connection;

  return conn;
}

module.exports = {
  dbConnect,
};
