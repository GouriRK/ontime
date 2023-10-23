const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();
const app = express();

app.use(express.json());
//handling user request
router.post("/", (req, res, next) => {
  console.log(req.body);

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const dbConn = req.app.locals.dbConn;

  const registerSchema = new mongoose.Schema({
    email: String,
    password: String,
  });
  let Register;
  try {
    Register = mongoose.model("registers");
  } catch (error) {
    Register = mongoose.model("registers", registerSchema);
  }

  const data = new Register({
    email: req.body.email,
    password: req.body.password,
  });

  Register.insertMany(data)
    .then((_value) => {
      res.send({
        status: "success",
        message: "Data is inserted successfully.",
      });
    })
    .catch((_err) => {
      console.log("error" + _err);
    });
});

module.exports = router;
