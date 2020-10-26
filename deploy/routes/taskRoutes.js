const express = require("express");
const router = express.Router();
const { Task } = require("../models");
const verifySign = require("./verifyToken");

router.get("/", verifySign, async (req, resp) => {
  try {
    const allTask = await Task.findAll({
      where: {
        id_user: req.user.id,
      },
    });
    resp.send(allTask);
  } catch (error) {
    resp.status(400).send(`Error al hacer una q a la base de datos ${req}`);
  }
});
// router.get("/:id", verifySign, async (req, resp) => {
//   try {
//     const allTask = await Task.findAll({ where: req.params });
//     console.log(req.params);
//     resp.send(allTask);
//   } catch (error) {
//     resp.status(400).send("Error al hacer una q a la base de datos ");
//   }
// });

router.post("/", verifySign, async (req, resp) => {
  try {
    const genTask = await Task.create({
      name: req.body.name,
      description: req.body.description,
      finished: req.body.finished,
      id_category: req.body.id_category,
      id_user: req.user.id,
    });
    resp.send(genTask);
  } catch (error) {
    resp.status(400).send(error);
  }
});

module.exports = router;
