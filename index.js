const express = require("express"),
  server = require("./server.js"),
  app = express(),
  cors = require("cors");
app.use(server);
app.use(express.json());
app.use(cors());

