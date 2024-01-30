const kafka = require('./kafka')

class Consumer {

  constructor(groupId){
    this.groupId = groupId;

    this.consumer = kafka.consumer({
      groupId: this.groupId
    })
  }
  

    async connect(){
      await this.consumer.connect();
    } 

    async subscribe(topic){

      await this.consumer.subscribe({
        //topic: 'topic_1',
        topic: topic,
        fromBeginning: true
      })

    }
    
    async run(){

      await this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          console.log('Received message', {
            topic,
            partition,
            key: message.key.toString(),
            value: message.value.toString()
          })
        }
      })

    }
    

}

const consumer = new Consumer('test_group_1');
consumer.connect();
consumer.subscribe('topic_1');
consumer.run();

// main().catch(async error => {
//   console.error(error)
//   try {
//     await consumer.disconnect()
//   } catch (e) {
//     console.error('Failed to gracefully disconnect consumer', e)
//   }
//   process.exit(1)
// })

