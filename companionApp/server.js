const kafka = require('./kafka');
const KafkaProducer = require('./Classes/producer');
require('dotenv').config();

const producer1 = new KafkaProducer();
producer1.setup().then(() => producer1.send());
