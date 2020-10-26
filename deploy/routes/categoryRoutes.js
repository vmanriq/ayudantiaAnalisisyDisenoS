const router = require("express").Router();
const { Category } = require("../models");
const verifySign = require("./verifyToken");

router.post("/", verifySign, async (req, resp) => {
  try {
    const category = await Category.create(req.body);
    return resp.send(category);
  } catch (error) {
    resp.status(400).send(error);
  }
});

router.get("/", verifySign, async (req, res) => {
  try {
    const allCat = await Category.findAll();
    return res.send(allCat);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
