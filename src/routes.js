const express = require("express");

const routes = express.Router();

const DevController = require("./controllers/dev-dontroller/index");

routes.post("/devs", DevController.store);
module.exports = routes;
