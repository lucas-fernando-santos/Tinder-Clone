const express = require("express");

const routes = express.Router();

const DevController = require("./controllers/dev-dontroller/index");
const LikeController = require("./controllers/like-controller");

routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeController.store);
module.exports = routes;
