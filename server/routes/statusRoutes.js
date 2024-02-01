const express = require("express");

// const repository = require("../repositories/statusRepository");

module.exports = router = express.Router();

router.get("/", async (req, res) => {
  res.send({
    status: 200,
    updated_at: new Date().toISOString(),
    dependencies: {
      database: {
        // version: dbVersionResult,
        // max_connections: parseInt(databaseMaxConnectionsResult),
        // databaseOpenedConnectionsResult: databaseOpenedConnectionsResult,
      },
    },
  });
});
