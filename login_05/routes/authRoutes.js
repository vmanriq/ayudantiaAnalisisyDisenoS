const router = require("express").Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const verifyEmail = await User.findOne({
      where: { email: req.body.email },
    });
    if (verifyEmail) return res.status(400).send("ususario ya esta registrado");
    const salt = await bcrypt.salt(10);
    const encryptPass = await bcrypt.hash(req.body.pass, salt);
    const user = User.create({
      pass: encryptPass,
      username: req.body.username,
      email: req.body.email,
    });
    return res.send(user);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) return res.status(400).send("contrasena o pass invalido");
    const valPass = await bcrypt.compare(req.body.pass, user.pass);
    if (!valPass) return res.status(400).send("contrasena o email invaildo");
    //generando token
    const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN);
    return res.header("auth-token", token).send("estas logeado");
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
