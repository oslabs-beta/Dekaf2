import IConfluentAPI from "../shared/requests/IConfluentAPI";

const ConfluentAPI = require("../shared/requests/ConfluentAPI");
// const token =
//   "U1dDU1RPWUhCVU1TWlFIVjpPb2l6bWFYQWU0dC9HOTNQaDBVUDJjeDY0em05VmRDUjVBclJSV1M1MFZVejFOYkk4UFZFSVUwbnBoUnZEQTFx";
//Cloud APi
// const token =
//   "WlFaRDNBQVJOQ0ozT1dSQjpWRDl0bWl3Y3htdytJZWY0ZXlmZHQxWEYxSHFBZWlNb25NTktYS20yWi81TlFIdTRRQ3VzWDlNcUNFZVBqbzNN";

// Cloud API Key
//key: VCA4H44DQR4LNZ2H
//secret: 4kuWGOWcRmIFn9eO4sHVA0GDxPgNYDoLHKkqCmUCiCjY/SdXATUs5evXH492Y2cC
// Base64 Encoded: VkNBNEg0NERRUjRMTloySDo0a3VXR09XY1JtSUZuOWVPNHNIVkEwR0R4UGdOWURvTEhLa3FDbVVDaUNqWS9TZFhBVFVzNWV2WEg0OTJZMmND
const authTokens = {
  cloudApiToken:
    "VkNBNEg0NERRUjRMTloySDo0a3VXR09XY1JtSUZuOWVPNHNIVkEwR0R4UGdOWURvTEhLa3FDbVVDaUNqWS9TZFhBVFVzNWV2WEg0OTJZMmND",
  resourceToken:
    "WlFaRDNBQVJOQ0ozT1dSQjpWRDl0bWl3Y3htdytJZWY0ZXlmZHQxWEYxSHFBZWlNb25NTktYS20yWi81TlFIdTRRQ3VzWDlNcUNFZVBqbzNN",
};
// const token =
//   "VkNBNEg0NERRUjRMTloySDo0a3VXR09XY1JtSUZuOWVPNHNIVkEwR0R4UGdOWURvTEhLa3FDbVVDaUNqWS9TZFhBVFVzNWV2WEg0OTJZMmND";
// Cluster key: 73OSXDYVABNX3C6I
// Cluster secret: ZRT9vOrT5oU6CZTEouHN5NjNsS9EnQc71xoWagt0Noj4X4QKsvIwqgDkNMuPFnWg
// cLUSTER BASE 64: NzNPU1hEWVZBQk5YM0M2STpaUlQ5dk9yVDVvVTZDWlRFb3VITjVOak5zUzlFblFjNzF4b1dhZ3QwTm9qNFg0UUtzdkl3cWdEa05NdVBGbldn
// 2nd token (works): WlFaRDNBQVJOQ0ozT1dSQjpWRDl0bWl3Y3htdytJZWY0ZXlmZHQxWEYxSHFBZWlNb25NTktYS20yWi81TlFIdTRRQ3VzWDlNcUNFZVBqbzNN
const confluentAPI = new ConfluentAPI(authTokens);

const kafkaController = {
  async getAllEnvironments(req, res, next) {
    try {
      const environments = await confluentAPI.listEnvironments();
      res.locals.payload = await environments;
      next();
    } catch (e) {
      console.log(`Error on kafkaController.getAllEnvironments: `, e);
      next({});
    }
  },
  async getAllClusters(req, res, next) {
    try {
      const { accountID, environmentID } = req.body;
      const clusters = await confluentAPI.listClusters(
        accountID,
        environmentID
      );
      res.locals.payload = await clusters;
      next();
    } catch (e) {
      console.log(`Error on kafkaController.getAllClusters: `, e);
      next({});
    }
  },
  async getAllBrokers(req, res, next) {
    try {
      const { accountID, environmentID } = req.body;
      const clusters = await confluentAPI.listBrokers(accountID, environmentID);
      res.locals.payload = clusters;
      next();
    } catch (e) {
      console.log(`Error on kafkaController.getAllBrokers: `, e);
      next({});
    }
  },
  async getAllTopics(req, res, next) {
    try {
      console.log(`Getting all topics`);
      const { clusters } = req.body;
      console.log(`from clusters `, clusters);
      // We need the restEndpoint and clusterID to get all topics
      const topics = await confluentAPI.listTopicsFromClusters(clusters);
      console.log(`topics: `, await topics);
      res.locals.payload = await topics;
      next();
    } catch (e) {
      console.log(`Error on kafkaController.getAllTopics: `, e);
      next({});
    }
  },
  async getTopics(req, res, next) {
    try {
      const { topicNames } = req.query.topicNames;
      const topics = await confluentAPI.getTopics(topicNames, confluentEnv);

      res.locals.payload = await topics;
      next();
    } catch (e) {
      console.log(`Error on kafkaController.getTopics: `, e);
      next({});
    }
  },
  async getTopicsPartitions(req, res, next) {
    try {
      const { topicNames } = req.query.topicNames;
      const topicsPartitions = await confluentAPI.getTopicsPartitions(
        topicNames,
        confluentEnv
      );
      res.locals.payload = topicsPartitions;
      next();
    } catch (e) {
      console.log(`Error on kafkaController.getTopics: `, e);
      next({});
    }
  },
  async getAllMessages(req, res, next) {
    try {
      //topicID
      const requestedClusters = req.body.clusters;
      const requestedTopics = req.body.topics;
      const { kafka_credentials } = req.body.kafka_credentials;
      console.log("requestedClusters: ", requestedClusters[0]);
      console.log("requestedTopics: ", requestedTopics[0].metadata.self);
      const myClusters = {};
      requestedClusters.forEach(
        (cluster) =>
          (myClusters[cluster.id] =
            cluster.spec.kafka_bootstrap_endpoint.replace("SASL_SSL://", ""))
      );

      // console.log(`myClusters `, myClusters);
      // const allTopics = "";
      const allMessages = [];
      for (let i = 0; i < requestedTopics.length; i++) {
        let kafka_bootstrap_server = myClusters[requestedTopics[i].cluster_id];
        let topic = requestedTopics[i].topic_name;
        console.log("kafka_bootstrap_server ", kafka_bootstrap_server);
        let messages = await confluentAPI.listMessagesFromTopic(
          kafka_credentials,
          kafka_bootstrap_server,
          topic
        );
        allMessages.push(messages);
      }
      res.locals.payload = allMessages;
      next();
    } catch (e) {
      console.log(`Error on kafkaController.getAllMessages: `, e);
      next({});
    }
  },
  async getMetric(req, res, next) {
    try {
      //metricID
      const { metricID } = req.params.metricID;
      next();
    } catch (e) {
      console.log(`Error on kafkaController.getMetric: `, e);
      next({});
    }
  },
};

module.exports = kafkaController;
