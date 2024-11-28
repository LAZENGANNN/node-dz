const express = require("express");

const router = express.Router();

router.get("/get", (req, res) => {
  res.status(200).send(`<h1>get works</h1>`);
});

module.exports = router;
