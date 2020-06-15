const express = require("express");
const apiRouter = express.Router();

apiRouter.get("/health", (req, res) => {
  res.send();
});

module.exports = apiRouter;
