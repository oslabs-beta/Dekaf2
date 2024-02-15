const { Kafka } = require('kafkajs');
require('dotenv').config();

const { KAFKA_USERNAME: username, KAFKA_PASSWORD: password } = process.env;
const sasl =
  username && password ? { username, password, mechanism: 'plain' } : null;
const ssl = !!sasl;

// This creates a client instance that is configured to connect to the Kafka broker provided by
// the environment variable KAFKA_BOOTSTRAP_SERVER
const kafka = new Kafka({
  clientId: 'companionApp',
  brokers: [process.env.KAFKA_BOOTSTRAP_SERVER],
  ssl,
  sasl,
});

module.exports = kafka;
