const express = require("express"),
  server = express(),
  port = process.env.PORT || 5000,
  cors = require("cors");
server.use(cors());
server.use(express.json());
server.get("/api", (req, res) => {
  res.status(200).send("<h1>Welcome to the API</h1>");
});
server.listen(port, () => console.log(`Server running on port: ${port}`));
