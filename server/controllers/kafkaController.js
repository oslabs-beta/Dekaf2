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
    } finally {
    }
  },
  async getAllClusters(req, res, next) {
    try {
      const { accountID, environmentID } = req.body;

      const clusters = await confluentAPI.listClusters(
        accountID,
        environmentID
      );

      res.locals.payload = clusters;
      next();
    } catch (e) {
      console.log(`Error on kafkaController.getAllClusters: `, e);
      next({});
    } finally {
    }
  },
  async getAllTopics(req, res, next) {
    //clusterID
    try {
      next();
    } catch (e) {
      console.log(`Error on kafkaController.getAllTopics: `, e);
      next({});
    } finally {
    }
  },
  async getAllMessages(req, res, next) {
    //topicID
    try {
      next();
    } catch (e) {
      console.log(`Error on kafkaController.getAllMessages: `, e);
      next({});
    } finally {
    }
  },
  async getMetric(req, res, next) {
    //metricID
    const { metricID } = req.params.metricID;
    try {
      next();
    } catch (e) {
      console.log(`Error on kafkaController.getMetric: `, e);
      next({});
    } finally {
    }
  },
};

module.exports = kafkaController;
