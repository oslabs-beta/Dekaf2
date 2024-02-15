const express = require("express");
const kafkaController = require("../controllers/kafkaController");

module.exports = router = express.Router();

router.get(
  "/environments",
  kafkaController.getAllEnvironments,
  async (req, res) => {
    console.log(`API Environments `, res.locals.payload);
    res.status(200).json(res.locals.payload);
  }
);

router.get("/clusters", kafkaController.getAllClusters, async (req, res) => {
  console.log(`API Clusters `, res.locals.payload);
  res.status(200).json(res.locals.payload);
});

router.get("/brokers", kafkaController.getAllBrokers, async (req, res) => {
  res.status(200).json(res.locals.payload);
});

router.post("/topics", kafkaController.getAllTopics, async (req, res) => {
  console.log(`API Topics `, res.locals.payload);
  res.status(200).json(res.locals.payload);
});

router.get(
  "/topics/:topicNames",
  kafkaController.getTopics,
  async (req, res) => {
    res.status(200).json(res.locals.payload);
  }
);

router.get(
  "/partitions",
  kafkaController.getTopicsPartitions,
  async (req, res) => {
    res.status(200).json(res.locals.payload);
  }
);

router.post("/messages", kafkaController.getAllMessages, async (req, res) => {
  res.status(200).json(res.locals.payload);
});

router.get("/metrics/:metric", async (req, res) => {
  res.status(200).json(res.locals.payload);
});
