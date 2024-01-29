const kafka = require('../kafka');

class KafkaProducer {
  constructor(topic, msgKey, msgValue) {
    this.producer;
    this.topic = topic;
    this.msgKey = msgKey;
    this.msgValue = msgValue;
  }

  async setup() {
    try {
      this.producer = await kafka.producer();
    } catch (error) {
      console.error('Error setting up producer', error);
      throw error;
    }
  }

  async send() {
    try {
      await this.producer.connect();
      const responses = await this.producer.send({
        topic: this.topic || 'topic_1',
        messages: [
          {
            key: this.msgKey || 'No MsgKey Provided',
            value: this.msgValue
              ? JSON.stringify({ test: this.msgValue })
              : JSON.stringify({
                  test: 'No MsgValue Provided',
                }),
          },
        ],
      });
      console.log('Published message', { responses });
    } catch (error) {
      console.error('Error publishing message', error);
    }
  }
}

module.exports = KafkaProducer;
