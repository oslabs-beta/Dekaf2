const express = require("express");
require("dotenv").config();
const statusRouter = require("../routes/statusRoutes");
const kafkaRouter = require("../routes/kafkaRoutes");
const app = express();

//GLOBAL MIDDLEWARES
app.use(express.json());

// Logs incoming requests for testing purposes
app.all("*", (req, res, next) => {
  console.log(`
  ####### NEW REQUEST #######
  Method: ${req.method}
  URL: ${req.url}
  Body: ${JSON.stringify(req.body)}
  Cookies: ${req.headers.cookie}
  ############################
  `);
  next();
});

//Hello world - first route to test application
app.get("/", (req, res) => {
  res.json({ message: "Hello, welcome to deKaf!" });
});

//ROUTERS
app.use("/api/v1/status", statusRouter); // Overall application metrics and status

app.use("/api/v1/kafka", kafkaRouter); // Overall application metrics and status

//GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: err.status || 500,
    message: { err: err.message || "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// 404 Handler
app.use("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`deKaf server started listening on port ${process.env.PORT}`);
});
