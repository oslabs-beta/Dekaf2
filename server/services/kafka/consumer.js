// const kafka = require("./kafka");
const { Kafka } = require("kafkajs");

// const kafka = new Kafka({
//   clientId: 'dekaf-data-retrieval',
//   brokers: [kafka_bootstrap_server],
//   ssl,
//   sasl,
// });

// kafks = {
//   kafka_bootstrap_server,
//   kafka_username,
//   kafka_password
// }

class Consumer {
  constructor(kafka, kafka_credentials, kafka_bootstrap_server) {
    this.kafka_username = kafka_credentials.kafka_username;
    this.kafka_password = kafka_credentials.kafka_password;
    this.kafka_bootstrap_server = kafka_bootstrap_server;
    this.kafka = kafka;
    this.groupId = "dekaf";
    this.consumer = kafka.consumer({
      groupId: this.groupId,
    });
  }

  async connect() {
    try {
      await this.consumer.connect();
    } catch (error) {
      console.error("Error connecting to consumer", error);
      throw error;
    }
  }

  async subscribe(topic) {
    try {
      await this.consumer.subscribe({
        topic: topic,
        fromBeginning: true,
      });
    } catch (error) {
      console.error("Error subscribing to consumer", error);
      throw error;
    }
  }

  async run() {
    try {
      await this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          console.log("Received message", {
            topic,
            partition,
            key: message.key.toString(),
            value: message.value.toString(),
          });
        },
      });
    } catch (error) {
      console.error("Error consuming messages", error);
      throw error;
    }
  }
}

module.exports = Consumer;

// const consumer = new Consumer('test_group_1');
// consumer.connect();
// consumer.subscribe('topic_1');
// consumer.run();

// main().catch(async error => {
//   console.error(error)
//   try {
//     await consumer.disconnect()
//   } catch (e) {
//     console.error('Failed to gracefully disconnect consumer', e)
//   }
//   process.exit(1)
// })
