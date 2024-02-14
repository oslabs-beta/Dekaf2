import IConfluentAPI from "../shared/requests/IConfluentAPI";

const ConfluentAPI = require("../shared/requests/ConfluentAPI");
const token =
  "U1dDU1RPWUhCVU1TWlFIVjpPb2l6bWFYQWU0dC9HOTNQaDBVUDJjeDY0em05VmRDUjVBclJSV1M1MFZVejFOYkk4UFZFSVUwbnBoUnZEQTFx";
const confluentAPI = new ConfluentAPI(token);

const kafkaController = {
  async getAllEnvironments(req, res, next) {
    try {
      const environments = await confluentAPI.listEnvironments();
      res.locals.payload = environments;
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
      console.log(`Found this clusters `, await clusters);
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
      res.locals.payload = topics;
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
