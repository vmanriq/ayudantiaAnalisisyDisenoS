const express = require("express");
const router = express.Router();
const { Task } = require("../models");
const verifySign = require("./verifyToken");

router.get("/", verifySign, async (req, resp) => {
  try {
    const allTask = await Task.findAll({ where: req.query });
    resp.send(allTask);
  } catch (error) {
    resp.status(400).send("Error al hacer una q a la base de datos ");
  }
});
router.get("/:id", async (req, resp) => {
  try {
    const allTask = await Task.findAll({ where: req.params });
    console.log(req.params);
    resp.send(allTask);
  } catch (error) {
    resp.status(400).send("Error al hacer una q a la base de datos ");
  }
});

router.post("/", async (req, resp) => {
  try {
    const genTask = await Task.create(req.body);
    resp.send(genTask);
  } catch (error) {
    resp.status(400).send(error);
  }
});

module.exports = router;
