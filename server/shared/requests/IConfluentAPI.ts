import { ICluster } from "../KafkaInterfaces";

const {
  ICluster,
  IMessages,
  ITopics,
  IEnvironments,
  IBroker,
  ITopicDetails,
  IKafkaCredentials,
} = require("../KafkaInterfaces");

interface IConfluentAPI {
  //   authToken: any;
  listEnvironments(accountID): Promise<(typeof IEnvironments)[]>;
  listClusters(accountID, confluentEnv): Promise<(typeof ICluster)[]>;
  listBrokers(clusterID, confluentEnv): Promise<(typeof IBroker)[]>;
  getTopics(topicNames, confluentEnv): Promise<(typeof ITopicDetails)[]>;
  listTopicsFromClusters(clusters: ICluster[]): Promise<(typeof ITopics)[]>;
  listMessagesFromTopic(
    kafka,
    kafka_credentials: typeof IKafkaCredentials,
    kafka_bootstrap_server,
    topic
  ): Promise<(typeof IMessages)[]>;
}

export default IConfluentAPI;
