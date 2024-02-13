const {
  IBroker,
  ICluster,
  IEnvironments,
  IMessages,
  ITopics,
} = require("../KafkaInterfaces");

import IConfluentAPI from "./IConfluentAPI";

class ConfluentAPI implements IConfluentAPI {
  authToken: any;
  constructor(authToken) {
    this.authToken = authToken;
  }

  async listEnvironments(): Promise<(typeof IEnvironments)[]> {
    try {
      const res = await fetch(
        `https://api.confluent.cloud/org/v2/environments`,
        {
          headers: {
            Authorization: `Basic ${this.authToken}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let parsed = await res.json();
      console.log(`listEnvironments`, parsed);
      return await parsed.data;
    } catch (e) {
      console.log(`error`, e);
    }
  }
  async listClusters(
    accountID: string,
    confluentEnv: string
  ): Promise<(typeof ICluster)[]> {
    try {
      const res = await fetch(
        `https://api.confluent.cloud/cmk/v2/clusters?environment=${confluentEnv}`,
        {
          headers: {
            Authorization: `Basic ${this.authToken}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let parsed = await res.json();
      console.log(`clusters`, parsed);
      return await parsed.data;
    } catch (e) {
      console.log(`error`, e);
    }
  }
  async listBrokers(
    clusterID: string,
    confluentEnv: string
  ): Promise<(typeof IBroker)[]> {
    try {
      const res = await fetch(
        `https://api.confluent.cloud/cmk/v3/clusters/${clusterID}/brokers`,
        {
          headers: {
            Authorization: `Basic ${this.authToken}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let parsed = await res.json();
      console.log(`clusters`, parsed);
      return await parsed.data;
    } catch (e) {
      console.log(`error`, e);
    }
  }
  async listTopicsFromCluster(
    confluentEnv: string
  ): Promise<(typeof ITopics)[]> {
    //Might need to change the URl for the actual host (can pass using confluentEnv)
    try {
      const res = await fetch(`https://api.confluent.cloud/cmk/v2/topics`, {
        headers: {
          Authorization: `Basic ${this.authToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let topicNames = await res.json();
      console.log(`topicNames`, topicNames);
      return await topicNames;
    } catch (e) {
      console.log(`error`, e);
    }
  }
  async getTopics(
    topicNames: string,
    confluentEnv: string
  ): Promise<(typeof ITopics)[]> {
    const allTopics = [];
    for (const topic of topicNames) {
      try {
        const res = await fetch(
          `https://api.confluent.cloud/cmk/v2/topics/${topic}`,
          {
            headers: {
              Authorization: `Basic ${this.authToken}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        let parsed = await res.json();
        console.log(`topic`, parsed);
        allTopics.push(topic);
        return await parsed.data;
      } catch (e) {
        console.log(`error`, e);
      }
    }
    return allTopics;
  }
  async getTopicsPartitions(
    topicNames: string,
    confluentEnv: string
  ): Promise<(typeof ITopics)[]> {
    const allTopicsPartitions = [];
    for (const topic of topicNames) {
      try {
        const res = await fetch(
          `https://api.confluent.cloud/cmk/v2/topics/${topic}`,
          {
            headers: {
              Authorization: `Basic ${this.authToken}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        let parsed = await res.json();
        console.log(`topic`, parsed);
        allTopicsPartitions.push(topic);
      } catch (e) {
        console.log(`error`, e);
      }
    }
    return allTopicsPartitions;
  }
  listMessagesFromTopic(topicID: string): Promise<(typeof IMessages)[]> {
    return;
  }
}

module.exports = ConfluentAPI;
