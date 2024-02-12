const express = require("express");
const kafkaController = require("../controllers/kafkaController");

module.exports = router = express.Router();

router.get(
  "/environments",
  kafkaController.getAllEnvironments,
  async (req, res) => {
    res.status(200).json(res.locals.payload);
  }
);

router.get("/clusters", kafkaController.getAllClusters, async (req, res) => {
  res.status(200).json(res.locals.payload);
});

router.get("/brokers", kafkaController.getAllBrokers, async (req, res) => {
  res.status(200).json(res.locals.payload);
});

router.get("/topics", async (req, res) => {
  res.status(200).json(res.locals.payload);
});

router.get(
  "/topics/:topicNames",
  kafkaController.getTopics,
  async (req, res) => {
    res.status(200).json(res.locals.payload);
  }
);

router.get("/messages", async (req, res) => {
  res.status(200).json(res.locals.payload);
});

router.get("/metrics/:metric", async (req, res) => {
  res.status(200).json(res.locals.payload);
});
