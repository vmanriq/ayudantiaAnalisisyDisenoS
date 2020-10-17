const router = require("express").Router();
const { User } = require("../models");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const valUser = Joi.object({
  username: Joi.string().min(5).required(),
  email: Joi.string().min(4).required().email(),
  pass: Joi.string().min(4).required(),
});

const loginVal = Joi.object({
  email: Joi.string().min(4).required().email(),
  pass: Joi.string().min(4).required(),
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.send("pass or email is wrong");
  //check is pass is correct
  const validPass = await bcrypt.compare(req.body.pass, user.pass);
  if (!validPass) return res.status(400).send("wrong pass or username");
  //create and asign token
  console.log(process.env.TOKEN_SECRET);
  const token = await jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  return res.header("auth-token", token).send(token);
});

router.post("/register", async (req, res) => {
  try {
    //validate data
    const { error } = valUser.validate(req.body);
    if (error) return res.send(error.details[0].message);

    // check if the email already exists
    const checkEmail = await User.findOne({ where: { email: req.body.email } });
    if (checkEmail) return res.send("email already exists");
    //has the password
    console.log("entro despues de chequear el email");
    const salt = await bcrypt.genSalt(10);
    const hasPass = await bcrypt.hash(req.body.pass, salt);
    //create user
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      pass: hasPass,
    });
    console.log(user);
    return res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.get("/user", async (req, res) => {
  const allUser = await User.findAll();
  console.log(allUser);
  res.send(allUser);
});
module.exports = router;
