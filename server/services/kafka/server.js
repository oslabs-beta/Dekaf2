const kafka = require('./kafka');
const KafkaProducer = require('./Classes/producer');
require('dotenv').config();

//producer takes in (topic, msgKey, msgValue)
const orderMessage = {
  checkoutID: 12345,
  shippingQuoteID: 6789,
  Carrier: 'Kafka Mug',
  WarehouseID: 2,
};

const badMessage = {
  hello: 'bad message',
  Carrier: 'Kafka Mug',
  WarehouseID: 2,
};

const orderProducer = new KafkaProducer(
  'processed_shipments',
  'key',
  orderMessage
);
orderProducer.setup().then(() => orderProducer.send());

const badOrderProducer = new KafkaProducer(
  'processed_shipments',
  'bad_key',
  badMessage
);
badOrderProducer.setup().then(() => badOrderProducer.send());

const producerNumIncrementor = new KafkaProducer(null, 'numIncrementor', 1);
producerNumIncrementor.setup().then(() =>
  setInterval(() => {
    producerNumIncrementor.send();
    producerNumIncrementor.msgValue++;
  }, 2000)
);

const producer3 = new KafkaProducer(null, 'hello', 'world');
producer3.setup().then(() => producer3.send());
