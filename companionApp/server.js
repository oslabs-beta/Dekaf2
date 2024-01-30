const kafka = require('./kafka');
const KafkaProducer = require('./Classes/producer');
require('dotenv').config();

//producer takes in (topic, msgKey, msgValue)
const producer1 = new KafkaProducer();
producer1.setup().then(() => producer1.send());

const producerNumIncrementor = new KafkaProducer(null, 'numIncrementor', 1);
producerNumIncrementor.setup().then(() =>
  setInterval(() => {
    producerNumIncrementor.send();
    producerNumIncrementor.msgValue++;
  }, 2000)
);

const producer3 = new KafkaProducer(null, 'hello', 'world');
producer3.setup().then(() => producer3.send());
