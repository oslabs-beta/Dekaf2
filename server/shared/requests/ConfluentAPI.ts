import {
  IBroker,
  ICluster,
  IEnvironments,
  IMessages,
  ITopics,
} from "../KafkaInterfaces";

import IConfluentAPI from "./IConfluentAPI";

class ConfluentAPI implements IConfluentAPI {
  authToken: any;
  constructor(authToken) {
    this.authToken = authToken;
  }

  async listEnvironments(): Promise<IEnvironments[]> {
    try {
      const res = await fetch(
        `https://api.confluent.cloud/org/v2/environments`,
        {
          headers: {
            Authorization: `Basic ${this.authToken}`,
          },
        }
      );
      let parsed = await res.json();
      console.log(`listEnvironments`, parsed);
      return await parsed.data;
    } catch (e) {
      console.log(`error`, e);
    } finally {
      console.log(`and we're done`);
    }
  }
  async listClusters(
    accountID: string,
    confluentEnv: string
  ): Promise<ICluster[]> {
    try {
      const res = await fetch(
        `https://api.confluent.cloud/cmk/v2/clusters?environment=${confluentEnv}`,
        {
          headers: {
            Authorization: `Basic ${this.authToken}`,
          },
        }
      );
      let parsed = await res.json();
      console.log(`clusters`, parsed);
      return await parsed.data;
    } catch (e) {
      console.log(`error`, e);
    } finally {
      console.log(`and we're done`);
    }
  }
  async listBrokers(
    clusterID: string,
    confluentEnv: string
  ): Promise<IBroker[]> {
    try {
      const res = await fetch(
        `https://api.confluent.cloud/cmk/v3/clusters/${clusterID}/brokers`,
        {
          headers: {
            Authorization: `Basic ${this.authToken}`,
          },
        }
      );
      let parsed = await res.json();
      console.log(`clusters`, parsed);
      return await parsed.data;
    } catch (e) {
      console.log(`error`, e);
    } finally {
      console.log(`and we're done`);
    }
  }
  // listTopicsFromCluster(clusterID: any): Promise<ITopics[]> {}
  // listMessagesFromTopic(topicID: any): Promise<IMessages[]> {}
}

module.exports = ConfluentAPI;
