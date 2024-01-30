import {
  ICluster,
  IMessages,
  ITopics,
  IEnvironments,
} from "../KafkaInterfaces";

interface IConfluentAPI {
  //   authToken: any;
  listEnvironments(accountID): Promise<IEnvironments[]>;
  listClusters(accountID, confluentEnv): Promise<ICluster[]>;
  // listTopicsFromCluster(clusterID): Promise<ITopics[]>;
  // listMessagesFromTopic(topicID): Promise<IMessages[]>;
}

export default IConfluentAPI;
