const kafka = require('./kafka');
require('dotenv').config();

console.log('this is env', process.env);

const main = async () => {
  const producer = await kafka.producer();
  await producer.connect();

  try {
    const responses = await producer.send({
      topic: 'topic_1', //process.env.TOPIC,
      messages: [
        {
          // Name of the published package as key, to make sure that we process events in order
          key: 'test-event-name', //event.name,

          // The message value is just bytes to Kafka, so we need to serialize our JavaScript
          // object to a JSON string. Other serialization methods like Avro are available.
          value: JSON.stringify({
            test: 'companion 1',
          }),
        },
      ],
    });

    console.log('Published message', { responses });
  } catch (error) {
    console.error('Error publishing message', error);
  }
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
