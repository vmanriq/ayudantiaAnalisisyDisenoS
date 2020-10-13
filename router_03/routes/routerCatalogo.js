const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Estas en el catalogo");
});

router.get("/autos", (req, res) => {
  res.send("Estas en el catalogo de autos");
});

module.exports = router;
