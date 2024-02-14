import { ICluster } from "../KafkaInterfaces";

const {
  ICluster,
  IMessages,
  ITopics,
  IEnvironments,
  IBroker,
  ITopicDetails,
} = require("../KafkaInterfaces");

interface IConfluentAPI {
  //   authToken: any;
  listEnvironments(accountID): Promise<(typeof IEnvironments)[]>;
  listClusters(accountID, confluentEnv): Promise<(typeof ICluster)[]>;
  listBrokers(clusterID, confluentEnv): Promise<(typeof IBroker)[]>;
  getTopics(topicNames, confluentEnv): Promise<(typeof ITopicDetails)[]>;
  listTopicsFromClusters(clusters: ICluster[]): Promise<(typeof ITopics)[]>;
  listMessagesFromTopic(topicID): Promise<(typeof IMessages)[]>;
}

export default IConfluentAPI;
