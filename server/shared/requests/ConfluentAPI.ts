import {
  ICluster,
  IEnvironments,
  IMessages,
  ITopics,
} from "../KafkaInterfaces";

import IConfluentAPI from "./IConfluentAPI";

class ConfluentAPI implements IConfluentAPI {
  authToken: any;
  constructor(authToken) {
    this.authToken = authToken;
  }

  async listEnvironments(): Promise<IEnvironments[]> {
    try {
      const res = await fetch(
        `https://api.confluent.cloud/org/v2/environments`,
        {
          headers: {
            Authorization: `Basic ${this.authToken}`,
          },
        }
      );
      let parsed = await res.json();
      console.log(`listEnvironments`, parsed);
      return await parsed.data;
    } catch (e) {
      console.log(`error`, e);
    } finally {
      console.log(`and we're done`);
    }
  }
  async listClusters(accountID: any, confluentEnv: any): Promise<ICluster[]> {
    try {
      const res = await fetch(
        `https://api.confluent.cloud/cmk/v2/clusters?environment=${confluentEnv}`,
        {
          headers: {
            Authorization: `Basic ${this.authToken}`,
          },
        }
      );
      let parsed = await res.json();
      console.log(`clusters`, parsed);
      return await parsed.data;
    } catch (e) {
      console.log(`error`, e);
    } finally {
      console.log(`and we're done`);
    }
  }
  // listTopicsFromCluster(clusterID: any): Promise<ITopics[]> {}
  // listMessagesFromTopic(topicID: any): Promise<IMessages[]> {}
}

// curl --request GET \
//   --url '' \
//   --header 'Authorization: Basic REPLACE_BASIC_AUTH'

// key: SWCSTOYHBUMSZQHV
// secret: OoizmaXAe4t/G93Ph0UP2cx64zm9VdCR5ArRRWS50VUz1NbI8PVEIU0nphRvDA1q
//encoded base64: U1dDU1RPWUhCVU1TWlFIVjpPb2l6bWFYQWU0dC9HOTNQaDBVUDJjeDY0em05VmRDUjVBclJSV1M1MFZVejFOYkk4UFZFSVUwbnBoUnZEQTFx
// $ echo -n "SWCSTOYHBUMSZQHV:OoizmaXAe4t/G93Ph0UP2cx64zm9VdCR5ArRRWS50VUz1NbI8PVEIU0nphRvDA1q" | base64

let confluentEnv = "env-3njrwm";
let authToken =
  "U1dDU1RPWUhCVU1TWlFIVjpPb2l6bWFYQWU0dC9HOTNQaDBVUDJjeDY0em05VmRDUjVBclJSV1M1MFZVejFOYkk4UFZFSVUwbnBoUnZEQTFx";

const confluentAPI = new ConfluentAPI(authToken);
console.log(confluentAPI.listEnvironments());

module.exports = ConfluentAPI;

// key: O7S5WJWB3FQSXZ6W
// secret: zX+EjKqYybuisKY6C1rr53H2dPsY9SY3nwZkA25BRy58kiCgd/wcJ2/WF9fEcAmH
