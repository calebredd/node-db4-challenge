const express = require("express"),
  server = express(),
  recipeRoutes = require("./recipes/routes"),
  port = process.env.PORT || 4000;

server.use("/", recipeRoutes);

server.listen(port, () => {
  console.log("Server is listening on port:" + port);
});

module.exports = server;
