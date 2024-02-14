const {
  IBroker,
  ICluster,
  IEnvironments,
  IMessages,
  ITopics,
} = require("../KafkaInterfaces");

import { ICluster } from "../KafkaInterfaces";
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
      return await parsed.data;
    } catch (e) {
      console.log(`error`, e);
    }
  }
  async listClusters(accountID: string, confluentEnv: string) {
    try {
      //Retrieve all environmentIDs
      let environments = await this.listEnvironments();
      const environmentIDs = await environments.map((env) => env["id"]);
      const clusters = [];

      //Retrieve clusters from each environment
      for (let i = 0; i < environmentIDs.length - 1; i++) {
        const res = await fetch(
          `https://api.confluent.cloud/cmk/v2/clusters?environment=${environmentIDs[i]}`,
          {
            headers: {
              Authorization: `Basic ${this.authToken}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        let parsed = await res.json();
        if (await parsed.data) {
          await parsed.data.forEach((cluster) => {
            clusters.push(cluster);
          });
        }
      }
      return await clusters;
    } catch (e) {
      console.log(`Error on ConfluentAPI.listClusters: `, e);
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
  async listTopicsFromClusters(
    clusters: ICluster[]
  ): Promise<(typeof ITopics)[]> {
    try {
      const topics = [];

      //Retrieve topics from each environment
      for (let i = 0; i < clusters.length; i++) {
        const clusterRestEndpoint = clusters[i].spec.http_endpoint;
        const clusterID = clusters[i].id;

        const res = await fetch(
          `${clusterRestEndpoint}/kafka/v3/clusters/${clusterID}/topics`,
          {
            headers: {
              Authorization: `Basic ${this.authToken}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        let parsed = await res.json();

        if (await parsed.data) {
          await parsed.data.forEach((topic) => {
            topics.push(topic);
          });
        }
      }
      return await topics;
    } catch (e) {
      console.log(`Error on ConfluentAPI.listTopicsFromClusters: `, e);
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
