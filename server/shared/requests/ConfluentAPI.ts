const {
  IBroker,
  ICluster,
  IEnvironments,
  IMessages,
  ITopics,
} = require("../KafkaInterfaces");
const { Kafka } = require("kafkajs");
const Consumer = require("../../services/kafka/consumer");

import { ICluster, IKafkaCredentials } from "../KafkaInterfaces";
import IConfluentAPI from "./IConfluentAPI";

class ConfluentAPI implements IConfluentAPI {
  authTokens: { cloudApiToken: string; resourceToken: string };
  constructor(authTokens) {
    this.authTokens = authTokens;
  }

  async listEnvironments(): Promise<(typeof IEnvironments)[]> {
    try {
      const res = await fetch(
        `https://api.confluent.cloud/org/v2/environments`,
        {
          headers: {
            Authorization: `Basic ${this.authTokens.cloudApiToken}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let parsed = await res.json();
      return await parsed.data;
    } catch (e) {
      console.log(`Error in ConfluentAPI | listEnvironments:`, e);
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
              Authorization: `Basic ${this.authTokens.cloudApiToken}`,
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
      console.log(`Error in ConfluentAPI | listClusters: `, e);
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
            Authorization: `Basic ${this.authTokens.cloudApiToken}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let parsed = await res.json();
      console.log(`clusters`, parsed);
      return await parsed.data;
    } catch (e) {
      console.log(`Error in ConfluentAPI | listBrokers: `, e);
    }
  }
  async listTopicsFromClusters(
    clusters: ICluster[]
  ): Promise<(typeof ITopics)[]> {
    console.log(`listTopicsFromClusters`);
    try {
      const topics = [];

      //Retrieve topics from each environment
      for (let i = 0; i < clusters.length; i++) {
        const clusterRestEndpoint = clusters[i].spec.http_endpoint;
        const clusterID = clusters[i].id;
        console.log(`clusterRestEndpoint `, clusterRestEndpoint);
        console.log(
          `this.authTokens.resourceToken `,
          this.authTokens.resourceToken
        );
        const res = await fetch(
          `${clusterRestEndpoint}/kafka/v3/clusters/${clusterID}/topics`,
          {
            headers: {
              Authorization: `Basic ${this.authTokens.resourceToken}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        let parsed = await res.json();
        console.log(`parsed `, await parsed);
        if (await parsed.data) {
          await parsed.data.forEach((topic) => {
            topics.push(topic);
          });
        }
      }
      return await topics;
    } catch (e) {
      console.log(`Error in ConfluentAPI | listTopicsFromClusters: `, e);
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
              Authorization: `Basic ${this.authTokens.resourceToken}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        let parsed = await res.json();

        allTopics.push(topic);
        return await parsed.data;
      } catch (e) {
        console.log(`Error in ConfluentAPI | getTopics: `, e);
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
              Authorization: `Basic ${this.authTokens.resourceToken}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        let parsed = await res.json();

        allTopicsPartitions.push(topic);
      } catch (e) {
        console.log(`Error in ConfluentAPI | getTopicsPartitions: `, e);
      }
    }
    return allTopicsPartitions;
  }

  // async countMessagesFromTopic(kafka, topic) {
  //   const consumerPromises = [];

  //   const consumerCount = 4; // Example: Use 4 consumers

  //   for (let i = 0; i < consumerCount; i++) {
  //     const consumer = kafka.consumer({ groupId: `group-${i}` });
  //     consumer.connect().then(() => {
  //       consumer.subscribe({ topic, fromBeginning: false });
  //       consumer.run({
  //         eachMessage: async () => {
  //           // Do nothing, just consume messages to count them
  //         },
  //       });
  //     });
  //     consumerPromises.push(consumer);
  //   }

  //   await Promise.all(consumerPromises.map((consumer) => consumer.consume()));

  //   let totalMessageCount = 0;
  //   for (const consumer of consumerPromises) {
  //     const { committed } = await consumer.position({ topic });
  //     totalMessageCount += committed;
  //     await consumer.disconnect();
  //   }

  //   console.log(`Total messages in topic ${topic}: ${totalMessageCount}`);
  // }

  async listMessagesFromTopic(
    kafka_credentials: IKafkaCredentials,
    kafka_bootstrap_server: string,
    topic: string
  ): Promise<(typeof IMessages)[]> {
    console.log("kafka_credentials ", kafka_credentials);

    //Create instance of kafka connection
    const sasl =
      kafka_credentials.kafka_username && kafka_credentials.kafka_password
        ? {
            username: kafka_credentials.kafka_username,
            password: kafka_credentials.kafka_password,
            mechanism: "plain",
          }
        : null;

    const ssl = !!sasl;
    const kafka = new Kafka({
      clientId: "dekaf",
      brokers: [kafka_bootstrap_server],
      ssl,
      sasl,
    });

    //Instantiates new consumer
    const consumer = new Consumer(
      kafka,
      kafka_credentials,
      kafka_bootstrap_server
    );
    // let count = await this.countMessagesFromTopic(kafka, topic);
    // console.log(`count is `, count);
    await consumer.connect();
    await consumer.subscribe(topic);
    const messages = await consumer.run();
    // console.log(`Messages: `, messages);
    // const offsets = await consumer.position([{ topic, partition }]);

    return;
  }
}

module.exports = ConfluentAPI;
