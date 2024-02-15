const kafka = require('../kafka');

// export default class KafkaProducer {
//  constructor(){
//     this.producer;
//  }

//  async setup() {
//     try {
//       this.producer = await kafka.producer();
//     } catch (error) {
//       console.error('Error setting up producer', error);
//       throw error;
//     }
//   }
  
//  async send(){
//     try {
//               const responses = this.producer.send({
//                 topic: 'topic_1', //process.env.TOPIC,
//                 messages: [
//                   {
//                     // Name of the published package as key, to make sure that we process events in order
//                     key: 'test-event-name', //event.name,
          
//                     // The message value is just bytes to Kafka, so we need to serialize our JavaScript
//                     // object to a JSON string. Other serialization methods like Avro are available.
//                     value: JSON.stringify({
//                       test: 'companion 1',
//                     }),
//                   },
//                 ],
//               });
          
//               console.log('Published message', { responses });
//             } catch (error) {
//               console.error('Error publishing message', error);
//             }
          
//  }

// }


// const main = async () => {
//     const producer = await kafka.producer();
//     await producer.connect();
  
//     try {
//       const responses = await producer.send({
//         topic: 'topic_1', //process.env.TOPIC,
//         messages: [
//           {
//             // Name of the published package as key, to make sure that we process events in order
//             key: 'test-event-name', //event.name,
  
//             // The message value is just bytes to Kafka, so we need to serialize our JavaScript
//             // object to a JSON string. Other serialization methods like Avro are available.
//             value: JSON.stringify({
//               test: 'companion 1',
//             }),
//           },
//         ],
//       });
  
//       console.log('Published message', { responses });
//     } catch (error) {
//       console.error('Error publishing message', error);
//     }
//   };
  
//   main().catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });