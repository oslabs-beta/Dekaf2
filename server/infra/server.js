const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello, welcome to deKaf!" });
});

app.use("*", (req, res) => {
  res.status(404).json({ message: "Pagen not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`deKaf server started listening on port ${process.env.PORT}`);
});
