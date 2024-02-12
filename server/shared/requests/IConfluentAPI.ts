import {
  ICluster,
  IMessages,
  ITopics,
  IEnvironments,
  IBroker,
  ITopicDetails,
} from "../KafkaInterfaces";

interface IConfluentAPI {
  //   authToken: any;
  listEnvironments(accountID): Promise<IEnvironments[]>;
  listClusters(accountID, confluentEnv): Promise<ICluster[]>;
  listBrokers(clusterID, confluentEnv): Promise<IBroker[]>;
  getTopics(topicNames, confluentEnv): Promise<ITopicDetails[]>;
  listTopicsFromCluster(confluentEnv): Promise<ITopics[]>;
  // listMessagesFromTopic(topicID): Promise<IMessages[]>;
}

export default IConfluentAPI;
