const db = require("./config");

const dbConn = db.dbConnect();

var express = require("express");
var app = express();

app.use(express.json());

var cors = require("cors");

app.use(cors());

//import register api here.
const Register = require("./Register");
const Login = require("./Login");

//use it in express i.e. serverside.
app.use("/Register", Register);
app.use("/Login", Login);

//locals is a in built variable.
app.locals.dbConn = dbConn;
//module.exports = router;
var server = app.listen(8080, function () {});
